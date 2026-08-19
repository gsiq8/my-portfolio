"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { about } from "@/data/about";

export default function AboutPage() {
  const { localize, t } = useLanguage();

  return (
    <>
      <LanguageToggle />
      <Container className="max-w-2xl py-16">
        <div className="relative mb-8 h-40 w-40 overflow-hidden rounded-full bg-neutral-100">
          <Image src={about.photo} alt={about.name} fill sizes="160px" className="object-cover" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">{about.name}</h1>
        <div className="mt-6 space-y-4 text-neutral-800">
          {about.bio.map((paragraph, i) => (
            <p key={i}>{localize(paragraph)}</p>
          ))}
        </div>
        <h2 className="mt-10 mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          {t("contact")}
        </h2>
        <ul className="space-y-2">
          {about.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-neutral-800 hover:underline" target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
