import Image from "next/image";
import socialImg from "../../assets/governance/social.png";
import environmentalImg from "../../assets/governance/environmental.png";
import governanceImg from "../../assets/governance/governance.png";

const SECTIONS = [
  {
    key: "social",
    title: "Social",
    imageLeft: true,
    image: socialImg,
    imageAlt: "Community engagement",
    items: [
      { title: "Capacity Building", desc: "Training 100,000+ life scientists across 100+ countries." },
      { title: "Youth Empowerment", desc: "Internship programs, bootcamps, and career development initiatives." },
      { title: "Healthcare Access", desc: "Affordable diagnostics and personalized medicine solution." },
      { title: "Community Engagement", desc: "Local partnerships and community health programs." },
    ],
  },
  {
    key: "environmental",
    title: "Environmental",
    imageLeft: false,
    image: environmentalImg,
    imageAlt: "Environmental initiatives",
    items: [
      { title: "Sustainable Sourcing", desc: "Ethical harvesting of herbal and natural product materials." },
      { title: "Plant Genomics", desc: "Conservation and sustainable use of medicinal plant species." },
      { title: "Green Laboratory", desc: "Eco-friendly laboratory practices and waste management." },
      { title: "Carbon Footprint", desc: "Commitment to reducing environmental impact across operations." },
    ],
  },
  {
    key: "governance",
    title: "Governance",
    imageLeft: true,
    image: governanceImg,
    imageAlt: "Governance meeting",
    items: [
      { title: "Regulatory Compliance", desc: "NAFDAC, NHREC, and international regulatory adherence." },
      { title: "Transparent Reporting", desc: "Regular financial and operational reporting to stakeholders." },
      { title: "Board Oversight", desc: "Independent board members and structured governance." },
      { title: "Risk Management", desc: "Comprehensive risk assessment and mitigation frameworks." },
    ],
  },
];

function NumberBadge({ n }: { n: number }) {
  return (
    <div className="w-7 h-7 rounded-md bg-gray-100 text-gray-700 flex items-center justify-center text-sm font-medium">
      {n}
    </div>
  );
}

export default function GovernanceDetails() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-y-10">
          {SECTIONS.map((sec) => (
            <div key={sec.key} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left column: title + either image (if imageLeft) or the items list (if imageRight) */}
              <div className="flex flex-col items-center h-full justify-center">
                {sec.imageLeft ? (
                  <div className="w-full">
                  <h3 className="text-xl font-semibold mb-4">{sec.title}</h3>
                  <div className="relative w-full h-[28rem] rounded-xl overflow-hidden shadow-md">
                    <Image src={sec.image} alt={sec.imageAlt} fill className="object-cover" />
                  </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center h-full justify-center gap-6">
                    <div className="space-y-4">
                      {sec.items.map((it, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <NumberBadge n={idx + 1} />
                          <div>
                            <div className="text-base md:text-lg font-semibold">{it.title}</div>
                            <div className="text-sm md:text-base text-gray-600">{it.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right column: opposite of left - items if imageLeft, image if imageRight */}
              <div className="flex flex-col items-center h-full justify-center"> 
                {sec.imageLeft ? (
                  <div className="flex flex-col items-center h-full justify-center gap-6">
                    <div className="space-y-4">
                      {sec.items.map((it, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <NumberBadge n={idx + 1} />
                          <div>
                            <div className="text-base md:text-lg font-semibold">{it.title}</div>
                            <div className="text-sm md:text-base text-gray-600">{it.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                  <h3 className="text-xl font-semibold mb-4">{sec.title}</h3>
                  <div className="relative w-full h-[28rem] rounded-xl overflow-hidden shadow-md">
                    <Image src={sec.image} alt={sec.imageAlt} fill className="object-cover" />
                  </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
