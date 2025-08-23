"use client"
import BioCard from "./BioCard";
import ProfileImage from "./ProfileImage";

const AboutMe = ({ openPanel, springs }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full items-center justify-center">
        <ProfileImage />
        <BioCard openPanel={openPanel} springs={springs} />
        
      </div>
    </section>
  );
};

AboutMe.displayName = "AboutMe";

export default AboutMe;
