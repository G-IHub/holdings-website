import Link from "next/link";
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
      <section className="px-4 py-6 md:py-10">
        <div className="container mx-auto max-w-6xl rounded-[2rem] border border-black/5 bg-[linear-gradient(135deg,#f7f2ec_0%,#ffffff_45%,#f0d7a4_100%)] px-6 py-8 shadow-[0_20px_50px_rgba(31,20,36,0.08)] md:px-10 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b3f1d]">Research Winners</div>
              <h2 className="mt-3 text-3xl font-semibold text-[#1f1424] md:text-4xl">View and download the five competition-winning research papers.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                The page is ready now with a simple content model, so you can plug in Sanity later without changing the layout.
              </p>
            </div>
            <Link href="/research-winners" className="inline-flex items-center justify-center rounded-full bg-[#1f1424] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#32203a]">
              Open winners page
            </Link>
          </div>
        </div>
      </section>
      <Portfolio />
      <Invest />
      <Governance />
      <CTA />
    </main>
  );
}
