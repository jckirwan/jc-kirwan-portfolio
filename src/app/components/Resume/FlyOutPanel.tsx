'use client';
import { Download, X } from 'react-feather';
import { animated, useSpring } from '@react-spring/web';
import SkillsSummary from './SkillsSummary';
import Experience from './Experience';
import Education from './Education';
import References from './References';
import Link from 'next/link';
interface FlyOutPanelProps {
  springs: any;
  api: any;
}

const FlyOutPanel: React.FC<FlyOutPanelProps> = ({ springs, api }) => {
  const closePanel = () => {
    api.start({
      from: { right: 0 },
      to: { right: -5000 },
    });
  };
  return (
    <animated.aside
      className="fixed z-50 shadow-xl top-0 bottom-0 bg-gray-200 w-screen h-screen p-4 md:p-12 overflow-auto rounded-l-xl print:bg-white print:rounded-none print:!relative print:!w-auto print:!h-auto print:!block print:!overflow-visible print:border-0 print:shadow-none"
      style={{ ...springs }}
    >
      <section className="flex flex-row justify-between items-center w-full ">
        <h3 className="flex flex-row items-baseline text-3xl md:text-7xl text-cyan-700 font-black">
          JC Kirwan
          <br />
          <Link
            className="print:hidden"
            target="_blank"
            rel="noreferrer nofollow"
            href="/jc-kirwan-resume-current.pdf"
          >
            <Download className="ml-4 text-red-600 hover:text-cyan-400" />
          </Link>
        </h3>
        <button
          onClick={() => closePanel()}
          className="print:hidden mr-12 mb-6"
        >
          <X
            className="text-red-600 fixed hover:text-cyan-400"
            style={{ ...springs }}
          />
        </button>
      </section>
      <div className="block">
        jckirwan@gmail.com
        <span className="hidden print:inline"> | 352.256.4157</span>
      </div>
      <SkillsSummary />
      <Experience />
      <Education />
      <div className="print:hidden">
        <References />
      </div>
    </animated.aside>
  );
};
FlyOutPanel.displayName = 'FlyOutPanel';
export default FlyOutPanel;
