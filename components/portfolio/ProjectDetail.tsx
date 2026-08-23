"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ContentBlocks } from "./ContentBlocks";
import type { Project } from "@/data/types";

export function ProjectDetail({ project }: { project: Project }) {
  const { localize } = useLanguage();

  return (
    <article>
      <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
        <Image src={project.thumbnail} alt="" fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
      </div>
      <h1 className="text-3xl font-semibold tracking-tight">{localize(project.title)}</h1>
      <p className="mt-2 text-sm text-neutral-500">
        {project.date}
        {project.tags && project.tags.length > 0 ? ` · ${project.tags.join(", ")}` : ""}
      </p>

      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-medium hover:bg-neutral-50"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}

      <div className="mt-8">
        <ContentBlocks blocks={project.body} />
      </div>
    </article>
  );
}
