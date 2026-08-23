import type { PathKey, PathPageData, Project } from "./types";

const PLACEHOLDER_THUMBNAIL = "/images/portfolio/placeholder.svg";

function sampleProject(pathLabel: string): Project {
  return {
    slug: "sample-project",
    title: {
      en: `[Sample ${pathLabel} project — replace me]`,
      pt: `[Projeto de exemplo em ${pathLabel} — substituir]`,
    },
    description: {
      en: "One or two sentences describing the project, shown in the gallery card.",
      pt: "Uma ou duas frases descrevendo o projeto, exibidas no card da galeria.",
    },
    thumbnail: PLACEHOLDER_THUMBNAIL,
    body: {
      en: "Full write-up of the project goes here. Replace with real content, screenshots, and links.",
      pt: "O texto completo do projeto vai aqui. Substitua com conteúdo real, imagens e links.",
    },
    date: "2026-01-01",
  };
}

export const paths: Record<PathKey, PathPageData> = {
  data: {
    key: "data",
    label: { en: "Data", pt: "Dados" },
    achievements: [
      {
        title: { en: "[Sample certification — replace me]", pt: "[Certificação de exemplo — substituir]" },
        issuer: "Issuer",
        date: "2026-01",
      },
    ],
    projects: [
      {
        slug: "water-quality-etl",
        title: {
          pt: "Qualidade de Água do Brasil",
          en: "Tap Water Quality in Brazil",
        },
        description: {
          pt: "Do ETL à Análise",
          en: "From ETL to Analysis",
        },
        thumbnail: PLACEHOLDER_THUMBNAIL,
        body: {
          pt: "[Substituir pelo texto completo do projeto.]",
          en: "[Replace with the full project write-up.]",
        },
        date: "2026-08-23",
        tags: ["ETL", "Python", "SQL", "Docker", "Airflow", "DAG", "Looker/Data Studio"],
        links: [{ label: "Github", href: "https://github.com/gsiq8/water-quality-etl" }],
        embedUrl: "https://datastudio.google.com/embed/reporting/9566a935-9d1d-4989-a18b-c06326769e8c/page/yp86F",
      },
      sampleProject("Data"),
    ],
  },
  software: {
    key: "software",
    label: { en: "Software", pt: "Software" },
    achievements: [
      {
        title: { en: "[Sample certification — replace me]", pt: "[Certificação de exemplo — substituir]" },
        issuer: "Issuer",
        date: "2026-01",
      },
    ],
    projects: [sampleProject("Software")],
  },
  "ai-ml": {
    key: "ai-ml",
    label: { en: "AI / ML", pt: "IA / ML" },
    achievements: [
      {
        title: { en: "[Sample certification — replace me]", pt: "[Certificação de exemplo — substituir]" },
        issuer: "Issuer",
        date: "2026-01",
      },
    ],
    projects: [sampleProject("AI/ML")],
  },
  growth: {
    key: "growth",
    label: { en: "Growth", pt: "Growth" },
    achievements: [
      {
        title: { en: "[Sample certification — replace me]", pt: "[Certificação de exemplo — substituir]" },
        issuer: "Issuer",
        date: "2026-01",
      },
    ],
    projects: [sampleProject("Growth")],
  },
  fin: {
    key: "fin",
    label: { en: "Finance", pt: "Finanças" },
    achievements: [
      {
        title: { en: "[Sample certification — replace me]", pt: "[Certificação de exemplo — substituir]" },
        issuer: "Issuer",
        date: "2026-01",
      },
    ],
    projects: [sampleProject("Finance")],
  },
};

export function getPathData(key: PathKey): PathPageData {
  return paths[key];
}

export function getProject(key: PathKey, slug: string): Project | undefined {
  return paths[key].projects.find((p) => p.slug === slug);
}
