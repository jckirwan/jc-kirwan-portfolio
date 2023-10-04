"use client";
import React, { useState, useContext } from "react";
import FlyOutPanel from "@/app/components/FlyOutPanel";
import Header from "@/app/components/Header";
import AboutMe from "@/app/components/AboutMe";
import WorkSamples from "@/app/components/WorkSamples";
import Modal from "@/app/components/Modal/Modal";
import { useSpring } from "@react-spring/web";
import ModalContext from "@/app/components/Modal/context/modalContext";

export const Home = () => {
  const { showModal } = useContext(ModalContext);


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
      <main
        className="flex flex-col min-h-screen h-full items-start justify-start">
        <Header />
        <AboutMe openPanel={openPanel} springs={springs} api={api} />
        <FlyOutPanel openPanel={openPanel} springs={springs} api={api} />
        <WorkSamples />
      </main >
      <Modal />
    </body>
  );
};
export default Home;
