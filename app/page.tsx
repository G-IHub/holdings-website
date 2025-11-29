import Hero from "./components/Hero";
import Impact from "./components/Impact";
import WhatWeDo from "./components/WhatWeDo";
import Portfolio from "./components/Portfolio";
import Invest from "./components/Invest";
import Governance from "./components/Governance";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Impact />
      <WhatWeDo />
      <Portfolio />
      <Invest />
      <Governance />
      <CTA />
    </main>
  );
}
