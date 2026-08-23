import type { Locale } from "@/data/types";

const translations = {
  en: {
    achievements: "Achievements",
    backTo: "Back to",
    home: "Home",
    contact: "Contact",
    resume: "Resume",
    language: "Language",
    published: "Published",
    updated: "Updated",
  },
  pt: {
    achievements: "Conquistas",
    backTo: "Voltar para",
    home: "Início",
    contact: "Contato",
    resume: "Currículo",
    language: "Idioma",
    published: "Publicado",
    updated: "Atualizado",
  },
} satisfies Record<Locale, Record<string, string>>;

export type TranslationKey = keyof (typeof translations)["en"];

export function translate(locale: Locale, key: TranslationKey): string {
  return translations[locale][key];
}
