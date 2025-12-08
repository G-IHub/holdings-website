import type { StaticImageData } from "next/image";
import genomacLabsImg from "../../assets/investor-rel/genomac-labs.png";
import omicsboardImg from "../../assets/investor-rel/omicsboard.png";
import gnaturesImg from "../../assets/investor-rel/gnatures.png";

export interface InvestmentOpportunity {
  id: string;
  title: string;
  image: StaticImageData;
  problem: string;
  solution: string;
  marketOpportunity: string[];
  link: string;
}

export const investmentOpportunities: InvestmentOpportunity[] = [
  {
    id: "genomac-labs",
    title: "Genomac Labs — Precision Medicine Expansion",
    image: genomacLabsImg,
    problem:
      "Africa faces a critical shortage of genomic diagnostics, with most patients lacking access to genetic testing, early cancer detection, and preventive health screening.",
    solution:
      "Genomac Labs provides advanced genomic diagnostic services including qPCR-based cancer risk testing and precision health screening with a rollout strategy across major African cities.",
    marketOpportunity: [
      "TAM (Global Precision Medicine Market): $98B in 2024, projected to grow to $242B by 2032.",
      "SAM (Africa Precision Diagnostics Market): $3.2B annually.",
      "SOM (Nigeria + Ghana + Kenya first-stage rollout): $150M accessible cluster.",
      "Projected 2–5 year capture: 1–3 percent of SOM (~$1.5M–$4.5M)."
    ],
    link: "/docs/genomac-labs-pitchdeck.pdf"
  },

  {
    id: "omicsboard-gihub",
    title: "Omicsboard (G-iHub) — Digital Research and Innovation Infrastructure",
    image: omicsboardImg,
    problem:
      "Most African universities, labs, and research institutions lack digital research infrastructure, virtual labs, AI-powered tools, and modern systems for genomics and biotechnology.",
    solution:
      "Omicsboard is a next-generation digital research and innovation infrastructure platform integrating virtual labs, AI-assisted workflows, scientific training systems, and enterprise biotech capabilities.",
    marketOpportunity: [
      "TAM (Global Bioinformatics & Research Software Market): $15B in 2024, projected to reach $38B by 2032.",
      "SAM (Africa’s digital research education and infrastructure market): $1.1B.",
      "SOM (Nigeria, Kenya, South Africa academic institutions): $120M accessible cluster.",
      "Projected 2–5 year capture: 2–5 percent of SOM (~$2.4M–$6M)."
    ],
    link: "/docs/omicsboard-pitchdeck.pdf"
  },

  {
    id: "g-natures-dihemcare",
    title: "G-NATURES — DihemCare Herbal Capsule for Diabetes and Hemorrhoids",
    image: gnaturesImg,
    problem:
      "Millions of Africans suffer from diabetes and hemorrhoids with limited access to safe, affordable, and scientifically validated natural therapeutic options.",
    solution:
      "DihemCare is a scientifically developed herbal and nutrigenomics solution targeting diabetes management and hemorrhoid relief, backed by modern research and scalable commercialization.",
    marketOpportunity: [
      "TAM (Global Herbal Medicine Market): $210B in 2024, projected to grow to $345B by 2032.",
      "SAM (Africa’s herbal and nutraceutical market): $18B.",
      "SOM (Nigeria diabetic and hemorrhoid therapeutic cluster): $1.2B.",
      "Projected 2–5 year capture: 0.5–2 percent (~$6M–$24M)."
    ],
    link: "/docs/g-natures-pitchdeck.pdf"
  }
];
