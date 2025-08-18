import BioCard from "./BioCard";
import ProfileImage from "./ProfileImage";

const AboutMe = ({ openPanel, springs }) => {
  return (
    <section className="w-full flex flex-col lg:flex-row  justify-center py-6 md:py-12">
      <div className="grid gap-y-4 md:gap-x-4 grid-cols-1 w-full items-center justify-center px-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-24 2xl:px-60">

        <BioCard openPanel={openPanel} springs={springs} />
        <ProfileImage />
      </div>
    </section>
  );
};

AboutMe.displayName = "AboutMe";

export default AboutMe;
