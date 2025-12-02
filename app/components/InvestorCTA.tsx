"use client";
import Image from "next/image";
import arrow from "../../assets/icons/arrow.svg";

export default function InvestorCTA() {
  return (
    <section className="py-12 mt-8 bg-purple-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white py-10 px-6 rounded">
          <h3 className="text-4xl md:text-3xl font-semibold mb-3">Ready to Invest ?</h3>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90 mb-6">Join us in building Africa's biotechnology future. Contact our investor relations desk to learn more about partnership and investment opportunities.</p>

          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-5 py-2 rounded-full shadow-sm hover:shadow-md"
            >
              <span className="text-sm font-medium">Contact Investor Desk</span>
              <span className="inline-flex items-center">
                <Image src={arrow} alt="arrow" width={25} height={25} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
