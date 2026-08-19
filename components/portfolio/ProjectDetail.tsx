"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Project } from "@/data/types";

export function ProjectDetail({ project }: { project: Project }) {
  const { localize } = useLanguage();
  const body = localize(project.body);

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
      <div className="mt-8 space-y-4 text-neutral-800">
        {body.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
