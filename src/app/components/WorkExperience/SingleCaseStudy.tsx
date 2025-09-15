'use client';
import { useContext } from 'react';
import Image from 'next/image';
import ContentContext from '../../contexts/content/contentContext';
import { Briefcase } from 'react-feather';

interface SingleWorkSampleProps {
  title: string;
  id: string;
  summary: string;
}

const SingleWorkSample: React.FC<SingleWorkSampleProps> = ({
  title,
  id,
  summary,
}) => {
  const { setShowModal, setModalDataId } = useContext(ContentContext);

  const openModal = () => {
    setShowModal(true);
    setModalDataId(id);
  };

  return (
    <div className="bg-zinc-800 border border-gray-300 shadow-xl p-8 rounded-lg relative w-full group/work-sample-card">
      <div className="absolute right-0 top-0  flex items-start justify-center p-2 rounded-bl-lg rounded-tr-md ">
        <Image
          className="w-24 h-auto shadow-sm "
          src={
            '/CTI_a_parsons_company_logo_2025-copy_CTI_a_parsons_company_color_white-1200x637.webp'
          }
          alt={'Company Logo'}
          width={100}
          height={0}
        />
        {/* <Image
          className="w-24 h-auto shadow-sm "
          src={'https:' + logo}
          alt={logoAlt}
          width={100}
          height={0}
        /> */}
      </div>
      <div className="flex flex-row justify-between text-gray-300 items-center w-full">
        <h4 className="text-base w-full md:text-xl font-black pr-4 mt-4">
          {title}
        </h4>
      </div>
      <div className="text-gray-300 py-8">{summary}</div>
      <button onClick={() => openModal()} className="group/work-sample">
        <div className="bg-red-600 absolute bottom-0 left-0 right-0 rounded-b-lg text-center py-2 group-hover/work-sample:bg-cyan-400 group-hover/work-sample:cursor-pointer">
          <span className="text-white">View details</span>
        </div>
      </button>
    </div>
  );
};
SingleWorkSample.displayName = 'SingleWorkSample';
export default SingleWorkSample;
