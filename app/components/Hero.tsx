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
        <div className="mx-auto max-w-6xl items-center justify-center flex-col flex px-6 text-center">
          <h1 className="text-4xl max-md:text-3xl max-w-3xl font-semibold leading-tight">
            Building a Sustainable Future in Biotechnology, Healthcare and Technology
          </h1>

          <p className="mt-6 text-md text-gray-500 max-w-3xl mx-auto">
            Genomac Holdings invests, governs, and scales a diversified portfolio across genomics,
            biotechnology, healthcare, and entrepreneurship.
          </p>

          <div className="mt-8 flex justify-center max-md:flex-col max-md:items-center gap-4">
            <a href="/portfolio" className="bg-purple-600 text-white px-3 py-1 rounded-full inline-flex items-center gap-3 shadow-md hover:bg-purple-700 transition max-md:w-full justify-center">
              <span>Explore Our Portfolio</span>
              <Image src={arrowIcon} alt="arrow" width={35} height={35} />
            </a>
            <a href="/contact" className="border border-purple-300 text-purple-600 px-3 py-1 rounded-full inline-flex items-center gap-2 hover:bg-white/60 transition max-md:w-full justify-center">
              <span>Contact Us</span>
              <Image src={arrowIcon} alt="arrow" width={35} height={35} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
