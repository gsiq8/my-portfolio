import type { Locale } from "@/data/types";

export function datetime(date: string, locale: Locale): string {
  const d = new Date(`${date}T00:00:00`);

  if (locale === "pt") {
    const month = d.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
    const capitalized = month.charAt(0).toUpperCase() + month.slice(1);
    return `${capitalized} ${d.getDate()}, ${d.getFullYear()}`;
  }

  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
