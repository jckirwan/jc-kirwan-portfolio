"use client";
import React, { useContext } from "react";
import FlyOutPanel from "@/app/components/Resume/FlyOutPanel";
import Header from "@/app/components/Header";
import AboutMe from "@/app/components/AboutMe/AboutMe";
import WorkSamples from "@/app/components/WorkSamples/WorkSamples";
import Modal from "@/app/components/Modal/Modal";
import { useSpring } from "@react-spring/web";
import ContentContext from "@/app/contexts/content/contentContext";

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
    <body className={`${showModal ? "overflow-hidden" : ""}`}>
      <main className="flex flex-col min-h-screen h-full items-start justify-start">
        <div className="print:hidden">
          <Header />
          <AboutMe openPanel={openPanel} springs={springs} api={api} />
          <WorkSamples />
        </div>
        <FlyOutPanel openPanel={openPanel} springs={springs} api={api} />
      </main>
      <Modal />
    </body>
  );
};
export default Home;
