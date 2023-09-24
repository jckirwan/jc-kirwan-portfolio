"use client";
import { Download, X } from "react-feather";
import { animated, useSpring } from "@react-spring/web";
import SkillsSummary from "./SkillsSummary";
import Experience from "./Experience";
import References from "./References";
import Reference from "./Reference";
const FlyOutPanel = ({ isOpen, setIsOpen }) => {
  const springs = useSpring({
    from: { right: -5000 },
    to: { right: 0 },
    reverse: !isOpen,
    
  });

  const close = () => {
    if (!isOpen) return;
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <animated.aside
      className="absolute shadow-xl top-0 bottom-0 bg-gray-200 w-full p-12 overflow-auto rounded-l-xl print:bg-white print:rounded-none print:h-screen print:w-screen print:border-0"
      style={{ ...springs }}
      
    >
      <section className="flex flex-row justify-between items-center w-full">
        <h3 className="flex flex-row items-center text-3xl font-black">
          Resume <Download className="ml-4 text-red-600 hover:text-cyan-400" />
        </h3>
        <button onClick={close} className="print:hidden">
          <X
            className="text-red-600 fixed hover:text-cyan-400"
            style={{ ...springs }}
          />
        </button>
      </section>
      <SkillsSummary />
      <Experience />
      <References>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1">
          <Reference
            name="Sterling Stokes"
            title="Principal Frontend Engineer"
            company="Owl Labs"
            linkedin="https://www.linkedin.com/in/sterlingstokes/"
          />
          <Reference
            name="Anthony DeLorenzo"
            title="Senior Developer"
            company="Frontline PBS"
            linkedin="https://www.linkedin.com/in/anthony-delorenzo"
          />
          <Reference
            name="Brent Osborn"
            title="Principal Consultant and Strategist"
            company="Off Square One"
            linkedin="https://www.linkedin.com/in/brent-osborn-40393977/"
          />
          <Reference
            name="Cameron Van Orman"
            title="Lead Web Developer"
            company="Northeastern University"
            linkedin="https://www.linkedin.com/in/vanormandesign/"
          />
          <Reference
            name="Melissa Gruntkosky"
            title="Director UX/UI, Digital Strategies"
            company="Vanderbilt University"
            linkedin="https://www.linkedin.com/in/mgruntkosky/"
          />
          <Reference
            name="Ray Kingston"
            title="Web Developer"
            company="Northeastern University"
            linkedin="https://www.linkedin.com/in/ray-kingston-363bb511/"
          />
        </div>
      </References>
    </animated.aside>
  ) : null;
};
FlyOutPanel.displayName = "FlyOutPanel";
export default FlyOutPanel;
