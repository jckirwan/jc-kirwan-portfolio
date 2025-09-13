# JC Kirwan Portfolio

This is the code repository for my portfolio at [https://jc-kirwan.com](https://jc-kirwan.com). It was built to showcase some recent, relevent work samples using [NextJS](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/) and the [Contentful](https://www.contentful.com/) content management system.

## Features

This is a single page application that demonstrates functional components, a custom hook to get data from the Contentful CMS, `/src/app/hooks/useCms.js`, and use of the context api to store data from the hook, `/src/app/contexts/content`. It also features an animation using the react-spring library, which you can see in action in `/src/app/page.tsx` and `/src/app/components/Resume/FlyOutPanel.tsx`.

## Notes

This portfolio is a living document that I plan on updating with relevant work samples over time. In order to interact with the frontend, visit [https://jc-kirwan.com](https://jc-kirwan.com). If you would like to use this repository locally, you will need to set up a space in Contentful, create a .env file in the root of this project, and add your custom values for the following variables:

```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=YOURSPACEID
NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID=YOURENVIRONMENTID
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=YOURACCESSTOKEN
```

Then, use the [Contentful CLI](https://www.contentful.com/developers/docs/tutorials/cli/) to import the content model into your project. This will look something like this:

```
contentful space import --content-file contentful-content-model.json --space-id YOURSPACEID
```

Finally, use the Contentful CMS to add content to your local project.
