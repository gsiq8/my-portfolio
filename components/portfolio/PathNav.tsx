"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { NAV_ITEMS } from "@/lib/constants";

export function PathNav() {
  const { localize } = useLanguage();

  return (
    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg text-neutral-600">
      {NAV_ITEMS.map((item) => (
        <Link key={item.key} href={item.href} className="hover:text-neutral-900 hover:underline underline-offset-4">
          {localize(item.label)}
        </Link>
      ))}
    </nav>
  );
}
