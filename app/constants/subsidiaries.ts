export type Subsidiary = {
  name: string;
  tagline: string;
  description: string;
  website_link: string;
  image_path: string;
  icon_path: string;
  features: string[];
  focus_areas: string[];
};

export const SUBSIDIARIES: Subsidiary[] = [
  {
    name: "Genomac Institute Inc.",
    tagline: "Education & Research Excellence",
    description:
      "Leading biotechnology research and bioinformatics education platform serving over 100,000 scientists across 100+ countries.",
    website_link: "https://genomachub.com",
    image_path: "../../assets/subsidiaries/genomac-institute.png",
    icon_path: "../../assets/icons/brain.svg",
    features: [
      "Courses & Workshops in Genomics",
      "Bootcamps & Internships",
      "Research-to-Publication Programs",
      "Certificate & Diploma Programs",
      "AI-Powered Bioinformatics Training",
    ],
    focus_areas: ["Education", "Research", "Genomics", "Bioinformatics", "AI"],
  },
  {
    name: "Genomac Innovation Hub",
    tagline: "Incubation & Venture Building",
    description:
      "Africa’s premier biotechnology and health tech incubator, accelerating startups from ideation to market.",
    website_link: "https://genomac.io",
    image_path: "../../assets/subsidiaries/g-ihub.png",
    icon_path: "../../assets/icons/light-bulb.svg",
    features: [
      "Startup Incubation Programs",
      "Venture Studio Services",
      "Product Commercialization",
      "Technology Transfer",
      "Innovation Management",
    ],
    focus_areas: ["Incubation", "Health Tech", "Biotech Startups", "Commercialization"],
  },
  {
    name: "G-Nature",
    tagline: "Herbal Therapeutics & Nutrigenomics",
    description:
      "Translational plant genomics and evidence-based herbal products for sustainable health and wellness.",
    website_link: "https://gnatures.com",
    image_path: "../../assets/subsidiaries/g-natures.png",
    icon_path: "../../assets/icons/leaf.svg",
    features: [
      "Diabetes Therapy Solutions",
      "Hemorrhoids Treatment",
      "Digestive Wellness products",
      "Natural Skincare Line",
      "Nutrigenomics Research",
    ],
    focus_areas: ["Plant Genomics", "Herbal Medicine", "Natural Products", "Sustainability"],
  },
  {
    name: "Genomac Services & Consult (GSC)",
    tagline: "Education & Research Excellence",
    description:
      "Corporate consulting and personalized healthcare solutions for laboratories, universities, NGOs and individuals.",
    website_link: "https://genomac.services",
    image_path: "../../assets/subsidiaries/GSC.png",
    icon_path: "../../assets/icons/people2.svg",
    features: [
      "Corporate Consulting Services",
      "Personalized Healthcare Solutions",
      "Research Support & Strategy",
      "Laboratory Setup & Optimization",
      "University Partnership Programs",
    ],
    focus_areas: ["Education", "Research", "Genomics", "Bioinformatics", "AI"],
  },
  {
    name: "Genomac Labs",
    tagline: "Precision Medicine & Genomic Diagnostics",
    description:
      "Advanced diagnostic service using PCR technology with plans to expand into next-generation sequencing.",
    website_link: "https://genomaclabs.com",
    image_path: "../../assets/subsidiaries/genomac-labs.png",
    icon_path: "../../assets/icons/tube.svg",
    features: [
      "Genetic Risk Prediction Panels",
      "Precision Medicine Diagnostics",
      "Genetic Counseling Services",
      "Preventive Health Reports",
      "Pharmacogenomics Testing",
    ],
    focus_areas: ["Precision Medicine", "Diagnostics", "PCR", "Genomic Testing"],
  },
];

export default SUBSIDIARIES;
