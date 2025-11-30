import Image from "next/image";
import aboutImg from "../../assets/about/about.png";

export default function AboutHero() {
  return (
    <section className="py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 pt-15 flex flex-col max-w-8xl">
        <div className="flex max-md:flex-col max-md:flex-reverse justify-between items-center gap-10">
          <div className="min-w-[50vw]">
            <h2 className="text-4xl md:text-4xl font-semibold mb-4">Who we are</h2>
            <p className="text-gray-700 mb-6 text-xl leading-relaxed">
              Genomac Holdings is headquartered in Ogbomoso, <br/>Nigeria, with expansion to Lagos and planned operations<br/>
              in Morocco. We orchestrate subsidiaries and flagship <br/>initiatives in genomics, biotechnology, healthcare, and<br/>
              innovation, ensuring resilience, well-being, and <br/>sustainable impact.
            </p>

            <p className="text-gray-700 mb-6 text-xl leading-relaxed">
              We create long-term value by managing subsidiaries, <br/>building strategic partnerships, and commercializing<br/>
              solutions that improve lives across Africa and beyond.
            </p>

            <div className="inline-block bg-pink-50 border-l-4 border-pink-200 p-4 rounded-md max-w-md">
              <p className="text-sm text-pink-700">“Forging a Sustainable Future Through Strategic Innovation and Investment in Africa and Beyond”</p>
            </div>
          </div>

            <div className="w-full max-h-[60vh] rounded-lg overflow-hidden">
              <Image src={aboutImg} alt="About" className="object-cover" />
            </div>
        </div>
      </div>
    </section>
  );
}
