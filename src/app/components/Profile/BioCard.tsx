'use client';
import Link from 'next/link';
import { FileText, GitHub, Linkedin } from 'react-feather';

interface BioCardProps {
  openPanel: () => void;
}

const BioCard: React.FC<BioCardProps> = ({ openPanel }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full rise-in [--stagger:2]">
      <p className="text-base leading-relaxed text-secondary py-6">
        I&apos;m a senior software engineer with 12+ years designing, building,
        and shipping web software — including 8 years building design systems
        and React component libraries across four organizations. I currently
        lead the frontend of Tradify&apos;s migration from a legacy AngularJS
        monolith to a React 19 micro-frontend platform, where I built the design
        system from the ground up and champion AI-assisted engineering practice
        across the organization. I bring technical depth, architectural vision,
        and proven leadership to teams that care about craft.
      </p>
      <div className="flex flex-row flex-wrap w-full justify-center gap-3 pb-4">
        <Link
          target="_blank"
          rel="noreferrer nofollow"
          href="https://www.linkedin.com/in/jc-kirwan-825a0835/"
          className="group flex items-center gap-2 rounded-full border border-edge px-4 py-2 text-sm text-secondary transition-colors hover:border-accent hover:text-primary"
        >
          <Linkedin className="h-4 w-4 text-accent transition-colors group-hover:text-accent-hover" />
          LinkedIn
        </Link>
        <Link
          target="_blank"
          rel="noreferrer nofollow"
          href="https://github.com/jckirwan"
          className="group flex items-center gap-2 rounded-full border border-edge px-4 py-2 text-sm text-secondary transition-colors hover:border-accent hover:text-primary"
        >
          <GitHub className="h-4 w-4 text-accent transition-colors group-hover:text-accent-hover" />
          GitHub
        </Link>
        <button
          onClick={() => openPanel()}
          className="group flex items-center gap-2 rounded-full border border-edge px-4 py-2 text-sm text-secondary transition-colors hover:border-accent hover:text-primary"
        >
          <FileText className="h-4 w-4 text-accent transition-colors group-hover:text-accent-hover" />
          Resume
        </button>
      </div>
    </div>
  );
};
BioCard.displayName = 'BioCard';
export default BioCard;
