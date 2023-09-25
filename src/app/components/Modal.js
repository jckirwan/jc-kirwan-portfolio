"use client";
import React, { useEffect } from "react";
import { X } from "react-feather";
import { useCms } from "../hooks/useCms";
import Image from "next/image";
import Link from "next/link";
import Pill from "./Pill";

const Modal = ({ openModal, setOpenModal }) => {
  const { getWorkSamples, workSamples } = useCms();
  useEffect(() => {
    getWorkSamples();
    //eslint-disable-next-line
  }, [])
  
  const item = workSamples.filter(
    (workSample) => workSample?.id === openModal?.id
  )?.[0];

  return openModal?.open ? (
    <>
      <div className="flex fixed top-0 bottom-0 right-0 left-0 z-[51] bg-black opacity-80 h-screen w-screen" />
      <div className="flex justify-center self-center bg-white">
        <div className="fixed top-8 rounded-md z-[52] overflow-scroll bg-white shadow-md max-w-[50%] w-full  p-8">
          <div className="flex flex-row justify-between mb-4">
            <span className="font-black">{item?.title}</span>
            <button onClick={() => setOpenModal({ open: false, id: null })}>
              <X className="text-red-600" />
            </button>
          </div>
          <p className="py-8">{item?.description}</p>
          <div className="flex flex-row justify-evenly items-center w-full">
            <Link
              target="_blank"
              rel="noreferrer nofollow"
              href={"https:" + item?.primaryImage}
            >
              <Image
                src={"https:" + item?.primaryImage}
                alt={item?.primaryImageAlt}
                width={200}
                height={200}
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer nofollow"
              href={"https:" + item?.secondaryImage}
            >
              <Image
                src={"https:" + item?.secondaryImage}
                alt={item?.secondaryImageAlt}
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-start">
            {item?.technologiesUsed.map((text, index) => {
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
