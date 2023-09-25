"use client";
import React, { useState } from "react";
import FlyOutPanel from "@/app/components/FlyOutPanel";
import Header from "@/app/components/Header";
import AboutMe from "@/app/components/AboutMe";
import WorkSamples from "@/app/components/WorkSamples";
import Modal from "@/app/components/Modal";

export const Home = () => {
  const [isOpen, setIsOpen] = useState({
    open: false,
    id: null,
  });
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="flex flex-col min-h-screen h-full items-start justify-start">
      <Header />
      <AboutMe isOpen={isOpen} setIsOpen={setIsOpen} />
      <FlyOutPanel isOpen={isOpen} setIsOpen={setIsOpen} />
      <WorkSamples openModal={openModal} setOpenModal={setOpenModal} />
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </main>
  );
};
export default Home;
