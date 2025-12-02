import Image from "next/image";
import Link from "next/link";
import SUBSIDIARIES from "../constants/subsidiaries";

import instImg from "../../assets/subsidiaries/genomac-institute.png";
import ihubImg from "../../assets/subsidiaries/g-ihub.png";
import naturesImg from "../../assets/subsidiaries/g-natures.png";
import gscImg from "../../assets/subsidiaries/GSC.png";
import labsImg from "../../assets/subsidiaries/genomac-labs.png";

import brainIcon from "../../assets/icons/brain.svg";
import bulbIcon from "../../assets/icons/light-bulb.svg";
import leafIcon from "../../assets/icons/leaf.svg";
import peopleIcon from "../../assets/icons/people2.svg";
import tubeIcon from "../../assets/icons/tube.svg";
import FlagshipInitiatives from "../components/FlagshipInitiatives";

const IMAGES = [instImg, ihubImg, naturesImg, gscImg, labsImg];
const ICONS = [brainIcon, bulbIcon, leafIcon, peopleIcon, tubeIcon];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094L8.5 15.5a1 1 0 01-1.497.07l-.084-.09L3.293 11.66a1 1 0 011.32-1.497l.094.083L7 13.117l8.293-8.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function PortfolioPage() {
  return (
    <main className="py-16  pt-30 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold">Our Subsidiaries</h1>
          <p className="max-w-3xl mx-auto text-gray-600 mt-3">A brief overview of our sister organisations and their focus areas.</p>
        </div>

        <div className="space-y-16">
          {SUBSIDIARIES.map((s, idx) => {
            const image = IMAGES[idx];
            const icon = ICONS[idx];
            const reverse = idx % 2 === 1; // alternate layout

            return (
              <section key={s.name} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`order-1 ${reverse ? 'md:order-2 md:pr-8' : 'md:order-1 md:pr-0'}`}>
                  <div className="flex items-center gap-4 mb-3">
                      <Image src={icon} alt={`${s.name} icon`} width={60} height={60}/>
                    <div className="flex items-start justify-center flex-col text-left">
                      <h3 className="text-2xl font-semibold">{s.name}</h3>
                      <div className="text-sm text-gray-500">{s.tagline}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{s.description} <Link href={s.website_link} target="_blank" rel="noreferrer"><span className="text-indigo-600 font-medium underline">Visit website</span></Link></p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key offerings</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-1"><CheckIcon /></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="border-t border-gray-200 my-6" />

                  <div className="mt-4">
                    <div className="w-full bg-pink-50 text-pink-700 px-4 py-3 rounded text-sm">Focus Areas: {s.focus_areas.join(', ')}</div>
                  </div>
                </div>

                <div className={`order-2 ${reverse ? 'md:order-1 md:justify-start' : 'md:order-2 md:justify-end'} flex justify-center` }>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <Image src={image} alt={s.name} width={1000} height={900} className="object-cover max-md:h-72" />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Flagship initiatives section */}
        <FlagshipInitiatives />
      </div>
    </main>
  );
}
