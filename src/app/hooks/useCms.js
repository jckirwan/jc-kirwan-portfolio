import { useContext } from "react";
import ContentContext from "../contexts/contexts/content/contentContext";
import { ContentfulClient } from "react-contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const useCms = () => {
  const { setWorkSamples } = useContext(ContentContext || {});

  const contentfulClient = new ContentfulClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const getWorkSamples = async () => {
    await contentfulClient
      .getEntries({
        content_type: "workSample",
      })
      .then((response) => {
        let posts = [];
        response.items.map((item) => {
          posts.push({
            data: item,
            id: item?.sys?.id,
            title: item?.fields?.title,
            logo: item?.fields?.companyLogo?.fields?.file?.url,
            logoAlt: item?.fields?.companyLogo?.fields?.description,
            summary: item?.fields?.summary,
            description: documentToReactComponents(
              item?.fields?.detailedDescription
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
      })
      .catch(console.error);
  };

  return {
    getWorkSamples,
  };
};
