"use client";
import React, { useContext } from "react";
import FlyOutPanel from "@/app/components/Resume/FlyOutPanel";
import Header from "@/app/components/Header";
import AboutMe from "@/app/components/AboutMe/AboutMe";
import WorkSamples from "@/app/components/WorkSamples/WorkSamples";
import Modal from "@/app/components/Modal/Modal";
import { useSpring } from "@react-spring/web";
import ContentContext from "@/app/contexts/content/contentContext";
import CaseStudies from "./components/CaseStudies/CaseStudies";

export const Home = () => {
  const { showModal } = useContext(ContentContext);

  const [springs, api] = useSpring(() => ({
    from: { right: -5000 },
  }));

  const openPanel = () => {
    api.start({
      from: { right: -5000 },
      to: { right: 0 },
    });
  };

  return (
    <body className={`bg-zinc-800 overscroll-none ${showModal ? "overflow-hidden" : ""}`}>
      <main className="flex flex-col lg:flex-row min-h-screen h-full items-start justify-between px-4">

        <div className="flex flex-col w-full lg:w-1/4 p-4">
          <div className="print:hidden">
            <Header />
            <AboutMe openPanel={openPanel} springs={springs} api={api} />
            <div className="print:hidden"></div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-3/4 lg:p-4">
          <div className="print:hidden">
            {/* <CaseStudies /> */}
            <WorkSamples />
            
          </div>
        </div>

        <FlyOutPanel openPanel={openPanel} springs={springs} api={api} />
      </main>
      <Modal />
    </body>
  );
};
export default Home;
