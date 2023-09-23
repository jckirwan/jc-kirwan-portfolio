"use client";
import Link from "next/link";
import { Archive, FileText, GitHub, Linkedin } from "react-feather";
const BioCard = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex flex-col text-black items-center justify-start w-4/5 bg-gray-200 rounded-lg shadow-xl h-full mx-8">
      <h3 className="text-3xl font-black py-8">About Me</h3>
      <p className="text-lg mt-8 px-24">
        I am an experienced frontend engineer who is passionate about building
        intuitive, consistent and accessible user experiences.
      </p>
      <div className="flex w-full my-12 flex-row justify-center items-center">
        <Link
          target="_blank"
          rel="noreferrer nofollow"
          href="https://www.linkedin.com/in/jc-kirwan-825a0835/"
        >
          <Linkedin className="h-12 w-12 text-red-600 mx-8 hover:text-cyan-400" />
        </Link>
        <Link
          target="_blank"
          rel="noreferrer nofollow"
          href="https://github.com/jckirwan"
        >
          <GitHub className="h-12 w-12 text-red-600 mx-8 hover:text-cyan-400" />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FileText className="h-12 w-12 text-red-600 mx-8 hover:text-cyan-400" />
        </button>
        <Archive className="h-12 w-12 text-red-600 mx-8 hover:text-cyan-400" />
      </div>
    </div>
  );
};
BioCard.displayName = "BioCard";
export default BioCard;
