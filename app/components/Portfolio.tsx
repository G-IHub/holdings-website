"use client";
import Image from "next/image";
import Link from "next/link";
import PORTFOLIO from "../constants/portfolio";

import genomacInstituteImg from "../../assets/subsidiaries/genomac-institute.png";
import gihubImg from "../../assets/subsidiaries/g-ihub.png";
import gnaturesImg from "../../assets/subsidiaries/g-natures.png";
import genomacLabsImg from "../../assets/subsidiaries/genomac-labs.png";
import gscImg from "../../assets/subsidiaries/GSC.png";
import flagshipImg from "../../assets/subsidiaries/flagship-initiative.png";

const IMAGE_MAP: Record<string, any> = {
  "genomac-institute.png": genomacInstituteImg,
  "g-ihub.png": gihubImg,
  "g-natures.png": gnaturesImg,
  "genomac-labs.png": genomacLabsImg,
  "GSC.png": gscImg,
  "flagship-initiative.png": flagshipImg,
};

export default function Portfolio() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Our Portfolio</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-3">
            Five subsidiaries and multiple flagship initiatives driving innovation across genomics, biotechnology, healthcare, and entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((item) => {
            const filename = item.image_path.split("/").pop() || "";
            const src = IMAGE_MAP[filename];

            return (
              <article key={item.name} className="bg-transparent">
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <div className="relative w-full h-70">
                    {src ? (
                      <Image src={src} alt={item.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-100" />
                    )}
                  </div>
                </div>

                <h3 className="mt-4 font-medium text-lg">{item.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>

                <Link href={item.link} className="inline-flex items-center gap-2 mt-3 text-sm text-indigo-600">
                  Learn More <span aria-hidden>→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
