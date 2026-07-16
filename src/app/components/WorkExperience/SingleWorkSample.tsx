'use client';
import { useContext } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'react-feather';
import ContentContext from '../../contexts/content/contentContext';

interface SingleWorkSampleProps {
  title: string;
  logo: string;
  logoAlt: string;
  id: string;
  summary: string;
  index?: number;
}

const SingleWorkSample: React.FC<SingleWorkSampleProps> = ({
  title,
  logo,
  logoAlt,
  id,
  summary,
  index = 0,
}) => {
  const { setShowModal, setModalDataId } = useContext(ContentContext);

  const openModal = () => {
    setShowModal(true);
    setModalDataId(id);
  };

  return (
    <div
      className="group relative flex w-full flex-col rounded-xl border border-edge bg-raised p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-edge-strong hover:shadow-xl hover:shadow-accent/10 rise-in"
      style={{ '--stagger': index } as React.CSSProperties}
    >
      <div className="absolute right-4 top-4 flex items-start justify-center rounded-md bg-primary/90 p-2">
        <Image
          className="h-auto w-20"
          src={'https:' + logo}
          alt={logoAlt}
          width={100}
          height={0}
        />
      </div>
      <h4 className="mt-14 pr-4 font-display text-lg font-black text-primary md:text-xl">
        {title}
      </h4>
      <div className="flex-1 py-5 text-sm leading-relaxed text-secondary">
        {summary}
      </div>
      <button
        onClick={() => openModal()}
        className="flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:text-accent-hover"
      >
        View details
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};
SingleWorkSample.displayName = 'SingleWorkSample';
export default SingleWorkSample;
