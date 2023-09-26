import BioCard from "./BioCard";
import ProfileImage from "./ProfileImage";

const AboutMe = ({ openPanel, springs }) => {
  return (
    <section className="w-full flex flex-col lg:flex-row bg-cyan-400 justify-center py-6 md:py-12">
      <div className="flex flex-col w-full items-center lg:items-stretch lg:flex-row lg:w-2/3 justify-center">
        <ProfileImage />
        <BioCard openPanel={openPanel} springs={springs} />
      </div>
    </section>
  );
};

AboutMe.displayName = "AboutMe";

export default AboutMe;
