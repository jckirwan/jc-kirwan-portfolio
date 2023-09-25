const JobDescription = ({ items }) => {
  return (
    <ul className="ml-4">
      {items?.map((item, index) => {
        return (
          <li key={"job-item" + index} className="list-disc pr-16 pb-2">
            {item}
          </li>
        );
      })}
    </ul>
  );
};
JobDescription.displayName = "JobDescription";
export default JobDescription;
