export type PortfolioItem = {
  name: string;
  description: string;
  link: string;
  image_path: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    name: "Genomac Institute Inc.",
    description: "Biotechnology research and bioinformatics education platform.",
    link: "/about-us",
    image_path: "../../assets/subsidiaries/genomac-institute.png",
  },
  {
    name: "Genomac Innovation Hub (G-iHub)",
    description:
      "Incubation, venture studio, and productization of health tech & biotech startups.",
    link: "/about-us",
    image_path: "../../assets/subsidiaries/g-ihub.png",
  },
  {
    name: "G-NATURES",
    description: "Herbal products & nutrigenomics for sustainable health and wellness.",
    link: "/about-us",
    image_path: "../../assets/subsidiaries/g-natures.png",
  },
  {
    name: "Genomac Labs",
    description: "Precision medicine & genomic diagnostics through advanced testing.",
    link: "/about-us",
    image_path: "../../assets/subsidiaries/genomac-labs.png",
  },
  {
    name: "Genomac Services & Consult (GSC)",
    description: "Corporate consulting & personalized healthcare solutions.",
    link: "/about-us",
    image_path: "../../assets/subsidiaries/GSC.png",
  },
  {
    name: "Flagship Initiatives",
    description:
      "Strategic programs and platforms that extend our impact across biotechnology and health ecosystem.",
    link: "/about-us",
    image_path: "../../assets/subsidiaries/flagship-initiative.png",
  },
];

export default PORTFOLIO;
