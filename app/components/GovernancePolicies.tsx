import Image from "next/image";

import shield from "../../assets/icons/shield.svg";
import buildings from "../../assets/icons/buildings.svg";
import growth from "../../assets/icons/growth-arrow.svg";

const CARDS = [
  {
    icon: shield,
    title: "Corporate Governance",
    desc: "Board structure, decision-making frameworks, and accountability mechanisms.",
  },
  {
    icon: buildings,
    title: "Financial Management",
    desc: "Transparent financial reporting, audit procedures, and fiscal responsibility.",
  },
  {
    icon: growth,
    title: "Human Resources",
    desc: "Fair employment practices, professional development, and workplace ethics.",
  },
  {
    icon: shield,
    title: "Intellectual Property",
    desc: "IP protection, licensing agreements, and technology transfer policies.",
  },
  {
    icon: buildings,
    title: "Compliance & Ethics",
    desc: "Regulatory adherence, anti-corruption measures, and ethical standards.",
  },
  {
    icon: growth,
    title: "Data Protection",
    desc: "GDPR compliance, data security, and privacy protection protocols.",
  },
];

export default function GovernancePolicies() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Corporate Governance Policies</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-2">Comprehensive frameworks ensuring transparency, accountability, and ethical conduct.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((c, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <Image src={c.icon} alt={c.title + " icon"} width={35} height={35} />
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
