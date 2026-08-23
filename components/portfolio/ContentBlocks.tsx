"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { ContentBlock } from "@/data/types";

const EMBED_SANDBOX =
  "allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  const { localize } = useLanguage();

  return (
    <div className="space-y-6 text-neutral-800">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return <p key={i}>{localize(block.text)}</p>;
        }

        if (block.type === "embed") {
          return (
            <div key={i} className="overflow-hidden rounded-lg border border-neutral-200">
              <iframe
                src={block.url}
                title={block.title ?? "Embedded content"}
                className="h-[600px] w-full"
                loading="lazy"
                allowFullScreen
                sandbox={EMBED_SANDBOX}
              />
            </div>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={i}>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src={block.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
              {block.caption && (
                <figcaption className="mt-2 text-sm text-neutral-500">{localize(block.caption)}</figcaption>
              )}
            </figure>
          );
        }

        return <div key={i} className={`klaviyo-form-${block.formId}`} />;
      })}
    </div>
  );
}
