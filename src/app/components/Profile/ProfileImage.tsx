'use client';
import Image from 'next/image';

const ProfileImage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center rise-in [--stagger:1]">
      <div className="relative">
        <div
          className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/60 via-transparent to-accent-alt/40 blur-sm"
          aria-hidden="true"
        />
        <Image
          className="relative rounded-full object-cover ring-1 ring-edge-strong"
          src="/jc-square.jpg"
          alt="jc headshot"
          width={230}
          height={300}
          priority={true}
        />
      </div>
    </div>
  );
};
ProfileImage.displayName = 'ProfileImage';
export default ProfileImage;
