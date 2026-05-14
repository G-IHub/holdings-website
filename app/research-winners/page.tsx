import type { Metadata } from "next";
import Link from "next/link";
import RESEARCH_WINNERS from "../constants/researchWinners";

export const metadata: Metadata = {
  title: "Research Winners",
  description: "View and download the winning research papers from the competition.",
};

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path d="M7 3.75h7.5L19 8.25V20.25H7V3.75Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14.5 3.75v4.5H19" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 13.5h6M9 16.5h6M9 10.5h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ResearchWinnersPage() {
  return (
    <main className="bg-[#f7f5f2] pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="max-w-3xl">
          <div className="inline-flex rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b3f1d] shadow-sm ring-1 ring-[#1f1424]/8">
            Genomac Innovation Hackathon
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#1f1424] sm:text-5xl">
            Research winners
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            This page is dedicated to showcasing the winners of the Genomac Innovation Hackathon and their research papers. Each entry includes a brief overview of the project, the researcher, the institution, and a direct link to the full PDF.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {RESEARCH_WINNERS.map((winner, index) => (
            <article
              key={winner.name}
              className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex rounded-full bg-[#f3e7da] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b3f1d]">
                    Winner {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#1f1424]">
                    {winner.projectTitle}
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1f1424] text-white shadow-sm">
                  <PdfIcon />
                </div>
              </div>

              <div className="mt-5 grid gap-3 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">Researcher:</span> {winner.name}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Institution:</span> {winner.institution}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Theme:</span> {winner.theme}
                </p>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">{winner.summary}</p>

              <div className="mt-6 flex flex-wrap gap-3 pt-2">
                <Link
                  href={winner.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1424] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#32203a]"
                >
                  View PDF
                </Link>
                <a
                  href={winner.pdfUrl}
                  download
                  className="inline-flex items-center justify-center rounded-full border border-[#1f1424]/15 px-4 py-2.5 text-sm font-medium text-[#1f1424] transition hover:border-[#1f1424]/30 hover:bg-[#1f1424]/5"
                >
                  Download PDF
                </a>
              </div>
            </article>
          ))}
        </section>

      </div>
    </main>
  );
}
