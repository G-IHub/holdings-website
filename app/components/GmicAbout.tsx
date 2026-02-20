import Image from "next/image";
import about_img from "../../assets/gmic/about.svg";

const About = () => {
  return (
    <div className="flex items-center justify-center p-10 md:py-16 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center max-w-6xl gap-10 md:gap-20">
        <div className="">
          <Image src={about_img} alt="about-img" />
        </div>

        <div className="space-y-4">
          <h2 className="bricolage font-medium text-3xl md:text-4xl tracking-tight text-[#021C3A]">About GMIC</h2>
          <div className="text-sm md:text-base space-y-4 mt-2 md:mt-6 text-gray-700">
            <p>
              The <b>Genomac Malaria Innovation Competition (Scientific Writing) - GMIC </b>is a World Malaria Day initiative designed to spotlight brilliant scientific minds who are passionate about malaria research, genomics, and bioinformatics.
            </p>
            <p>
              <b>GMIC</b> is not just a writing competition, it is a platform to
              inspire critical scientific thinking, encourage high-quality
              research communication, and amplify ideas that can strengthen
              malaria control efforts across Africa and beyond.
            </p>
            <p>
              <b>Genomac Holdings</b> is launching GMIC to empower young
              scientists and professionals to explore the role of modern
              computational biology in malaria research and contribute to the
              global fight through knowledge, insight, and scientific writing
              excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;