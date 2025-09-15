'use client';
import React, { useContext } from 'react';
import { ArrowLeft, ArrowRight, HelpCircle, Key, X, Zap } from 'react-feather';
import Image from 'next/image';
import Link from 'next/link';
import Pill from './Pill';
import ContentContext from '../../contexts/content/contentContext';

const Modal: React.FC = () => {
  const {
    showModal,
    setShowModal,
    modalDataId,
    setModalDataId,
    workSamples,
    caseStudies,
  } = useContext(ContentContext);

  const [caseStudyStep, setCaseStudyStep] = React.useState(0);

  const item =
    workSamples?.filter(
      (workSample: any) => workSample?.id === modalDataId,
    )?.[0] ||
    caseStudies?.filter((caseStudy: any) => caseStudy?.id === modalDataId)?.[0];

  const closeModal = () => {
    setShowModal(false);
    setModalDataId(null);
    setCaseStudyStep(0);
  };

  const isCaseStudy = item?.isCaseStudy;

  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  return showModal ? (
    <>
      <div
        className="flex fixed top-0 bottom-0 right-0 left-0 z-[51] bg-black opacity-80 h-screen w-screen"
        role="dialog"
      />
      <div className="flex justify-center items-center fixed inset-0 z-[52] overflow-y-auto">
        <div className="relative w-full max-w-lg md:max-w-[50%] mx-4 my-8 bg-zinc-900 border border-gray-300 text-white shadow-md rounded-md p-0 max-h-[90vh] flex flex-col">
          <div className="flex flex-row justify-between mb-4 px-8 pt-8">
            <span className="font-black">{item?.title}</span>
            <button onClick={() => closeModal()}>
              <X className="text-red-600 hover:text-cyan-400" />
            </button>
          </div>
          <div
            className="overflow-y-auto px-8 pb-8"
            style={{ maxHeight: 'calc(90vh - 56px)' }}
          >
            {!isCaseStudy ? (
              <>
                {console.log('is a caseStudy? ', isCaseStudy)}
                {item?.link ? (
                  <div className="w-full flex justify-start mt-2 group/live-link">
                    <Link
                      className="w-fit flex flex-row items-center justify-between bg-red-600 hover:bg-cyan-400 hover:cursor-pointer text-white text-sm rounded px-4 py-2"
                      href={item?.link}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      View the live project{' '}
                      <ArrowRight className="h-4 w-4 ml-6" />
                    </Link>
                  </div>
                ) : null}
                <div className="py-8">{item?.description}</div>
                <div className="flex lg:flex-row gap-3 justify-between items-start w-full  mb-8">
                  <Link
                    className="max-h-[400px] overflow-clip"
                    target="_blank"
                    rel="noreferrer nofollow"
                    href={'https:' + item?.primaryImage}
                  >
                    <Image
                      className="shadow-xl"
                      src={'https:' + item?.primaryImage}
                      alt={item?.primaryImageAlt}
                      width={600}
                      height={400}
                    />
                  </Link>
                  <Link
                    className="max-h-[400px] overflow-clip"
                    target="_blank"
                    rel="noreferrer nofollow"
                    href={'https:' + item?.secondaryImage}
                  >
                    <Image
                      className="shadow-xl"
                      src={'https:' + item?.secondaryImage}
                      alt={item?.secondaryImageAlt}
                      width={200}
                      height={200}
                    />
                  </Link>
                </div>
              </>
            ) : null}
            {isCaseStudy ? (
              <>
                {caseStudyStep === 0 && (
                  <div className="py-8">
                    <div className="flex w-full flex-col md:flex-row items-center md:items-start justify-between gap-8">
                      <div className="flex h-full flex-col justifiy-between gap-4">
                        <h3 className="uppercase font-black">Challenge</h3>
                        <HelpCircle className="w-full h-full text-cyan-500" />
                      </div>
                      <div className="flex flex-col gap-4 w-full">
                        <div className="[&>p]:mb-2 [&>ol]:mb-2 [&>ol>li]:ml-4 [&>ol>li]:list-decimal [&>ul]:mb-2 [&>ul>li]:ml-4 [&>ul>li]:list-disc">
                          {item?.challenge}
                        </div>
                        <div className="w-full flex items-between justify-end">
                          <button
                            className="self-end w-fit flex flex-row items-center justify-between bg-red-600 hover:bg-cyan-400 hover:cursor-pointer text-white text-sm rounded px-4 py-2"
                            onClick={() => setCaseStudyStep(1)}
                          >
                            View solution{' '}
                            <ArrowRight className="h-4 w-4 ml-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {caseStudyStep === 1 && (
                  <div className="py-8">
                    <div className="flex w-full flex-row items-start justify-between gap-8">
                      <div className="flex h-full flex-col justifiy-between gap-4">
                        <h3 className="uppercase font-black">Solution</h3>
                        <Key className="w-full h-full text-cyan-500" />
                      </div>
                      <div className="flex flex-col gap-4 w-full">
                        <div className="[&>p]:mb-2 [&>ol]:mb-2 [&>ol>li]:ml-4 [&>ol>li]:list-decimal [&>ul]:mb-2 [&>ul>li]:ml-4 [&>ul>li]:list-disc">
                          {item?.solution}
                        </div>
                        <div className="w-full flex items-between justify-between">
                          <button
                            className="w-fit flex flex-row items-center justify-between bg-red-600 hover:bg-cyan-400 hover:cursor-pointer text-white text-sm rounded px-4 py-2"
                            onClick={() => setCaseStudyStep(0)}
                          >
                            <ArrowLeft className="h-4 w-4 mr-6" />
                            View challenge
                          </button>
                          <button
                            className="w-fit flex flex-row items-center justify-between bg-red-600 hover:bg-cyan-400 hover:cursor-pointer text-white text-sm rounded px-4 py-2"
                            onClick={() => setCaseStudyStep(2)}
                          >
                            View results <ArrowRight className="h-4 w-4 ml-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {caseStudyStep === 2 && (
                  <div className="py-8">
                    <div className="flex w-full flex-row items-start justify-between gap-8">
                      <div className="flex h-full flex-col justifiy-between gap-4">
                        <h3 className="uppercase font-black">Result</h3>
                        <Zap className="w-full h-full text-cyan-500" />
                      </div>
                      <div className="flex flex-col gap-4 w-full">
                        <div className="[&>p]:mb-2 [&>ol]:mb-2 [&>ol>li]:ml-4 [&>ol>li]:list-decimal [&>ul]:mb-2 [&>ul>li]:ml-4 [&>ul>li]:list-disc">
                          {item?.results}
                        </div>
                        <div className="w-full flex items-between justify-between">
                          <button
                            className="self-start w-fit flex flex-row items-center justify-between bg-red-600 hover:bg-cyan-400 hover:cursor-pointer text-white text-sm rounded px-4 py-2"
                            onClick={() => setCaseStudyStep(1)}
                          >
                            <ArrowLeft className="h-4 w-4 mr-6" /> View solution
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : null}
            <div className="flex flex-wrap items-center justify-start">
              {item?.technologiesUsed?.map((text: string, index: number) => {
                return <Pill key={'tech-' + index} text={text} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};
Modal.displayName = 'Modal';
export default Modal;
