
const JobDescription = ({ jobDuties }) => {
  return (
    <div className="[&>ul]:ml-4 [&>ul>li]:pr-16 [&>ul>li]:pb-2 [&>ul>li]:list-disc">
      {jobDuties}
    </div>
  );
};
JobDescription.displayName = "JobDescription";
export default JobDescription;
