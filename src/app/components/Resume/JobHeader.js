const JobHeader = ({ jobTitle, company, dates }) => {
  return (
    <li className="text-base md:text-lg font-black">
      <div className="flex flex-row justify-between items-baseline border-b border-red-600 mb-2">
        {jobTitle} - {company}
        <span className="text-sm md:text-base font-normal">{dates}</span>
      </div>
    </li>
  );
};
JobHeader.displayName = "JobHeader";
export default JobHeader;