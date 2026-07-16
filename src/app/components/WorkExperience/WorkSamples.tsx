'use client';
import React, { useEffect, useContext } from 'react';
import { useCms } from '../../hooks/useCms';
import ContentContext from '../../contexts/content/contentContext';
import SingleWorkSample from './SingleWorkSample';
import Spinner from '../Spinner';

const WorkSamples: React.FC = () => {
  const { workSamples, loading } = useContext(ContentContext);
  const { getWorkSamples } = useCms();

  useEffect(
    () => {
      getWorkSamples();
    },
    //eslint-disable-next-line
    [],
  );

  return (
    <section className="flex flex-col items-start justify-center w-full p-4">
      <div className="flex w-full items-baseline gap-4 pb-6">
        <span className="font-mono text-xs text-accent" aria-hidden="true">
          02
        </span>
        <h3
          id="work-samples"
          className="font-display text-2xl font-black uppercase tracking-wide text-primary"
        >
          Work Samples
        </h3>
        <div className="h-px flex-1 bg-edge" aria-hidden="true" />
      </div>
      {!loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center w-full">
          {workSamples?.map((workSample: any, index: number) => {
            return (
              <SingleWorkSample
                key={workSample?.id}
                id={workSample?.id}
                title={workSample?.title}
                logo={workSample?.logo}
                logoAlt={workSample?.logoAlt}
                summary={workSample?.summary}
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

WorkSamples.displayName = 'WorkSamples';
export default WorkSamples;
