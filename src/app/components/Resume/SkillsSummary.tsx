'use client';
import { useEffect, useContext } from 'react';
import ContentContext from '../../contexts/content/contentContext';
import { useCms } from '../../hooks/useCms';
const SkillsSummary: React.FC = () => {
  const { skills } = useContext(ContentContext || {});
  const { getSkills } = useCms();

  useEffect(() => {
    getSkills();
    //eslint-disable-next-line
  }, []);

  let techSkills = skills?.filter(
    (skill: any) => skill?.skillsType === 'Technology',
  )[0]?.skills;
  let softSkills = skills?.filter(
    (skill: any) => skill?.skillsType === 'Soft Skills',
  )[0]?.skills;

  return (
    <section className="mt-8 print:mt-2">
      <h4 className="text-xl font-black print:text-lg">Skills Summary</h4>
      <ul className="my-4 grid grid-cols-1 md:grid-cols-2 print:my-0">
        <li className="text-lg font-black px-4 pb-4 print:text-base">
          Technology:
          <ul>
            <li className="text-base font-normal print:text-sm">
              {techSkills?.map((skill: string, index: number) => (
                <span className="inline-flex" key={`${index}-${skill}`}>
                  {skill}
                  {techSkills.length - 1 > index && (
                    <span className="inline-flex px-2 text-red-600 after:content-['|'] print:text-black print:px-0 print:pr-1 print:after:content-[',']"></span>
                  )}
                </span>
              ))}
            </li>
          </ul>
        </li>
        <li className="text-lg font-black px-4 pb-4 print:text-base">
          Soft Skills:
          <ul>
            <li className="text-base font-normal print:text-sm">
              {softSkills?.map((skill: string, index: number) => {
                return (
                  <span className="inline-flex" key={index + skill}>
                    {skill}{' '}
                    {softSkills.length - 1 > index ? (
                      <span className="inline-flex px-2 text-red-600 after:content-['|'] print:text-black print:px-0 print:pr-1 print:after:content-[',']"></span>
                    ) : null}
                  </span>
                );
              })}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

SkillsSummary.displayName = 'SkillsSummary';
export default SkillsSummary;
