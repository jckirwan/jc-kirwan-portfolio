'use client';
import React, { useContext, useEffect, useRef } from 'react';
import { ArrowRight, X } from 'react-feather';
import Image from 'next/image';
import Link from 'next/link';
import Pill from './Pill';
import ContentContext from '../../contexts/content/contentContext';

const RICH_TEXT_CLASSES =
  '[&>p]:mb-2 [&>ol]:mb-2 [&>ol>li]:ml-4 [&>ol>li]:list-decimal [&>ul]:mb-2 [&>ul>li]:ml-4 [&>ul>li]:list-disc';

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
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const steps = [
    { label: 'Challenge', content: item?.challenge },
    { label: 'Solution', content: item?.solution },
    { label: 'Results', content: item?.results },
  ];

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [caseStudyStep]);

  return showModal ? (
    <>
      <div
        className="modal-backdrop flex fixed top-0 bottom-0 right-0 left-0 z-[51] bg-black/70 backdrop-blur-sm h-screen w-screen"
        role="dialog"
      />
      <div className="flex justify-center items-center fixed inset-0 z-[52] overflow-y-auto">
        <div
          className={`modal-surface relative w-full max-w-lg md:max-w-[50%] mx-4 my-8 bg-raised border border-edge-strong text-primary shadow-2xl shadow-black/60 rounded-2xl p-0 flex flex-col ${
            isCaseStudy ? 'h-[85vh]' : 'max-h-[85vh]'
          }`}
        >
          <div className="flex flex-row justify-between items-start gap-4 px-8 pt-8">
            <h2 className="font-display font-black uppercase text-2xl md:text-3xl text-primary">
              {item?.title}
            </h2>
            <button onClick={() => closeModal()} aria-label="Close">
              <X className="text-accent hover:text-accent-hover" />
            </button>
          </div>

          {isCaseStudy ? (
            <div
              className="flex flex-row gap-6 px-8 pt-6 border-b border-edge"
              role="tablist"
              aria-label="Case study sections"
            >
              {steps.map((step, index) => {
                const active = caseStudyStep === index;
                return (
                  <button
                    key={step.label}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setCaseStudyStep(index)}
                    className={`flex items-baseline gap-2 pb-3 -mb-px border-b-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                      active
                        ? 'border-accent text-primary'
                        : 'border-transparent text-muted hover:text-secondary'
                    }`}
                  >
                    <span className={active ? 'text-accent' : ''}>
                      0{index + 1}
                    </span>
                    {step.label}
                  </button>
                );
              })}
            </div>
          ) : null}

          <div
            ref={scrollRef}
            className="modal-scroll flex-1 overflow-y-auto px-8"
          >
            {!isCaseStudy ? (
              <>
                {item?.link ? (
                  <div className="w-full flex justify-start mt-6 group/live-link">
                    <Link
                      className="w-fit flex flex-row items-center justify-between bg-accent hover:bg-accent-hover hover:cursor-pointer text-white text-sm rounded-full px-5 py-2 transition-colors"
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
                <div className="flex lg:flex-row gap-3 justify-between items-start w-full mb-8">
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
            ) : (
              <div
                key={caseStudyStep}
                className={`modal-step py-6 ${RICH_TEXT_CLASSES}`}
              >
                {steps[caseStudyStep]?.content}
              </div>
            )}
            <div className="flex flex-wrap items-center justify-start pb-6">
              {item?.technologiesUsed?.map((text: string, index: number) => {
                return <Pill key={'tech-' + index} text={text} />;
              })}
            </div>
            <div
              className="sticky bottom-0 -mt-8 h-8 w-full bg-gradient-to-t from-raised to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </>
  ) : null;
};
Modal.displayName = 'Modal';
export default Modal;
