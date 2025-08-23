"use client"
import Link from "next/link";
import { FileText, GitHub, Linkedin } from "react-feather";

const BioCard = ({ openPanel }) => {
  return (
    <div className="flex flex-col text-gray-300 items-center justify-start w-full bg-zinc-800">
      <p className="text-lg text-justify py-4">
        I am an experienced senior frontend engineer who is passionate about building
        intuitive, consistent and accessible user experiences.
      </p>
      <div className="flex flex-row flex-wrap w-full justify-around items-center pb-4">
        <Link
          target="_blank"
          rel="noreferrer nofollow"
          href="https://www.linkedin.com/in/jc-kirwan-825a0835/"
        >
          <div className="text-center">
            <Linkedin className="h-8 w-8 text-red-600 mx-2 hover:text-cyan-400" />
            <span>LinkedIn</span>
          </div>
        </Link>
        <Link
          className="border-1 border-red-100"
          target="_blank"
          rel="noreferrer nofollow"
          href="https://github.com/jckirwan"
        >
          <div className="text-center">
            <GitHub className="h-8 w-8 text-red-600 mx-2 hover:text-cyan-400" />
            <span>GitHub</span>
          </div>
        </Link>

        <button className="appearance-none" onClick={() => openPanel()}>
          <div className="text-center">
            <FileText className="h-8 w-8 text-red-600 mx-2 hover:text-cyan-400" />
            <span>Resume</span>
          </div>
        </button>
      </div>
    </div>
  );
};
BioCard.displayName = "BioCard";
export default BioCard;
