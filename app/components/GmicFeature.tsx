import Image from "next/image";
import icon from "../../assets/gmic/Icon.svg";
import vector from "../../assets/gmic/vector.svg";
import shield from "../../assets/gmic/shield.svg";

const Feature = () => {
  return (
    <div className="p-4 md:py-16 md:px-20 bg-[#FFFBFF]">
      <div className="max-w-6xl">
        <div className="text-center">
            <h2 className="inter font-medium text-2xl md:text-4xl tracking-tight text-[#021C3A]">GMIC Rewards & Opportunities</h2>
            <p className="text-base md:text-xl text-gray-700 mt-1 md:mt-3">Unlock Over $4,000+ in Career-Building Opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <div className="bg-white p-5 flex flex-col gap-2 md:gap-5 rounded-lg shadow-md">
                <div className="rounded-full bg-[#FEE3FF] flex items-center justify-center p-2 h-8 w-8">
                    <Image src={shield} alt="shield-icon" />
                </div>
                <h4 className="font-medium text-lg/tight">The Genomac Global Internship</h4>
                <p className="font-normal text-gray-500 text-sm">Hands-on experience with malaria genomics projects, mentorship, and exposure to real-world research workflows.</p>
            </div>
            <div className="bg-white p-5 flex flex-col gap-2 md:gap-5 rounded-lg shadow-md">
                <div className="rounded-full bg-[#FEE3FF] flex items-center justify-center p-2 h-8 w-8">
                    <Image src={icon} alt="icon" />
                </div>
                <h4 className="font-medium text-lg/tight">The Bioinformatics Masterclass Bundle</h4>
                <p className="font-normal text-gray-500 text-sm">Access 3 premium workshops/courses: Malaria & Parasite Genomics, Fundamentals of Bioinformatics, Functional Genomics.</p>
            </div>
            <div className="bg-white p-5 flex flex-col gap-2 md:gap-5 rounded-lg shadow-md">
                <div className="rounded-full bg-[#FEE3FF] flex items-center justify-center p-2 h-8 w-8">
                    <Image src={vector} alt="" />
                </div>
                <h4 className="font-medium text-lg/tight">The Scientific Mentorship Passport</h4>
                <p className="font-normal text-gray-500 text-sm">Direct guidance from Genomac experts and co-partners to refine your skills, research approach, and professional portfolio.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;