import Image from "next/image";
import img from "../../assets/gmic/smiley-couple.svg";
import { FaCheckCircle } from "react-icons/fa";

const Focus = () => {
  return (
    <div className="flex items-center justify-center p-4 md:py-16 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center max-w-6xl gap-12">
        <div className="space-y-2 md:space-y-4">
            <h2 className="inter font-medium text-3xl md:text-4xl tracking-tight text-[#021C3A]">
              Competition Focus
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              GMIC is focused on review articles that explore and evaluate
              bioinformatics methods used in malaria research. Participants are
              expected to synthesize published literature and highlight:
            </p>

          <div className="space-y-4 mt-6 text-gray-700 text-sm md:text-base">
            <div className="flex items-start md:items-center">
              <span><FaCheckCircle className="text-[#200822] mt-1" /></span>
              <span className="ml-2">
                Bioinformatics tools and pipelines used in malaria studies
              </span>
            </div>
            <div className="flex items-start md:items-center">
              <span><FaCheckCircle className="text-[#200822] mt-1" /></span>
              <span className="ml-2">
                Genomics datasets applied in malaria research and surveillance
              </span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-[#200822]" />
              <span className="ml-2">
                Computational approaches for drug resistance analysis
              </span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-[#200822]" />
              <span className="ml-2">
                Challenges and gaps in malaria bioinformatics capacity
              </span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-[#200822]" />
              <span className="ml-2">
                Future directions for improving research and control strategies
              </span>
            </div>
          </div>

          <div className="bg-[#FDF6FD] border-l-4 font-medium border-[#1E1E1E] mt-6 px-6 py-4">
            This competition is strictly based on{" "}
            <span className="text-purple-600">review writing</span>, not
            original experimental research.
          </div>
        </div>

        <div className="">
          <Image src={img} alt="" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Focus;