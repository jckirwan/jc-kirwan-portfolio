'use client';
import { createElement, useContext } from 'react';
import ContentContext from '../contexts/content/contentContext';
import { ContentfulClient } from 'react-contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const richTextOptions = {
  renderNode: {
    'embedded-asset-block': (node: any) => {
      const file = node?.data?.target?.fields?.file;
      if (!file?.url) return null;
      return createElement('img', {
        src: 'https:' + file.url,
        alt: node?.data?.target?.fields?.description || '',
        loading: 'lazy',
        className:
          'my-6 w-full rounded-lg border border-edge bg-overlay p-3 md:p-4',
      });
    },
  },
};

// TODO: Add proper types for ContentfulClient and context
export const useCms = () => {
  const {
    setWorkSamples,
    setLoading,
    setSkills,
    setWorkExperience,
    setReferences,
    setCaseStudies,
  } = useContext(ContentContext || {});
  // @ts-ignore
  const contentfulClient: any = new ContentfulClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
  });

  const getWorkSamples = async () => {
    setLoading(true);
    try {
      await contentfulClient
        .getEntries({
          content_type: 'workSample',
        })
        .then((response: any) => {
          let posts = [];
          response.items.map((item: any) => {
            posts.push({
              data: item,
              id: item?.sys?.id,
              title: item?.fields?.title,
              logo: item?.fields?.companyLogo?.fields?.file?.url,
              logoAlt: item?.fields?.companyLogo?.fields?.description,
              summary: item?.fields?.summary,
              description: documentToReactComponents(
                item?.fields?.detailedDescription,
                richTextOptions,
              ),
              primaryImage: item?.fields?.primaryImage?.fields?.file?.url,
              primaryImageAlt: item?.fields?.primaryImage?.fields?.description,
              secondaryImage: item?.fields?.secondaryImage?.fields?.file?.url,
              secondaryImageAlt:
                item?.fields?.secondaryImage?.fields?.description,
              technologiesUsed: item?.fields?.technologiesUsed,
              link: item?.fields?.link,
            });
            return setWorkSamples(posts);
          });
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getSkills = async () => {
    setLoading(true);
    try {
      await contentfulClient
        .getEntries({
          content_type: 'skills',
        })
        .then((response: any) => {
          let posts = [];
          response.items.map((item: any) => {
            posts.push({
              id: item?.sys?.id,
              skillsType: item?.fields?.skillsType,
              skills: item?.fields?.skills,
            });
            return setSkills(posts);
          });
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getWorkExperience = async () => {
    setLoading(true);
    try {
      await contentfulClient
        .getEntries({
          content_type: 'workExperience',
        })
        .then((response: any) => {
          let posts = [];
          response.items.map((item: any) => {
            posts.push({
              id: item?.sys?.id,
              organization: item?.fields?.organization,
              jobTitle: item?.fields?.jobTitle,
              startDate: new Date(item?.fields?.startDate),
              endDate: new Date(item?.fields?.endDate),
              jobDuties: documentToReactComponents(item?.fields?.jobDuties),
              skillsUtilized: item?.fields?.skillsUtilized,
            });
            posts.sort((a, b) => (a.endDate > b.endDate ? -1 : 1));
            return setWorkExperience(posts);
          });
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getReferences = async () => {
    setLoading(true);
    try {
      await contentfulClient
        .getEntries({
          content_type: 'reference',
        })
        .then((response: any) => {
          let posts = [];
          response.items.map((item: any) => {
            posts.push({
              id: item?.sys?.id,
              name: item?.fields?.name,
              title: item?.fields?.title,
              organization: item?.fields?.organization,
              linkedIn: item?.fields?.linkedIn,
            });
            return setReferences(posts);
          });
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getCaseStudies = async () => {
    setLoading(true);
    try {
      await contentfulClient
        .getEntries({
          content_type: 'caseStudy',
        })
        .then((response: any) => {
          let posts = [];
          response.items.map((item: any) => {
            posts.push({
              data: item,
              isCaseStudy: true,
              id: item?.sys?.id,
              title: item?.fields?.title,
              logo: item?.fields?.companyLogo?.fields?.file?.url,
              logoAlt: item?.fields?.companyLogo?.fields?.description,
              summary: item?.fields?.summary,
              challenge: documentToReactComponents(
                item?.fields?.challenge,
                richTextOptions,
              ),
              solution: documentToReactComponents(
                item?.fields?.solution,
                richTextOptions,
              ),
              results: documentToReactComponents(
                item?.fields?.results,
                richTextOptions,
              ),
              technologiesUsed: item?.fields?.technologiesUsed,
            });
            return setCaseStudies(posts);
          });
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    getWorkSamples,
    getSkills,
    getWorkExperience,
    getReferences,
    getCaseStudies,
  };
};
