const SkillsSummary = ({}) => {
  return (
    <section className="my-8">
      <h4 className="text-xl font-black">Skills Summary</h4>
      <ul className="ml-4 my-4 grid grid-cols-1 md:grid-cols-2">
        <li className="text-lg font-black px-4 pb-4">
          Technology:
          <ul className="ml-4">
            <li className="list-disc text-base font-normal">
            HTML, CSS, JavaScript, PHP, mySql, Git, React, Gatsby, Storybook, Laravel Blade, TailwindCSS, Alpine.js, Next.js, React Testing Library, NPM, Yarn, Composer, Github Actions, BitBucket Pipelines, Headless CMS, WordPress, Contentful, Drupal, Mixpanel, LaunchDarkly, Agile, Scrum
            </li>
 
          </ul>
        </li>
        <li className="text-lg font-black px-4 pb-4">
          Education:
          <ul className="ml-4">
            <li className="list-disc text-base font-normal">
              MA, Mass Communication, University of Florida, August 2005
            </li>
            <li className="list-disc text-base font-normal">
              BA, English, University of Florida, December 2000
            </li>
          </ul>
        </li>
        <li className="text-lg font-black px-4 pb-4">
          Leadership:
          <ul className="ml-4">
            <li className="list-disc text-base font-normal">Public speaking</li>
            <li className="list-disc text-base font-normal">Staff supervision</li>
            <li className="list-disc text-base font-normal">
              Treasurer for Gainesville High School Softball Boosters
            </li>
            <li className="list-disc text-base font-normal">Head coach for youth softball</li>
          </ul>
        </li>
        <li className="text-lg font-black px-4 pb-4">
          Hobbies:
          <ul className="ml-4">
            <li className="list-disc text-base font-normal">Playing music</li>
            <li className="list-disc text-base font-normal">
              Watching professional and college sports
            </li>
            <li className="list-disc text-base font-normal">Home renovations</li>
            <li className="list-disc text-base font-normal">Coaching softball</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

SkillsSummary.displayName = "SkillsSummary";
export default SkillsSummary;
