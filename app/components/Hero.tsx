import Image from "next/image";
import heroBg from "../../assets/home/hero-bg.png";
import arrowIcon from "../../assets/icons/arrow.svg";

export default function Hero() {
  return (
    <section className="relative h-[100vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <Image src={heroBg} alt="Hero background" fill className="object-cover" sizes="100vw" />
      </div>

      <div className="w-full">
        <div className="mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Building Africa’s Futures in <br/>Biotechnology, Healthcare, and <br/>Technology
          </h1>

          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Genomac Holdings invests, governs, and scales a diversified portfolio across genomics,
            biotechnology, healthcare, and entrepreneurship.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full inline-flex items-center gap-3 shadow-md hover:bg-purple-700 transition">
              <span>Explore Our Portfolio</span>
              <Image src={arrowIcon} alt="arrow" width={35} height={35} />
            </button>

            <button className="border border-purple-300 text-purple-600 px-6 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/60 transition">
              <span>Contact Us</span>
              <Image src={arrowIcon} alt="arrow" width={35} height={35} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
