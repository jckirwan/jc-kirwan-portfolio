'use client';
import BioCard from './BioCard';
import Header from './Header';
import ProfileImage from './ProfileImage';

interface ProfileProps {
  openPanel: () => void;
  springs?: any;
}

const Profile: React.FC<ProfileProps> = ({ openPanel, springs }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Header />
      <div className="w-full items-center justify-center">
        <ProfileImage />
        <BioCard openPanel={openPanel} />
      </div>
    </section>
  );
};

Profile.displayName = 'Profile';

export default Profile;
