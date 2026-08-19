"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import type { Locale, LocalizedString } from "@/data/types";
import { translate, type TranslationKey } from "./translations";

const STORAGE_KEY = "locale";
const listeners = new Set<() => void>();

function detectLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "pt") return stored;
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getServerSnapshot(): Locale {
  return "en";
}

function setStoredLocale(next: Locale) {
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
  localize: (field: LocalizedString) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, detectLocale, getServerSnapshot);

  const value: LanguageContextValue = {
    locale,
    setLocale: setStoredLocale,
    t: (key) => translate(locale, key),
    localize: (field) => field[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
