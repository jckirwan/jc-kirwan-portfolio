
"use client"
import Link from "next/link";
const Reference = ({ name, title, organization, linkedin }) => {
  return (
    <Link
      target="_blank"
      rel="noreferrer nofollow"
      href={linkedin}
      className="hover:cursor-default h-fit m-2"
    >
      <div className="text-base border border-gray-400 shadow-lg rounded-lg p-4 hover:cursor-pointer hover:border-gray-800">
        <h5 className="flex flex-row items-center justify-between">
          <span className="font-black">{name}</span>
        </h5>
        <h6 className="text-cyan-800">{title}</h6>
        <span className="uppercase font-bold text-sm">{organization}</span>
      </div>
    </Link>
  );
};
Reference.displayName = "Reference";
export default Reference;
