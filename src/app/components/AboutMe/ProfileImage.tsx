'use client';
import Image from 'next/image';

const ProfileImage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="rounded-full object-cover shadow-sm"
        src="/jc-square.jpg"
        alt="jc headshot"
        width={230}
        height={300}
        priority={true}
      />
    </div>
  );
};
ProfileImage.displayName = 'ProfileImage';
export default ProfileImage;
