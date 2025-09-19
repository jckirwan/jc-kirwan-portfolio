'use client';
import Link from 'next/link';
import { FileText, GitHub, Linkedin } from 'react-feather';

interface BioCardProps {
  openPanel: () => void;
}

const BioCard: React.FC<BioCardProps> = ({ openPanel }) => {
  return (
    <div className="flex flex-col text-gray-300 items-center justify-start w-full bg-zinc-800">
      <p className="text-lg text-justify py-4">
        I’m a senior software engineer with expertise in React, TypeScript, and
        modern design-system architecture. At CTI, I’ve led engineers, set UI
        architecture direction, and championed coding standards. My work
        includes modernizing GIS tools, building micro-frontend and plugin
        architectures, and mentoring teammates. I bring technical depth,
        architectural vision, and proven leadership, with a strong record of
        delivering scalable, intuitive front-end solutions. I’m eager to take on
        opportunities where I can drive engineering excellence and support team
        growth.
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
BioCard.displayName = 'BioCard';
export default BioCard;
