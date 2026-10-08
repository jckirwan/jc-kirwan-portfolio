'use client';
import React, { useEffect, useContext } from 'react';
import { useCms } from '../../hooks/useCms';
import ContentContext from '../../contexts/content/contentContext';
import SingleCaseStudy from './SingleCaseStudy';
import Spinner from '../Spinner';

const SideQuests: React.FC = () => {
  const { sideQuests, loading } = useContext(ContentContext);
  const { getSideQuests } = useCms();

  useEffect(
    () => {
      getSideQuests();
    },
    //eslint-disable-next-line
    [],
  );

  return (
    <section className="flex flex-col items-start justify-center w-full p-4">
      <div className="flex w-full items-baseline gap-4 pb-6">
        <span className="font-mono text-xs text-accent" aria-hidden="true">
          03
        </span>
        <h3
          id="side-quests"
          className="font-display text-2xl font-black uppercase tracking-wide text-primary"
        >
          Side Quests
        </h3>
        <div className="h-px flex-1 bg-edge" aria-hidden="true" />
      </div>
      <p className="-mt-2 pb-6 text-sm leading-relaxed text-muted">
        Personal projects built outside of work, told the same way as the case
        studies: the problem, what I built, and where it landed.
      </p>
      {!loading ? (
        <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-5 justify-center w-full">
          {sideQuests?.map((sideQuest: any, index: number) => {
            return (
              <SingleCaseStudy
                key={sideQuest?.id}
                id={sideQuest?.id}
                title={sideQuest?.title}
                summary={sideQuest?.summary}
                logo={sideQuest?.logo}
                logoAlt={sideQuest?.logoAlt}
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

SideQuests.displayName = 'SideQuests';
export default SideQuests;
