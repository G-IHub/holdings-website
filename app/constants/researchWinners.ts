export type ResearchWinner = {
  name: string;
  projectTitle: string;
  institution: string;
  summary: string;
  pdfUrl: string;
  theme: string;
};

const RESEARCH_WINNERS: ResearchWinner[] = [
  {
    name: "Winner 01",
    projectTitle: "Project Title Goes Here",
    institution: "Institution Name",
    summary: "Replace this with a short summary of the research work and its main finding.",
    pdfUrl: "/research-winners/test.pdf",
    theme: "Genomics",
  },
  {
    name: "Winner 02",
    projectTitle: "Project Title Goes Here",
    institution: "Institution Name",
    summary: "Replace this with a short summary of the research work and its main finding.",
    pdfUrl: "/research-winners/test.pdf",
    theme: "Biotechnology",
  },
  {
    name: "Winner 03",
    projectTitle: "Project Title Goes Here",
    institution: "Institution Name",
    summary: "Replace this with a short summary of the research work and its main finding.",
    pdfUrl: "/research-winners/test.pdf",
    theme: "Healthcare",
  },
  {
    name: "Winner 04",
    projectTitle: "Project Title Goes Here",
    institution: "Institution Name",
    summary: "Replace this with a short summary of the research work and its main finding.",
    pdfUrl: "/research-winners/test.pdf",
    theme: "Innovation",
  },
  {
    name: "Winner 05",
    projectTitle: "Project Title Goes Here",
    institution: "Institution Name",
    summary: "Replace this with a short summary of the research work and its main finding.",
    pdfUrl: "/research-winners/test.pdf",
    theme: "Discovery",
  },
];

export default RESEARCH_WINNERS;
