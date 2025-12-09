import Image from "next/image";
import founderImg from "../../assets/about/ceo.jpg";

export default function AboutFounder() {
  return (
    <section className="py-16 max-w-6xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm text-pink-600 font-semibold uppercase mb-2">Founder & CEO</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-7">Oluwaseyi Olawale</h3>

            <p className="text-gray-700 text-base leading-relaxed mb-4">
              A visionary bioinformatician and innovator with expertise in genomics, metagenomics, transcriptomics,
              proteomics, and artificial intelligence. Oluwaseyi has empowered over 100,000 scientists across 100+ countries
              through Genomac Institute's educational programs.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Under his leadership, Genomac Holdings has spearheaded natural product research and development for diabetes,
              hemorrhoids, digestive health, and more, while building a diversified portfolio of subsidiaries that are transforming
              healthcare and biotechnology across Africa.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-block bg-purple-700 text-white px-3 py-2 rounded-full text-sm">Genomics</span>
              <span className="inline-block bg-purple-700 text-white px-3 py-2 rounded-full text-sm">Bioinformatics</span>
              <span className="inline-block bg-purple-700 text-white px-3 py-2 rounded-full text-sm">AI & Machine Learning</span>
              <span className="inline-block bg-purple-700 text-white px-3 py-2 rounded-full text-sm">Natural Product R&D</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full rounded-lg overflow-hidden">
              <Image src={founderImg} alt="Founder" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
