"use client";
import React, { useState, useRef } from "react";
import FlyOutPanel from "@/app/components/FlyOutPanel";
import Header from "@/app/components/Header";
import AboutMe from "@/app/components/AboutMe";
import WorkSamples from "@/app/components/WorkSamples";
import Modal from "@/app/components/Modal";
import { useSpring } from "@react-spring/web";

export const Home = () => {
  const ref = useRef();
  const currentPosition = ref?.current?.scrollY;
  const [openModal, setOpenModal] = useState({ open: false, id: null });
  const [springs, api] = useSpring(() => ({
    from: { right: -5000 },
  }));

  const openPanel = () => {
    api.start({
      from: { right: -5000 },
      to: { right: 0 },
    });
  };
  console.log(ref);
  return (
    <>
      <main
        ref={ref}
        className="flex flex-col min-h-screen h-full items-start justify-start"
      >
        <Header />
        <AboutMe openPanel={openPanel} springs={springs} api={api} />
        <FlyOutPanel openPanel={openPanel} springs={springs} api={api} />
        <WorkSamples openModal={openModal} setOpenModal={setOpenModal} />
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
      </main>
    </>
  );
};
export default Home;
