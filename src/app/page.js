"use client";
import React, { useState } from "react";
import BioCard from "@/components/BioCard";
import FlyOutPanel from "@/components/FlyOutPanel";
import Header from "@/components/Header";
import ProfileImage from "@/components/ProfileImage";
import AboutMe from "@/components/AboutMe";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex flex-col min-h-screen items-start justify-start">
      <Header />
      <AboutMe isOpen={isOpen} setIsOpen={setIsOpen} />
      <FlyOutPanel isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className="flex flex-row items-center justify-center bg-gradient-to-t from-cyan-900 to-cyan-400 w-full">
        <h3 className="text-3xl text-white font-black py-8">Work Samples</h3>
      </section>
    </main>
  );
};
export default Home;
