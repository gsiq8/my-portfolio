"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";
import type { LocalizedString } from "@/data/types";

export function CtaSection({
  heading,
  subheading,
  phonePlaceholder,
}: {
  heading: LocalizedString;
  subheading: LocalizedString;
  phonePlaceholder: string;
}) {
  const { localize } = useLanguage();
  const whatsappHref = `https://wa.me/${phonePlaceholder.replace(/\D/g, "")}`;

  return (
    <section className="bg-neutral-900 pt-15 pb-12 text-center text-white">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">{localize(heading)}</h2>
        <h3 className="mt-4 text-lg text-neutral-200">{localize(subheading)}</h3>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] transition hover:brightness-110"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.482 1.34 4.995L2 22l5.116-1.34a9.96 9.96 0 0 0 4.888 1.28h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.182-2.929-7.071A9.938 9.938 0 0 0 12.004 2.003zm0 18.166h-.003a8.32 8.32 0 0 1-4.238-1.161l-.304-.18-3.038.797.811-2.962-.198-.304a8.318 8.318 0 0 1-1.276-4.437c0-4.6 3.744-8.343 8.35-8.343 2.23 0 4.326.87 5.903 2.448a8.29 8.29 0 0 1 2.443 5.9c-.002 4.6-3.746 8.242-8.45 8.242z" />
          </svg>
        </a>
        <p className="mt-3 font-mono text-sm text-neutral-400">Whatsapp</p>
      </Container>
    </section>
  );
}
