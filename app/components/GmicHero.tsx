import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import star from "../../assets/gmic/ai-magic.svg";
// import herosvg from "../../assets/gmic/hero-bg.webp";
import heroBg from "../../assets/home/hero-bg.png";

const Hero = () => {
  return (
    <div className="md:h-screen flex items-center md:justify-center relative">
      <div className="absolute inset-0 -z-10">
        <Image src={heroBg} alt="Hero background" fill className="object-cover" sizes="100vw" />
      </div>

      <div className="bg-transparent mt-16">
        <div className="poppins max-w-3xl p-6">
          <div className="bg-linear-to-r from-[#200822] from-5% to-gray-400/20 to-90% p-0.5 rounded-full mx-auto w-80 mt-10 md:mt-0">
            <div className="flex items-center justify-center gap-2 bg-white rounded-full px-1 py-1">
              <Image src={star} alt="" className="size-4 md:size-6" />
              <span className="bricolage text-[9px]">
                GMIC 2026 | World Malaria Day Review Article Competition
              </span>
            </div>
          </div>

          <div className="mt-4 md:mt-6">
            <h1 className="font-bold text-center mb-3 text-4xl max-md:text-3xl max-w-3xl leading-tight">
              Genomac Malaria Innovation Competition
            </h1>
            <p className="text-center  text-gray-500">
              A scientific writing competition for early-career researchers,
              graduate students, clinicians, and life science professionals
              passionate about malaria research, genomics, and bioinformatics.
            </p>
          </div>
          <button className="bg-purple-600 rounded-full mt-4 md:mt-6 px-3 py-1 md:px-6 md:py-2 flex items-center gap-2 mx-auto cursor-pointer">
            <span className="text-white">Register Now</span>
            <span className="rounded-full p-1 md:p-2 bg-white flex items-center justify-center">
              <FaLocationArrow className="text-xs md:text-sm text-purple-600" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;