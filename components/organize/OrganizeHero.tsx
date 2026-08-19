"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";
import type { LocalizedString } from "@/data/types";

export function OrganizeHero({ title, subtitle }: { title: LocalizedString; subtitle: LocalizedString }) {
  const { localize } = useLanguage();

  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden py-24 text-center">
      <Image src="/images/organize/closet_thassia.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative z-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{localize(title)}</h1>
        <p className="mt-4 text-lg text-neutral-200">{localize(subtitle)}</p>
      </Container>
    </section>
  );
}
