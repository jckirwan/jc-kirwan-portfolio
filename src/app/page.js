"use client";
import React, { useState } from "react";
import BioCard from "@/components/BioCard";
import FlyOutPanel from "@/components/FlyOutPanel";
import Header from "@/components/Header";
import ProfileImage from "@/components/ProfileImage";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex flex-col min-h-screen items-start justify-start">
      <Header />
      <section className="w-full flex flex-col lg:flex-row bg-cyan-400 justify-center py-12">
        <div className="flex flex-row w-2/3 ">
          <ProfileImage />
          <BioCard isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </section>
      <FlyOutPanel isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
};
export default Home;
