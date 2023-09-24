import Image from "next/image";

const ProfileImage = () => {
  return (
    <Image
      className="rounded-xl shadow-xl object-cover w-2/3 mb-8 lg:mb-0 lg:w-1/5"
      src="/jc-headshot.jpg"
      alt="jc headshot"
      width={230}
      height={300}
    />
  );
};
ProfileImage.displayName = "ProfileImage";
export default ProfileImage;
