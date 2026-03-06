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
    <main>
      <Hero />
      <About />
      <Stats />
      <Focus />
      <Feature />
      <Works />
      <Guidelines />
      <FAQ />
      <Contact />
    </main>
  );
}
