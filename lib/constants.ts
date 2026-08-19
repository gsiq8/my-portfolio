import type { LocalizedString, PathKey } from "@/data/types";

export const SITE_NAME = "Giovana Siquieroli";

export interface NavItem {
  key: PathKey | "about";
  label: LocalizedString;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: "data", label: { en: "Data", pt: "Dados" }, href: "/data" },
  { key: "software", label: { en: "Software", pt: "Software" }, href: "/software" },
  { key: "ai-ml", label: { en: "AI / ML", pt: "IA / ML" }, href: "/ai-ml" },
  { key: "growth", label: { en: "Growth", pt: "Growth" }, href: "/growth" },
  { key: "fin", label: { en: "Finance", pt: "Finanças" }, href: "/fin" },
  { key: "about", label: { en: "About", pt: "Sobre" }, href: "/about" },
];
