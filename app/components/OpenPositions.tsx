"use client";
import Image from "next/image";
import bagIcon from "../../assets/icons/bag.svg";

const JOBS = [
  {
    title: "Senior Bioinformatician",
    company: "Genomac Institute Inc.",
    location: "Ogbomoso, Nigeria (Hybrid)",
    type: "Full-time",
    desc: "Lead bioinformatics training programs and research initiatives in genomics and computational biology.",
  },
  {
    title: "Corporate Finance Manager",
    company: "Genomac Holdings",
    location: "Lagos, Nigeria",
    type: "Full-time",
    desc: "Manage financial planning, reporting, and strategic allocation across portfolio companies.",
  },
  {
    title: "Venture Studio Manager",
    company: "G-iHub",
    location: "Lagos, Nigeria",
    type: "Full-time",
    desc: "Drive startup incubation, product development, and commercialization of health tech ventures.",
  },
  {
    title: "Clinical Laboratory Scientist",
    company: "Genomac Labs",
    location: "Lagos, Nigeria",
    type: "Full-time",
    desc: "Perform genomic testing and precision medicine diagnostics using qPCR and molecular techniques.",
  },
];

export default function OpenPositions() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Open Position</h2>
          <p className="mt-3 text-sm text-gray-600">Explore opportunities across our Holdings and subsidiary companies.</p>
        </div>

        <div className="space-y-4">
          {JOBS.map((job) => (
            <div key={job.title} className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center">
                  <Image src={bagIcon} alt="bag"/>
                </div>

                <div className="min-w-0">
                  <div className="font-medium text-sm">{job.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{job.desc}</div>

                  <div className="mt-2 text-xs text-green-600">
                    <span className="font-medium text-xs text-green-600">{job.company}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500">{job.location}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500">{job.type}</span>
                  </div>
                </div>
              </div>

              <div>
                <a href="#" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">Apply Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
