import Image from "next/image";
import img from "../../assets/gmic/building.svg";

const Works = () => {
  return (
    <div className="flex items-center justify-center p-4 md:py-16 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start max-w-6xl gap-4 md:gap-60">
        <div className="text-center">
          <div>
            <h2 className="inter font-medium text-2xl md:text-3xl tracking-tight text-[#021C3A]">
              Who can Apply? 
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">GMIC is open to passionate individuals across the life sciences and public health space, including:</p>
          </div>
          <Image src={img} alt="" className="rounded-lg mt-5 md:mt-10 flex self-center" />
        </div>

        <div className="mt-4 md:mt-0 text-sm md:text-base">
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <span className="bg-gray-200 py-1 px-3 rounded-md">1</span>
              <span className="ml-5">
                Graduate and Undergraduate students
              </span>
            </div>
            <div className="flex items-start">
              <span className="bg-gray-200 py-1 px-3 rounded-md">2</span>
              <span className="ml-5">
                Early-career researchers
              </span>
            </div>
            <div className="flex items-start">
              <span className="bg-gray-200 py-1 px-3 rounded-md">3</span>
              <span className="ml-5">
                Clinicians
              </span>
            </div>
            <div className="flex items-start">
              <span className="bg-gray-200 py-1 px-3 rounded-md">4</span>
              <span className="ml-5">
                Laboratory scientists
              </span>
            </div>
            <div className="flex items-start">
              <span className="bg-gray-200 py-1 px-3 rounded-md">5</span>
              <span className="ml-5">
                Public health professionals
              </span>
            </div>
            <div className="flex items-start">
              <span className="bg-gray-200 py-1 px-3 rounded-md">6</span>
              <span className="ml-5">
                Data-curious life scientists interested in bioinformatics
              </span>
            </div>
          </div>

          <div className="bg-[#FDF6FD] border-l-4 border-purple-600 mt-4 md:mt-6 px-6 py-4">
            Whether you are already in bioinformatics or just building expertise, this competition is designed to help you
            <span className="text-purple-600 font-bold"> learn, contribute, and stand out.</span>
          </div>

          <a href="#contact" className="rounded-full py-2 px-4 bg-purple-600 text-white mt-4 md:mt-6 inline-flex items-center gap-2">
            <span>Get started</span> &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;