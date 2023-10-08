import Image from "next/image";

const ProfileImage = () => {
  return (
    <Image
      className="rounded-xl object-cover shadow-xl w-full"
      src="/jc-headshot.jpg"
      alt="jc headshot"
      width={230}
      height={300}
    />
  );
};
ProfileImage.displayName = "ProfileImage";
export default ProfileImage;
