import Image from "next/image";
import arrow from "../../assets/icons/arrow.svg";

export default function GovernanceCTA() {
  return (
    <section className="py-12 bg-[#a84db4]">
        <div className="py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Ready to Invest ?</h2>
          <p className="text-white/90 mt-3 max-w-2xl mx-auto">Join us in building Africa's biotechnology future. Contact our investor relations desk to learn more about partnership and investment opportunities..</p>

          <div className="mt-6">
            <a
              href="/investor-relations"
              className="inline-flex items-center gap-3 bg-white text-[#a84db4] px-5 py-2 rounded-full shadow-md"
            >
              <span className="font-medium">Contact Us</span>
              <Image src={arrow} alt="arrow" width={30} height={30} />
            </a>
          </div>
      </div>
    </section>
  );
}
