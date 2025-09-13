'use client';
import React, { useContext } from 'react';
import FlyOutPanel from './components/Resume/FlyOutPanel';
import Profile from './components/Profile/Profile';
import WorkSamples from './components/WorkExperience/WorkSamples';
import Modal from './components/Modal/Modal';
import { useSpring } from '@react-spring/web';
import ContentContext from './contexts/content/contentContext';

const Home: React.FC = () => {
  const { showModal } = useContext(ContentContext);

  const [springs, api] = useSpring(() => ({
    from: { right: -5000 },
  }));

  const openPanel = () => {
    api.start({
      from: { right: -5000 },
      to: { right: 0 },
    });
  };

  return (
    <div
      className={`bg-zinc-800 overscroll-none ${showModal ? 'overflow-hidden' : ''}`}
    >
      <main className="flex flex-col lg:flex-row min-h-screen h-full items-start justify-between px-4">
        <div className="flex flex-col w-full lg:w-1/4 p-4">
          <div className="print:hidden">
            <Profile openPanel={openPanel} springs={springs} />
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-3/4 lg:p-4">
          <div className="print:hidden">
            {/* <CaseStudies /> */}
            <WorkSamples />
          </div>
        </div>

        <FlyOutPanel springs={springs} api={api} />
      </main>
      <Modal />
    </div>
  );
};
export default Home;
