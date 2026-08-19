"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { LocalizedString } from "@/data/types";

export function BackLink({ href, label }: { href: string; label: LocalizedString }) {
  const { t, localize } = useLanguage();

  return (
    <Link href={href} className="text-sm text-neutral-500 hover:text-neutral-900 hover:underline">
      ← {t("backTo")} {localize(label)}
    </Link>
  );
}
