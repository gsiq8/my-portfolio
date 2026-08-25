import type { LocalizedString } from "./types";

export interface AboutContent {
  name: string;
  photo: string;
  bio: LocalizedString[];
  links: { label: string; href: string }[];
}

export const about: AboutContent = {
  name: "Siquieroli",
  photo: "/images/portfolio/placeholder.svg",
  bio: [
    {
      en: "[Sample bio paragraph — replace with your real bio.]",
      pt: "[Parágrafo de exemplo — substitua pela sua bio real.]",
    },
  ],
  links: [
    { label: "Email", href: "contact@siquieroli.com" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};
