"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { useEffect, useState } from "react";

export interface BeforeAfterSliderProps {
  images: string[];
  caption: string;
  isPlaceholder?: boolean;
}

export function BeforeAfterSlider({ images, caption, isPlaceholder }: BeforeAfterSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const [selectedSnap, setSelectedSnap] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const goTo = (index: number) => emblaApi?.scrollTo(index);
  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const setupSnaps = (api: EmblaCarouselType) => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
  };

  const setActiveSnap = (api: EmblaCarouselType) => {
    if (!api) return;
    setSelectedSnap(api.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;

    // Embla's recommended pattern: sync once for the initial state, then
    // subscribe to its events for updates. There's no external-store
    // equivalent for an imperative carousel instance.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveSnap(emblaApi);
    setupSnaps(emblaApi);

    emblaApi.on("reInit", setupSnaps);
    emblaApi.on("reInit", setActiveSnap);
    emblaApi.on("select", setActiveSnap);
  }, [emblaApi]);

  return (
    <div>
      <div className="relative">
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((src, i) => (
              <div key={i} className="relative w-full flex-none aspect-[3/4]">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 45vw, (min-width: 640px) 60vw, 85vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-2">
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous image"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-300 bg-white/80 hover:bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next image"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-300 bg-white/80 hover:bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`${index + 1}`}
              className={`h-2 w-2 rounded-full border border-neutral-500 transition-colors ${
                index === selectedSnap ? "bg-white" : "bg-black/50"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="mt-3 flex items-center gap-2 text-sm text-neutral-600">
        {caption}
        {isPlaceholder && (
          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">placeholder</span>
        )}
      </p>
    </div>
  );
}
