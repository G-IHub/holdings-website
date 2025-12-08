export type PortfolioItem = {
  name: string;
  description: string;
  link: string;
  image_path: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    name: "Genomac Institute Inc.",
    description: "Driving advanced education and research in biotechnology through genomics, bioinformatics, computational biology, and scientific innovation.",
    link: "/portfolio",
    image_path: "../../assets/subsidiaries/genomac-institute.png",
  },
  {
    name: "Genomac Innovation Hub (G-iHub)",
    description:
      "Building and accelerating biotech, healthtech, and deep-tech innovation through entrepreneurship, venture incubation, and commercialization.",
    link: "/portfolio",
    image_path: "../../assets/subsidiaries/g-ihub.png",
  },
  {
    name: "G-NATURES",
    description: "Researching and commercializing herbal and nutrigenomics solutions through modern scientific innovation for sustainable health and wellness.",
    link: "/portfolio",
    image_path: "../../assets/subsidiaries/g-natures.png",
  },
  {
    name: "Genomac Labs",
    description: "Driving precision medicine and genomic diagnostics through advanced genetic testing and preventive health solutions across Africa..",
    link: "/portfolio",
    image_path: "../../assets/subsidiaries/genomac-labs.png",
  },
  {
    name: "Genomac Services & Consult (GSC)",
    description: "Delivering genomics, bioinformatics, and research services and consultation that strengthen scientific projects, innovation pipelines, and data-driven decision-making.",
    link: "/portfolio",
    image_path: "../../assets/subsidiaries/GSC.png",
  },
  {
    name: "Flagship Initiatives",
    description:
      "Omicsboard • AMRwatch Africa • Ideaspora • Healthmania.",
    link: "/portfolio",
    image_path: "../../assets/subsidiaries/flagship-initiative.png",
  },
];

export default PORTFOLIO;
