import React from 'react';
import WorkSamples from './WorkSamples';
import CaseStudies from './CaseStudies';
import SideQuests from './SideQuests';

const WorkExperience = () => {
  return (
    <div>
      <CaseStudies />
      <WorkSamples />
      <SideQuests />
    </div>
  );
};

export default WorkExperience;
WorkExperience.displayName = 'WorkExperience';
