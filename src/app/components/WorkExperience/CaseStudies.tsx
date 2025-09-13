'use client';
import React, { useEffect, useContext } from 'react';
import { useCms } from '../../hooks/useCms';
import ContentContext from '../../contexts/content/contentContext';
import SingleCaseStudy from './SingleCaseStudy';
import Spinner from '../Spinner';

const CaseStudies: React.FC = () => {
  // const { caseStudies, loading } = useContext(ContentContext);
  // const { getCaseStudies } = useCms();

  // useEffect(
  //   () => {
  //     getCaseStudies();
  //   },
  //   //eslint-disable-next-line
  //   [],
  // );
  const loading = false;
  const caseStudies = [
    {
      id: '1',
      title: 'Extend Design System',
      summary:
        'Extended existing vanilla scss-based design system and component library to support vendors using MaterialUI as well as TailwindCSS.',
    },
    {
      id: '2',
      title: 'Enhance Developer Experience',
      summary:
        'Created software development kit in order to streamline and standardize development process throughout our complex frontend ecosystem.',
    },
  ];
  return (
    <section className="flex flex-col items-start justify-center  w-full p-4">
      <h3
        id="case-studies"
        className="text-2xl uppercase pb-4 text-gray-300 font-black"
      >
        Case Studies
      </h3>
      {!loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center w-full">
          {caseStudies?.map((caseStudy: any) => {
            return (
              <SingleCaseStudy
                key={caseStudy?.id}
                id={caseStudy?.id}
                title={caseStudy?.title}
                summary={caseStudy?.summary}
              />
            );
          })}
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
};

CaseStudies.displayName = 'CaseStudies';
export default CaseStudies;
