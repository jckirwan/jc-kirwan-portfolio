"use client";
import Link from "next/link";
import { Archive, FileText, GitHub, Linkedin } from "react-feather";

const BioCard = ({ openPanel }) => {
  return (
    <div className="lg:col-span-2 xl:col-span-3 flex flex-col text-black items-center justify-start w-full bg-gray-200 rounded-lg shadow-xl h-full 2xl:w-3/4 ">
      <h3 className="text-3xl font-black py-8">About Me</h3>
      <p className="text-lg text-justify md:text-left mt-4 lg:mt-8 px-6 lg:px-24">
        I am an experienced frontend engineer who is passionate about building
        intuitive, consistent and accessible user experiences.
      </p>
      <div className="flex flex-row flex-wrap w-full my-12 [&>*]:mb-4 [&>*]:lg:mb-0 justify-center items-center">
        <Link
          target="_blank"
          rel="noreferrer nofollow"
          href="https://www.linkedin.com/in/jc-kirwan-825a0835/"
        >
          <div className="text-center">
            <Linkedin className="h-12 w-12 text-red-600 mx-8 hover:text-cyan-400" />
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
            <GitHub className="h-12 w-12 text-red-600 mx-8 hover:text-cyan-400" />
            <span>GitHub</span>
          </div>
        </Link>

        <button className="appearance-none" onClick={() => openPanel()}>
          <div className="text-center">
            <FileText className="h-12 w-12 text-red-600 mx-8 hover:text-cyan-400" />
            <span>Resume</span>
          </div>
        </button>
      </div>
    </div>
  );
};
BioCard.displayName = "BioCard";
export default BioCard;
