import Image from "next/image";

import target from "../../assets/icons/target.svg";
import graph from "../../assets/icons/graph.svg";
import world from "../../assets/icons/world.svg";
import handshake from "../../assets/icons/handshake2.svg";

const ITEMS = [
  {
    icon: target,
    title: "Healthcare Institutions",
    body: "Partnerships with hospitals and clinics for precision medicine and diagnostic services.",
  },
  {
    icon: graph,
    title: "Biotech Ventures",
    body: "Joint ventures in genomics, drug discovery, and therapeutic development.",
  },
  {
    icon: world,
    title: "Academic Institutions",
    body: "Collaborations with universities for research, training, and capacity building.",
  },
  {
    icon: handshake,
    title: "Government & NGOs",
    body: "Public-private partnerships for health initiatives and innovation programs.",
  },
];

export default function PartnershipOpportunities() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Partnership Opportunities</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-2">Strategic collaboration opportunities across healthcare, biotechnology, education, and innovation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {ITEMS.map((it) => (
            <div key={it.title} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center justify-center">
                  <Image src={it.icon} alt={it.title} width={35} height={35} />
                </div>

                <div>
                  <h4 className="font-semibold text-sm md:text-base">{it.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{it.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
