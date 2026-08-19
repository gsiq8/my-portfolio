"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className="fixed right-4 top-4 z-50 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm shadow-sm backdrop-blur"
      aria-label={t("language")}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={locale === "en" ? "font-semibold text-neutral-900 underline" : "text-neutral-500 hover:text-neutral-800"}
      >
        EN
      </button>
      <span className="text-neutral-300">/</span>
      <button
        type="button"
        onClick={() => setLocale("pt")}
        className={locale === "pt" ? "font-semibold text-neutral-900 underline" : "text-neutral-500 hover:text-neutral-800"}
      >
        PT
      </button>
    </div>
  );
}
