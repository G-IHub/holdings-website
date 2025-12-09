import Image from "next/image";
import shieldIcon from "../../assets/icons/shield.svg";
import growthIcon from "../../assets/icons/growth-arrow.svg";

export default function AboutVision() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Vision and Mission</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-3">
            As Guiding our strategic direction and defining our purpose<br/>in transforming Africa's biotechnology landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg max-w-2xl overflow-hidden">
            <div className="flex flex-col items-start gap-6 p-6 bg-gradient-to-br from-purple-700 to-purple-600 text-white rounded-lg">
              <div className="flex items-center justify-center bg-white/20 rounded-full">
                <Image src={shieldIcon} alt="vision icon"/>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Vision</h3>
                <p className="text-md leading-relaxed mb-7">
                  To be Africa's foremost innovation powerhouse, establishing a transformative platform of landmark achievements in genomics,
                  biotechnology, and healthcare that sets the global standard for multidisciplinary excellence and impact.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg max-w-2xl overflow-hidden">
            <div className="flex flex-col items-start gap-6 p-6 bg-gradient-to-br from-sky-500 to-sky-400 text-white rounded-lg">
              <div className="flex items-center justify-center bg-white/20 rounded-full">
                <Image src={growthIcon} alt="mission icon"/>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Mission</h3>
                <p className="text-md leading-relaxed">
                  To strategically govern, invest in, and scale multidisciplinary companies that pioneer breakthrough innovations in education,
                  healthcare, biotechnology, entrepreneurship, and technology—creating lasting value and driving sustainable development across Africa and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
