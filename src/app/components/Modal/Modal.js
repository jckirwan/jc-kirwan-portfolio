import React, { useContext } from "react";
import { ArrowRight, X } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import Pill from "./Pill";
import ContentContext from "@/app/contexts/content/contentContext";

const Modal = () => {
  const { showModal, setShowModal, modalDataId, setModalDataId, workSamples } = useContext(ContentContext);

  const item = workSamples?.filter(
    (workSample) => workSample?.id === modalDataId
  )?.[0];

  const closeModal = () => {
    setShowModal(false);
    setModalDataId(null)
  }

  return showModal ? (
    <>
      <div className="flex fixed top-0 bottom-0 right-0 left-0 z-[51] bg-black opacity-80 h-screen w-screen" role="dialog" />
      <div className="flex justify-center self-center bg-white overflow-hidden">
        <div className="fixed top-4 lg:top-8 rounded-md z-[52] overflow-hidden bg-white shadow-md w-full md:max-w-[50%]  p-8">
          <div className="flex flex-row justify-between mb-4">
            <span className="font-black">{item?.title}</span>
            <button onClick={() => closeModal()}>
              <X className="text-red-600 hover:text-cyan-400" />
            </button>
          </div>
          {item?.link ? (
            <div className="w-full flex justify-start mt-2 group/live-link">
              <Link
                className="w-fit flex flex-row items-center justify-between bg-red-600 hover:bg-cyan-400 hover:cursor-pointer text-white text-sm rounded px-4 py-2"
                href={item?.link}
                target="_blank"
                rel="noreferrer nofollow"
              >
                View the live project <ArrowRight className="h-4 w-4 ml-6" />
              </Link>
            </div>
          ) : null}
          <div className="py-8">{item?.description}</div>
          <div className="flex lg:flex-row gap-3 justify-between items-start w-full  mb-8">
            <Link
              className="max-h-[400px] overflow-clip"
              target="_blank"
              rel="noreferrer nofollow"
              href={"https:" + item?.primaryImage}
            >
              <Image
                className="shadow-xl"
                src={"https:" + item?.primaryImage}
                alt={item?.primaryImageAlt}
                width={600}
                height={400}
              />
            </Link>
            <Link
              className="max-h-[400px] overflow-clip"
              target="_blank"
              rel="noreferrer nofollow"
              href={"https:" + item?.secondaryImage}
            >
              <Image
                className="shadow-xl"
                src={"https:" + item?.secondaryImage}
                alt={item?.secondaryImageAlt}
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-start">
            {item?.technologiesUsed?.map((text, index) => {
              return <Pill key={"tech-" + index} text={text} />;
            })}
          </div>
        </div>
      </div>
    </>
  ) : null;
};
Modal.displayName = "Modal";
export default Modal;
