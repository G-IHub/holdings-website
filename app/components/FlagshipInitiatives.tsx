import Image from "next/image";

import growthGraph from "../../assets/icons/growth-graph.svg";
import chartIcon from "../../assets/icons/charts.svg";
import rocket from "../../assets/icons/rocket.svg";
import steth from "../../assets/icons/steth.svg";

const items = [
  {
    icon: growthGraph,
    title: "Omicsboard",
    body: "Comprehensive omics data analytics and visualization platform for research and institutions.",
  },
  {
    icon: chartIcon,
    title: "AMRwatch Africa",
    body: "Community driven genomic surveillance system for antimicrobial resistance monitoring across Africa.",
  },
  {
    icon: rocket,
    title: "Ideaspora",
    body: "Innovation and entrepreneurship program connecting African scientists with global opportunities.",
  },
  {
    icon: steth,
    title: "Healthmania",
    body: "Digital health platform integrating wellness tracking, telemedicine, and personalized health insights.",
  },
];

export default function FlagshipInitiatives() {
  return (
    <section className="my-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Flagship Initiative</h2>
          <p className="text-gray-600 mt-2">Strategic programs and platform that extend our impact across the biotechnology and health ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {items.map((it) => (
            <div key={it.title} className="bg-white flex flex-col rounded-lg shadow-sm p-6 flex gap-4 items-start">
              <div className="flex items-center justify-center">
                <Image src={it.icon} alt={it.title} width={35} height={35} />
              </div>

              <div>
                <h4 className="font-semibold mb-2">{it.title}</h4>
                <p className="text-sm text-gray-600">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
