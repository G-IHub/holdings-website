"use client";
import Image from "next/image";
import Link from "next/link";
import { investmentOpportunities } from "../constants/investmentOpportunities";

export default function InvestorOpportunities() {
  return (
    <section className="py-12">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-3xl font-bold mb-2">Investment Opportunities</h2>
          <p className="text-sm text-gray-600">Strategic investments driving large-scale impact of Africa's biotechnology ecosystem.</p>
        </div>

        <div className="space-y-16">
          {investmentOpportunities.map((opp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={opp.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                {/* Image Container */}
                <div className={isEven ? "order-1" : "order-2 lg:order-2"}>
                  <div className="relative">
                    <Image
                      src={opp.image}
                      alt={opp.title}
                      className="rounded-md"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className={isEven ? "order-2" : "order-1 lg:order-1"}>
                  <h3 className="text-3xl max-md:text-2xl font-semibold mb-4">{opp.title}</h3>

                  {/* Problem Section */}
                  <div className="mb-6">
                    <div className="font-medium text-xl mb-2 text-gray-900">The Problem</div>
                    <p className="text-md text-gray-600">{opp.problem}</p>
                  </div>

                  {/* Solution Section */}
                  <div className="mb-6">
                    <div className="font-medium text-xl mb-2 text-gray-900">Our Solution</div>
                    <p className="text-md text-gray-600">{opp.solution}</p>
                  </div>

                  {/* Market Opportunity Section */}
                  <div className="mb-6">
                    <div className="font-medium text-xl mb-2 text-gray-900">Market Opportunity</div>
                    <ul className="space-y-2">
                      {opp.marketOpportunity.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mt-1 flex-shrink-0"></span>
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={opp.link}
                    className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-full text-sm hover:bg-purple-700 transition"
                  >
                    <span>Download Pitch Deck</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
