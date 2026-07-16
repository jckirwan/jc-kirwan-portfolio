'use client';
import React, { useEffect, useContext } from 'react';
import { useCms } from '../../hooks/useCms';
import ContentContext from '../../contexts/content/contentContext';
import SingleCaseStudy from './SingleCaseStudy';
import Spinner from '../Spinner';

const CaseStudies: React.FC = () => {
  const { caseStudies, loading } = useContext(ContentContext);
  const { getCaseStudies } = useCms();

  useEffect(
    () => {
      getCaseStudies();
    },
    //eslint-disable-next-line
    [],
  );

  return (
    <section className="flex flex-col items-start justify-center w-full p-4">
      <div className="flex w-full items-baseline gap-4 pb-6">
        <span className="font-mono text-xs text-accent" aria-hidden="true">
          01
        </span>
        <h3
          id="case-studies"
          className="font-display text-2xl font-black uppercase tracking-wide text-primary"
        >
          Case Studies
        </h3>
        <div className="h-px flex-1 bg-edge" aria-hidden="true" />
      </div>
      {!loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center w-full">
          {caseStudies?.map((caseStudy: any, index: number) => {
            return (
              <SingleCaseStudy
                key={caseStudy?.id}
                id={caseStudy?.id}
                title={caseStudy?.title}
                summary={caseStudy?.summary}
                logo={caseStudy?.logo}
                logoAlt={caseStudy?.logoAlt}
                index={index}
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
