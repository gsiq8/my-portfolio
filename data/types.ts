export type PathKey = "data" | "software" | "ai-ml" | "growth" | "fin";
export type Locale = "en" | "pt";

export interface LocalizedString {
  en: string;
  pt: string;
}

export interface Achievement {
  title: LocalizedString;
  issuer: string;
  date: string;
  link?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  thumbnail: string;
  body: LocalizedString;
  date: string;
  tags?: string[];
  links?: ProjectLink[];
  embedUrl?: string;
}

export interface PathPageData {
  key: PathKey;
  label: LocalizedString;
  achievements: Achievement[];
  projects: Project[];
}
