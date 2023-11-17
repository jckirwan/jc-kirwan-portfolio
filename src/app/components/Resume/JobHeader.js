const JobHeader = ({ jobTitle, company, dates, skillsUtilized }) => {
  return (
    <li className="text-base md:text-lg font-black">
      <div className="flex flex-row justify-between items-baseline border-b border-red-600 mb-2">
        {jobTitle} - {company}
        <span className="text-sm md:text-base font-normal">{dates}</span>
      </div>


      <div className="flex flex-wrap w-full font-bold items-center text-xs gap-y-1 mb-2">
        <p className="mr-2 self-center">Skills Utilized: </p>
        {skillsUtilized?.map((skill, index) => {
          return (
            <span key={index} className="text-xs font-normal mr-1 bg-cyan-700 text-white py-1 px-1 rounded-md print:border-cyan-700 print:border print:bg-none print:text-black">{skill}</span>
          )
        })}
      </div>

    </li>
  );
};
JobHeader.displayName = "JobHeader";
export default JobHeader;
