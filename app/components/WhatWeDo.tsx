import Image from "next/image";
import shieldIcon from "../../assets/icons/shield.svg";
import buildingsIcon from "../../assets/icons/buildings.svg";
import growthIcon from "../../assets/icons/growth-arrow.svg";

export default function WhatWeDo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-4xl max-lg:text-3xl font-semibold mb-3">What we do</h3>
        <p className="max-w-3xl text-xl mx-auto text-gray-600 mb-10">
          As a multidisciplinary innovation and development company, we create
          long-term value through strategic governance, shared services, and
          growth initiatives.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={shieldIcon}
            title="Strategic Oversight"
            body="We align our subsidiaries with corporate goals, ethics, and compliance standards to ensure sustainable growth."
          />

          <ServiceCard
            icon={buildingsIcon}
            title="Shared Services"
            body="Centralized finance, HR, governance, marketing, legal, and IT support across all portfolio companies."
          />

          <ServiceCard
            icon={growthIcon}
            title="Growth & Expansion"
            body="Capital allocation, strategic partnerships, and new market entry across Lagos, Morocco, and beyond."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm text-left">
      <div className="flex items-start flex-col gap-4">
        <div className="flex items-center justify-center">
          <Image src={icon} alt="icon" width={50} height={50} />
        </div>
        <div>
          <h4 className="font-semibold text-xl mb-2">{title}</h4>
          <p className="text-lg font-light text-gray-600">{body}</p>
        </div>
      </div>
    </div>
  );
}
