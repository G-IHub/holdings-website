"use client";
import Image from "next/image";
import contentImg from "../../assets/career/career.png";

export default function BenefitsPerks() {
  const perks = [
    "Competitive salary and performance bonuses",
    "Professional development and training opportunities",
    "Health insurance and wellness programs",
    "Flexible work arrangements",
    "Collaborative and innovative work environment",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Benefits & Perks</h3>
            <p className="text-gray-600 mb-6">We invest in our people because they're the foundation of our success.</p>

            <ul className="space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-lg overflow-hidden shadow-lg relative h-56 md:h-80 lg:h-[420px] w-full">
              <Image src={contentImg} alt="Benefits visual" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
