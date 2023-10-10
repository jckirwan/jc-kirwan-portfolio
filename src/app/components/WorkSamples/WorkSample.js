import { useContext } from "react";
import Image from "next/image";
import ContentContext from "@/app/contexts/contexts/content/contentContext";

const WorkSample = ({ title, logo, logoAlt, id, summary }) => {
  const { setShowModal, setModalDataId } = useContext(ContentContext);

  const openModal = () => {
    setShowModal(true);
    setModalDataId(id);
  }

  return (
    <div className="bg-gray-200 shadow-xl p-8 rounded-lg relative w-full group/work-sample-card">
      <div className="flex flex-row justify-between items-center">
        <h4 className="text-base md:text-xl font-black pr-4 ">{title}</h4>
        <Image className="w-24 h-auto" src={"https:" + logo} alt={logoAlt} width={100} height={0} />
      </div>
      <div className="py-8">{summary}</div>
      <button
        onClick={() => openModal()}
        className="group/work-sample"
      >
        <div className="bg-red-600 absolute bottom-0 left-0 right-0 rounded-b-lg text-center py-2 group-hover/work-sample:bg-cyan-400 group-hover/work-sample:cursor-pointer">
          <span className="text-white">View details</span>
        </div>
      </button>
    </div>
  );
};
WorkSample.displayName = "WorkSample";
export default WorkSample;
