import { useEffect, useContext } from "react";
import JobDescription from "./JobDescription";
import JobHeader from "./JobHeader";
import { useCms } from "../../hooks/useCms";
import contentContext from "@/app/contexts/content/contentContext";

const Experience = ({ }) => {
  const { getWorkExperience } = useCms();
  const { workExperience } = useContext(contentContext);

  useEffect(() => {
    getWorkExperience();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="my-4 print:mb-2 print:mt-0">
      <h4 className="text-xl font-black print:text-lg">Relevant Work Experience</h4>
      <ul className="ml-4 my-4 print:my-2">
        {workExperience.map((job) => {
          const { id, endDate, jobDuties, jobTitle, organization, skillsUtilized, startDate } = job;
          return (
            <div key={id}>
              <JobHeader
                jobTitle={jobTitle}
                company={organization}
                dates={`${startDate.getMonth() + 1}/${startDate.getFullYear()} - ${endDate.getMonth() + 1}/${endDate.getFullYear()}`}
                skillsUtilized={skillsUtilized}
              />
              <JobDescription
                jobDuties={jobDuties}
              />
            </div>
          );
        })}
      </ul>
    </section>
  );
};
Experience.displayName = "Experience";
export default Experience;
