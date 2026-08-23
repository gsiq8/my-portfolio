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

export type ContentBlock =
  | { type: "heading"; text: LocalizedString }
  | { type: "paragraph"; text: LocalizedString }
  | { type: "embed"; url: string; title?: string }
  | { type: "image"; src: string; caption?: LocalizedString }
  | { type: "klaviyo-form"; formId: string };

export interface Project {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  thumbnail: string;
  gallery: string;
  body: ContentBlock[];
  date: string;
  tags?: string[];
  links?: ProjectLink[];
}

export interface PathPageData {
  key: PathKey;
  label: LocalizedString;
  achievements: Achievement[];
  projects: Project[];
}
