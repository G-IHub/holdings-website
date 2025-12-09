import Image from "next/image";

import growthGraph from "../../assets/icons/growth-graph.svg";
import globe from "../../assets/icons/world.svg";
import handshake from "../../assets/icons/handshake2.svg";

const CARDS = [
  {
    icon: growthGraph,
    title: "NAFDAC",
    desc: "National Agency for Food and Drug Administration and Control",
  },
  {
    icon: globe,
    title: "NHREC",
    desc: "National Health Research Ethics Committeeeent.",
  },
  {
    icon: handshake,
    title: "GDPR",
    desc: "General Data Protection Regulation.",
  },
  {
    icon: growthGraph,
    title: "ISO Standards",
    desc: "International Organization for Standardization",
    badge: "In Progress",
  },
];

export default function GovernanceInitiatives() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Regulatory Compliance</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-2">We maintain the highest standards of regulatory compliance across all operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((c, i) => (
            <div key={i} className="relative bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <Image src={c.icon} alt={`${c.title} icon`}/>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-sm font-semibold">{c.title}</div>
                <div className="text-sm text-gray-500 mt-2">{c.desc}</div>
              </div>

              {c.badge ? (
                <div className="absolute right-4 top-4">
                  <span className="inline-block text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">{c.badge}</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
