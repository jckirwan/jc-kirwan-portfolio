import React, { useEffect } from "react";
import { useCms } from "../hooks/useCms";
import WorkSample from "./WorkSample";

const WorkSamples = ({ openModal, setOpenModal }) => {
  const { getWorkSamples, workSamples } = useCms();
  useEffect(() => {
    getWorkSamples();
    //eslint-disable-next-line
  }, []);

  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-t from-cyan-900 to-cyan-400 w-full p-4 md:p-12 ">
      <h3 id="work-samples" className="text-5xl text-white font-black py-8">
        Work Samples
      </h3>
      <div className="flex flex-wrap justify-center w-full">
        {workSamples.map((workSample) => {
          return (
            <>
              <WorkSample
                key={workSample?.id}
                id={workSample?.id}
                title={workSample?.title}
                logo={workSample?.logo}
                logoAlt={workSample?.logoAlt}
                summary={workSample?.summary}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};
WorkSamples.displayName = "WorkSamples";
export default WorkSamples;
