import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import frame from "../../assets/gmic/Frame.svg";
import frame1 from "../../assets/gmic/Frame1.svg";
import frame2 from "../../assets/gmic/Frame2.svg";
import frame3 from "../../assets/gmic/Frame3.svg";
import frame4 from "../../assets/gmic/Frame4.svg";

const Guidelines = () => {
  return (
    <div className="p-10 md:py-16 md:px-20 flex justify-center items-center">
      <div className="max-w-6xl">
        <div className="text-center">
          <h2 className="bricolage font-bold text-[#021C3A] text-2xl md:text-5xl">
            Guidelines for Registration & Submission
          </h2>
          <p className="text-base md:text-lg mt-4 text-gray-500">
            Follow these simple steps to secure your spot and participate in
            GMIC 2026
          </p>
        </div>

        {/* Frames */}
        <div className="flex flex-col gap-10">
          {/* Step 1 */}
          <div className="bg-[#FAFAFA] block md:flex items-center gap-14 mt-10 p-5 md:p-10 rounded-xl shadow-md">
            <div className="grid grid-cols-1 gap-6">
              <h3 className="text-gray-900 font-medium text-2xl md:text-3xl tracking-tight">
                Step 1: Reserve Your Slot
              </h3>
              <div className="space-y-3 text-gray-700 text-sm md:text-base">
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Your entry slot in the competition
                  </span>
                </div>
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Eligibility for all rewards and recognition
                  </span>
                </div>
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Your entry slot in the competition
                  </span>
                </div>
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Access to expert review of your submission
                  </span>
                </div>
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Certificate of Participation
                  </span>
                </div>
              </div>
              {/* <a href="" className="cursor-pointer space-x-1 text-[#003EB8]">
                <span>Learn More</span> <span>&rarr;</span>
              </a> */}
            </div>
            <Image src={frame} alt="" className="hidden md:block ml-30"/>
          </div>

          {/* Step 2 */}
          <div className="bg-[#FAFAFA] block md:flex items-center justify-center gap-14 p-5 md:p-10 rounded-xl shadow-md">
            <div className="grid grid-cols-1 gap-6">
              <h3 className="text-gray-900 font-medium text-2xl md:text-3xl tracking-tight">
                Step 2: Download Competition Guidelines
              </h3>
              <div className="space-y-3 text-gray-700 text-sm md:text-base">
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Get the full structure, formatting, and submission details in the PDF.
                  </span>
                </div>
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    This ensures your review article meets all requirements
                  </span>
                </div>
              </div>
              <a href="https://docs.google.com/document/d/18MkjDhqVpcCNStkPgAdvzE85UGB2QFNLoVFRMhcEZ68/edit?tab=t.0"  target="_blank" className="cursor-pointer space-x-1 text-[#003EB8] text-sm md:text-base">
                <span>Download Now</span> <span>&rarr;</span>
              </a>
            </div>
            <Image src={frame1} alt="" className="hidden md:block"/>
          </div>

          {/* Step 3 */}
          <div className="bg-[#FAFAFA] block md:flex items-center gap-14 p-5 md:p-10 rounded-xl shadow-md">
            <div className="grid grid-cols-1 gap-6">
              <h3 className="text-gray-900 font-medium text-2xl md:text-3xl tracking-tight">
                Step 3: Write Your Review Article
              </h3>
              <div className="space-y-3 text-gray-700 text-sm md:text-base">
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Article type: Review article (not original research)
                  </span>
                </div>
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Word limit: 2,000-3,000 words (excluding references)
                  </span>
                </div>
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Focus: Bioinformatics methods in malaria research
                  </span>
                </div>
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Word Format: PDF or Word document
                  </span>
                </div>
              </div>
            </div>
            <Image src={frame2} alt="" className="hidden md:block"/>
          </div>

          {/* Step 4 */}
          <div className="bg-[#FAFAFA] block md:flex items-center gap-14 p-5 md:p-10 rounded-xl shadow-md">
            <div className="grid grid-cols-1 gap-6">
              <h3 className="text-gray-900 font-medium text-2xl md:text-3xl tracking-tight">
                Step 4: Submit Your Article
              </h3>
              <div className="space-y-3 text-gray-700 text-sm md:text-base">
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Ensure your submission is complete and follows all guidelines.
                  </span>
                </div>
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Submissions will be evaluated by expert judges based on scientific rigor, methodology, and writing quality.
                  </span>
                </div>
              </div>
            </div>
            <Image src={frame4} alt="" className="hidden md:block"/>
          </div>

          {/* Step 5 */}
          <div className="bg-[#FAFAFA] block md:flex items-center gap-14 p-5 md:p-10 rounded-xl shadow-md">
            <div className="grid grid-cols-1 gap-6">
              <h3 className="text-gray-900 font-medium text-2xl md:text-3xl tracking-tight">
                Step 5: Winners Selected & Announced
              </h3>
              <div className="space-y-3 text-gray-700 text-sm md:text-base">
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Top entries are selected for prizes, mentorship, publication, and global visibility.
                  </span>
                </div>
                <div className="flex items-center">
                  <div><FaCheckCircle className="text-[#200822]" /></div>
                  <span className="ml-2">
                    Participants will receive notifications and certificates as applicable
                  </span>
                </div>
              </div>
            </div>
            <Image src={frame3} alt="" className="hidden md:block"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;