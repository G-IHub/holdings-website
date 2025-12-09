import Image from "next/image";
import bullsEye from "../../assets/icons/bulls-eye.svg";
import growthPeach from "../../assets/icons/growth-arrow-peach.svg";
import globe from "../../assets/icons/globe.svg";
import people from "../../assets/icons/people.svg";
import arrow from "../../assets/icons/arrow.svg";

export default function Invest() {
  return (
    <section className="py-12 bg-[#9b2fb6] text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 max-w-lg">
              Invest in the Future of Africa's Bioscience Ecosystem
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-xl">
              We drive returns through equity ownership, commercialization of
              innovations, and strategic partnerships across biotechnology and
              life sciences. Join us in building a sustainable future for
              healthcare and innovation in Africa.
            </p>

            <a href="/investor-relations" className="inline-flex items-center gap-3 bg-white text-[#9b2fb6] py-3 px-6 rounded-full w-max">
              <span>Investor Relation</span>
              <span className="w-6 h-6 relative">
                <Image src={arrow} alt="arrow" fill className="object-contain" />
              </span>
            </a>
          </div>

          <div className="lg:w-1/2 p-6 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <Card icon={bullsEye} title="Strategic Equity" text="Clear structure for equity distribution and value creation" />
              <Card icon={growthPeach} title="Revenue Growth" text="Multiple streams: management fees, dividends, commercialization" />
              <Card icon={people} title="Partnerships" text="Collaborations with hospitals, universities, and government" />
              <Card icon={globe} title="Market Growth" text="Expanding diagnostics, health tech, and education markets" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="p-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm">
      <div className="flex flex-col items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <Image src={icon} alt="icon" width={22} height={22} />
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-white/90 mt-1">{text}</p>
        </div>
      </div>
    </div>
  );
}
