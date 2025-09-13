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
    <section className="flex flex-col items-start justify-center  w-full p-4">
      <h3
        id="work-samples"
        className="text-2xl uppercase pb-4 text-gray-300 font-black"
      >
        Work Samples
      </h3>
      {!loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full">
          {workSamples?.map((workSample: any) => {
            return (
              <SingleWorkSample
                key={workSample?.id}
                id={workSample?.id}
                title={workSample?.title}
                logo={workSample?.logo}
                logoAlt={workSample?.logoAlt}
                summary={workSample?.summary}
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
