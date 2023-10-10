import Image from "next/image";

const ProfileImage = () => {
  return (
    <Image
      className="rounded-xl object-cover shadow-xl w-full h-auto"
      src="/jc-headshot.jpg"
      alt="jc headshot"
      width={230}
      height={300}
      priority={true}
    />
  );
};
ProfileImage.displayName = "ProfileImage";
export default ProfileImage;
