import Hero from "./components/Hero";
import Impact from "./components/Impact";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Impact />
      <WhatWeDo />
    </main>
  );
}
