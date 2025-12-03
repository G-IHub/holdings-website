import Image from "next/image";
import contentBg from "../../assets/investor-rel/Content.png";

const SECTIONS = [
  {
    key: "social",
    title: "Social",
    imageLeft: true,
    imageAlt: "Social gradient",
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
    imageAlt: "Environmental gradient",
    items: [
      { title: "Regulatory Compliance", desc: "NAFDAC, NHREC, and international regulatory adherence" },
      { title: "Transparent Reporting", desc: "Regular financial and operational reporting to stakeholders" },
      { title: "Board Oversight", desc: "Independent board members and structured governance" },
      { title: "Risk Management", desc: "Comprehensive risk assessment and mitigation frameworks" },
    ],
  },
  {
    key: "governance",
    title: "Governance",
    imageLeft: true,
    imageAlt: "Governance gradient",
    items: [
      { title: "Regulatory Compliance", desc: "NAFDAC, NHREC, and international regulatory adherence" },
      { title: "Transparent Reporting", desc: "Regular financial and operational reporting to stakeholders" },
      { title: "Board Oversight", desc: "Independent board members and structured governance" },
      { title: "Risk Management", desc: "Comprehensive risk assessment and mitigation frameworks" },
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
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading is provided by the Policies section above; avoid duplicating the title/subtitle here. */}

        <div className="grid gap-y-10">
          {SECTIONS.map((sec, si) => (
            <div key={sec.key} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {sec.imageLeft ? (
                <div className="order-1">
                  <div
                    className="w-full h-[28rem] rounded-xl overflow-hidden shadow-md"
                    style={{
                      backgroundImage: `url(${contentBg.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label={sec.imageAlt}
                  />
                </div>
              ) : null}

              <div className="order-2 flex">
                <div className="flex flex-col gap-6 justify-center">
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
              </div>

              {!sec.imageLeft ? (
                <div className="order-1 lg:order-2">
                  <div
                    className="w-full h-[28rem] rounded-xl overflow-hidden shadow-md"
                    style={{
                      backgroundImage: `url(${contentBg.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label={sec.imageAlt}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
