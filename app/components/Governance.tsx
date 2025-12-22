import Image from "next/image";

import heartIcon from "../../assets/icons/heart.svg";

export default function Governance() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold">Governance & ESG Commitment</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-sm mt-3">
            Building a sustainable future through responsible innovation, social impact, and strong governance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Card
            icon={heartIcon}
            title="Social Impact"
            body="Training 100,000+ scientists, empowering youth, and building local capacity across Africa."
          />

          <Card
            icon={heartIcon}
            title="Environmental"
            body="Sustainable plant genomics, herbal sourcing, and eco-friendly biotechnology practices."
          />

          <Card
            icon={heartIcon}
            title="Governance"
            body="Compliance with CAC, NAFDAC, NHREC, GDPR, and international regulatory standards."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center justify-center">
        <Image src={icon} alt="icon" width={40} height={40} />
      </div>
      <div>
        <h4 className="font-semibold text-2xl mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{body}</p>
      </div>
    </div>
  );
}
