#!/usr/bin/env node
/**
 * Imports the Side Quests content into Contentful.
 *
 * Reads the management token, space and environment from ~/.contentfulrc.json
 * (written by `contentful login` / `contentful space use`), then:
 *   1. creates or updates the `sideQuest` content type and publishes it,
 *   2. uploads each entry's logo from content/side-quests/ as an asset,
 *   3. creates or updates each entry from content/side-quests/entries.json
 *      and publishes it.
 *
 * Idempotent: entries and assets use fixed ids, so re-running updates in place.
 *
 *   node scripts/import-side-quests.mjs            # import and publish
 *   node scripts/import-side-quests.mjs --dry-run  # print what would change
 */
import { readFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(here, '..', 'content', 'side-quests');
const dryRun = process.argv.includes('--dry-run');
const LOCALE = 'en-US';
const CONTENT_TYPE_ID = 'sideQuest';

const rc = JSON.parse(
  await readFile(path.join(homedir(), '.contentfulrc.json'), 'utf8'),
);
const token = rc.managementToken;
const space = rc.activeSpaceId;
const environment = rc.activeEnvironmentId || 'master';
if (!token || !space) {
  console.error('No managementToken / activeSpaceId in ~/.contentfulrc.json');
  process.exit(1);
}

const base = `https://api.contentful.com/spaces/${space}/environments/${environment}`;
const uploadBase = `https://upload.contentful.com/spaces/${space}`;

async function api(method, url, { body, headers = {}, raw } = {}) {
  const init = {
    method,
    headers: { Authorization: `Bearer ${token}`, ...headers },
  };
  if (raw !== undefined) {
    init.body = raw;
  } else if (body !== undefined) {
    init.body = JSON.stringify(body);
    init.headers['Content-Type'] ??=
      'application/vnd.contentful.management.v1+json';
  }
  const res = await fetch(url, init);
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`${method} ${url} -> ${res.status}\n${text}`);
  }
  return text ? JSON.parse(text) : {};
}

async function currentVersion(url) {
  try {
    const existing = await api('GET', url);
    return existing.sys.version;
  } catch (error) {
    if (String(error.message).includes('-> 404')) return undefined;
    throw error;
  }
}

async function upsert(url, body, extraHeaders = {}) {
  const version = await currentVersion(url);
  const headers = { ...extraHeaders };
  if (version !== undefined) headers['X-Contentful-Version'] = String(version);
  return api('PUT', url, { body, headers });
}

async function publish(url, version) {
  return api('PUT', `${url}/published`, {
    headers: { 'X-Contentful-Version': String(version) },
  });
}

// ---------- rich text ----------
const text = (value) => ({ nodeType: 'text', value, marks: [], data: {} });
const paragraph = (value) => ({
  nodeType: 'paragraph',
  data: {},
  content: [text(value)],
});
const bullets = (items) => ({
  nodeType: 'unordered-list',
  data: {},
  content: items.map((item) => ({
    nodeType: 'list-item',
    data: {},
    content: [paragraph(item)],
  })),
});
const document = (blocks) => ({
  nodeType: 'document',
  data: {},
  content: blocks.map((block) =>
    'ul' in block ? bullets(block.ul) : paragraph(block.p),
  ),
});

// ---------- content type ----------
const contentType = {
  name: 'Side Quest',
  description:
    'A personal project told in the case-study shape: challenge, solution, results.',
  displayField: 'title',
  fields: [
    { id: 'title', name: 'Title', type: 'Symbol', required: true },
    {
      id: 'companyLogo',
      name: 'Logo',
      type: 'Link',
      linkType: 'Asset',
      required: true,
      validations: [{ linkMimetypeGroup: ['image'] }],
    },
    { id: 'summary', name: 'Summary', type: 'Text', required: true },
    { id: 'challenge', name: 'Challenge', type: 'RichText', required: true },
    { id: 'solution', name: 'Solution', type: 'RichText', required: true },
    { id: 'results', name: 'Results', type: 'RichText', required: false },
    {
      id: 'technologiesUsed',
      name: 'Technologies used',
      type: 'Array',
      items: { type: 'Symbol', validations: [] },
    },
    {
      id: 'link',
      name: 'Live link',
      type: 'Symbol',
      validations: [{ regexp: { pattern: '^https?://' } }],
    },
    {
      id: 'repository',
      name: 'Repository link',
      type: 'Symbol',
      validations: [{ regexp: { pattern: '^https?://' } }],
    },
    { id: 'order', name: 'Order', type: 'Integer' },
  ].map((field) => ({ localized: false, required: false, ...field })),
};

// ---------- assets ----------
const mimeFor = (file) =>
  ({ '.png': 'image/png', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg' })[
    path.extname(file).toLowerCase()
  ] ?? 'application/octet-stream';

async function upsertAsset(id, file, title) {
  const url = `${base}/assets/${id}`;
  if (dryRun) {
    console.log(`[dry-run] asset ${id} <- ${file}`);
    return;
  }
  const bytes = await readFile(path.join(contentDir, file));
  const upload = await api('POST', `${uploadBase}/uploads`, {
    raw: bytes,
    headers: { 'Content-Type': 'application/octet-stream' },
  });
  const asset = await upsert(url, {
    fields: {
      title: { [LOCALE]: title },
      description: { [LOCALE]: title },
      file: {
        [LOCALE]: {
          contentType: mimeFor(file),
          fileName: file,
          uploadFrom: {
            sys: { type: 'Link', linkType: 'Upload', id: upload.sys.id },
          },
        },
      },
    },
  });
  await api('PUT', `${url}/files/${LOCALE}/process`, {
    headers: { 'X-Contentful-Version': String(asset.sys.version) },
  });
  // Processing is async; poll until the file has a url.
  let processed;
  for (let attempt = 0; attempt < 20; attempt += 1) {
    processed = await api('GET', url);
    if (processed.fields?.file?.[LOCALE]?.url) break;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  if (!processed.fields?.file?.[LOCALE]?.url) {
    throw new Error(`asset ${id} did not finish processing`);
  }
  await publish(url, processed.sys.version);
  console.log(`asset ${id} published (${file})`);
}

// ---------- entries ----------
async function upsertEntry(entry) {
  const url = `${base}/entries/${entry.id}`;
  const assetId = `${entry.id}Logo`;
  const fields = {
    title: { [LOCALE]: entry.title },
    companyLogo: {
      [LOCALE]: { sys: { type: 'Link', linkType: 'Asset', id: assetId } },
    },
    summary: { [LOCALE]: entry.summary },
    challenge: { [LOCALE]: document(entry.challenge) },
    solution: { [LOCALE]: document(entry.solution) },
    results: { [LOCALE]: document(entry.results) },
    technologiesUsed: { [LOCALE]: entry.technologiesUsed },
    order: { [LOCALE]: entry.order },
  };
  if (entry.link) fields.link = { [LOCALE]: entry.link };
  if (entry.repository) fields.repository = { [LOCALE]: entry.repository };

  if (dryRun) {
    console.log(`[dry-run] entry ${entry.id}: ${entry.title}`);
    return;
  }
  await upsertAsset(assetId, entry.logo, entry.logoAlt);
  const saved = await upsert(
    url,
    { fields },
    { 'X-Contentful-Content-Type': CONTENT_TYPE_ID },
  );
  await publish(url, saved.sys.version);
  console.log(`entry ${entry.id} published: ${entry.title}`);
}

// ---------- main ----------
const entries = JSON.parse(
  await readFile(path.join(contentDir, 'entries.json'), 'utf8'),
);

console.log(
  `${dryRun ? '[dry-run] ' : ''}space ${space} / ${environment}: ${entries.length} side quests`,
);

if (!dryRun) {
  const ctUrl = `${base}/content_types/${CONTENT_TYPE_ID}`;
  const saved = await upsert(ctUrl, contentType);
  await publish(ctUrl, saved.sys.version);
  console.log(`content type ${CONTENT_TYPE_ID} published`);
}

for (const entry of entries) {
  await upsertEntry(entry);
}
console.log('done');
