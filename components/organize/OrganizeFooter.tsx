"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";
import type { LocalizedString } from "@/data/types";

export function OrganizeFooter({ date }: { date: LocalizedString}) {
  const { localize } = useLanguage();

  return (
    <footer className="bg-neutral-900 py-4">
      <Container className="flex items-center justify-end">
        <p className=" text-sm text-white m-4">{localize(date)}</p>
        <Image
          src="/images/organize/organize_white.png"
          alt="Organize"
          width={160}
          height={107}
          className="m-4 h-10 w-auto object-contain"
        />
      </Container>
    </footer>
  );
}
