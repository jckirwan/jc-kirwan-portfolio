import JobDescription from "./JobDescription";
import JobHeader from "./JobHeader";

const Experience = ({}) => {
  return (
    <section className="my-8">
      <h4 className="text-xl font-black">Relevant Work Experience</h4>
      <ul className="ml-4 my-4">
        <JobHeader
          jobTitle="Senior Frontend Engineer"
          company="Owl Labs"
          dates="3/22 - 9/23"
        />
        <JobDescription
          items={[
            "Built, implemented and maintained Owl-UI design system. This system significantly increased prototyping speed for all developers on the team, and guaranteed brand consistency.",
            "Refactored Owl-UI component library to leverage Owl-UI design system.",
            "Implemented Owl-UI design system and component library into the Nest: an Owl Labs SaaS product.",
            "Contributed to the Owl Labs 2023 Hack-a-thon winning Room-Designer application.",
            "Wrote self-documenting code and unit tests for the Nest.",
            "Built the redesigned primary navigation in the Nest. This was done behind a Launch Darkly feature flag to allow for QA testing in production.",
            "Built the redesigned login experience for the Nest, leveraging AWS Cognito. This involved building login, forgot password, and sign up workflows.",
            "Built the redesigned Dashboard for the Nest. This was done behind a Launch Darkly feature flag to allow for QA testing in production.",
            "Advocated for and implemented integration of the Contentful CMS into the Nest. This included building components for announcments, banners, and maintenance mode. This work allowed non-technical product managers to make critical, timely updates to content in the Nest without engineering oversight, code changes, or deployments.",
            "Participated in code reviews and design reviews.",
            "Wrote design documents for complex features to outline and get team buy-in and feedback before code was written.",
          ]}
        />
        <JobHeader
          jobTitle="Frontend Developer"
          company="Northeastern University"
          dates="10/18 - 3/22"
        />
        <JobDescription
          items={[
            "Developed and maintained websites in a variety of technologies.",
            "Participated in code review process to ensure code met team standards.",
            "Contributed to Kernl-UI design system.",
            "Contributed to Kernl-UI-Blade component library.",
            "Built Kernl-theme WordPress theme, leveraging Kernl-UI, Kernl-UI-Blade and Sage.",
            "Worked with the development team on the iterative improvement of the users’ experience with our sites.",
            "Maintained development and staging servers.",
            "Helped guide development practices of web applications and web infrastructure.",
            "Planned work in response to planned changes in infrastructure and vendor application support.",
            "Built CI/CD deployments in Github Actions.",
          ]}
        />
        <JobHeader
          jobTitle="Web Developer - Contract"
          company="PBS Frontline / WGBH"
          dates="3/20 - 3/22"
        />
        <JobDescription
          items={[
            "Developed features and enhancements for Frontline’s award-winning website.",
            "Built project-specific standalone websites as needed.",
            "Built interactive website for Unresolved, an Emmy Award-winning multi-media project.",
          ]}
        />
        <JobHeader
          jobTitle="Web Developer II"
          company="University of Florida Human Resources"
          dates="12/17 - 10/18"
        />
        <JobDescription
          items={[
            "Developed and maintained sites on behalf of UF Human Resources and the office of the CFO.",
            "Developed and deployed custom UF-News WordPress theme.",
            "Created a public-facing “job board” to collect and display data from Interfolio, a faculty-recruitment tool.",
          ]}
        />
        <JobHeader
          jobTitle="Director of Web Services"
          company="University of Florida College of Law"
          dates="11/14 - 12/17"
        />
        <JobDescription
          items={[
            "Developed and maintained various WordPress websites.",
            "Oversaw and executed digital development projects, including interactive digital signage initiative.",
            "Analyzed user needs to determine requirements of digital marketing projects.",
          ]}
        />
      </ul>
    </section>
  );
};
Experience.displayName = "Experience";
export default Experience;
