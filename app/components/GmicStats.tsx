import Image from "next/image";
import img1 from "../../assets/gmic/microscope.svg";
import img2 from "../../assets/gmic/web.svg";
import img3 from "../../assets/gmic/bulb.svg";

const Stats = () => {
  return (
    <div className="flex items-center justify-center p-4 md:py-16 md:px-20 bg-[#200822]">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center max-w-6xl gap-10 md:gap-50 p-4">
        <div className="text-center text-white flex flex-col items-center gap-2">
          <div className="rounded-full flex justify-center items-center bg-[#FDF6FD] w-12 h-12">
            <Image src={img1} alt="" className="w-8" />
          </div>
          <h4 className="font-bold">Scientific Excellence</h4>
          <p className="text-sm">Inspire critical thinking and high-quality research communication</p>
        </div>
        <div className="text-center text-white flex flex-col items-center gap-2">
          <div className="rounded-full flex justify-center items-center bg-[#FDF6FD] w-12 h-12">
            <Image src={img2} alt="" className="w-8" />
          </div>
          <h4 className="font-bold">Global Impact</h4>
          <p className="text-sm">Strengthen malaria control efforts across Africa and beyond</p>
        </div>
        <div className="text-center text-white flex flex-col items-center gap-2">
          <div className="rounded-full flex justify-center items-center bg-[#FDF6FD] w-12 h-12">
            <Image src={img3} alt="" className="w-8" />
          </div>
          <h4 className="font-bold">Scientific Excellence</h4>
          <p className="text-sm">Empower young scientists to explore computational biology</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;