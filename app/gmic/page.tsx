import Hero from "../components/GmicHero";
import About from "../components/GmicAbout";
import Stats from "../components/GmicStats";
import Focus from "../components/GmicFocus";
import Feature from "../components/GmicRewards";
import Works from "../components/GmicWorks";
import Guidelines from "../components/GmicGuidelines";
import FAQ from "../components/GmicFAQ";
import Contact from "../components/GmicContact";

export default function GMICPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-[#f7f7fb]">
         {/* <Hero />
      <About />
      <Stats />
      <Focus />
      <Feature />
      <Works />
      <Guidelines />
      <FAQ />
      <Contact /> */}
      <div className="text-center p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#021C3A]">GMIC Registration Closed</h1>
        <p className="mt-4 text-lg text-gray-600">
          Thank you for your interest. Registration is now closed. Please visit again for future GMIC opportunities.
        </p>
      </div>
    </main>
  );
}
