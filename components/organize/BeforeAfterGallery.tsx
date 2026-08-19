"use client";

import { useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import type { BeforeAfterExample } from "@/data/organize-copy";
import type { LocalizedString } from "@/data/types";

export function BeforeAfterGallery({
  title,
  examples,
}: {
  title: LocalizedString;
  examples: BeforeAfterExample[];
}) {
  const { localize } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="py-20">
      
      <Container className="max-w-5xl">
        <h2 className="text-xl tracking-tight font-semibold sm:text-2xl">{localize(title)}</h2>
        <div className="mb-3 flex justify-end">
          <div className="grid grid-cols-2 gap-x-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-300 hover:bg-neutral-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-300 hover:bg-neutral-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {examples.map((example) => (
            <div
              key={example.id}
              data-carousel-card
              className="w-[85%] flex-shrink-0 snap-center sm:w-[60%] md:w-[45%]"
            >
              <BeforeAfterSlider
                images={example.images}
                caption={localize(example.caption)}
                isPlaceholder={example.isPlaceholder}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
