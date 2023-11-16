import { useEffect, useContext } from "react";
import ContentContext from "@/app/contexts/content/contentContext";
import { useCms } from "@/app/hooks/useCms";
const SkillsSummary = ({ }) => {
  const { skills } = useContext(ContentContext || {})
  const { getSkills } = useCms();

  useEffect(() => {
    getSkills();
    //eslint-disable-next-line
  }, []);



  let techSkills = skills?.filter(skill => skill?.skillsType === "Technology")[0]?.skills;
  let softSkills = skills?.filter(skill => skill?.skillsType === "Soft Skills")[0]?.skills;





  return (
    <section className="my-8">
      <h4 className="text-xl font-black">Skills Summary</h4>
      <ul className="my-4 grid grid-cols-1 md:grid-cols-2">
        <li className="text-lg font-black px-4 pb-4">
          Technology:
          <ul className="">
            <li className="text-base font-normal">
              {techSkills?.map((skill, index) => {
                return (
                  <span className="inline-flex" key={index + skill}>
                    {skill} {techSkills.length - 1 > index ? <span className="inline-flex px-2 text-red-600">|</span> : null}
                  </span>
                )
              })}
            </li>
          </ul>
        </li>

        <li className="text-lg font-black px-4 pb-4">
          Soft Skills:
          <ul className="">
            <li className="text-base font-normal">
              {softSkills?.map((skill, index) => {
                return (
                  <span className="inline-flex" key={index + skill}>
                    {skill} {softSkills.length - 1 > index ? <span className="inline-flex px-2 text-red-600">|</span> : null}
                  </span>
                )
              })}
            </li>
          </ul>
        </li>
      </ul >
    </section >
  );
};

SkillsSummary.displayName = "SkillsSummary";
export default SkillsSummary;
