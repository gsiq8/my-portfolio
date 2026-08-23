"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { datetime } from "@/lib/formatDate";
import { ContentBlocks } from "./ContentBlocks";
import type { Project } from "@/data/types";


export function ProjectDetail({ project }: { project: Project }) {
  const { localize, locale } = useLanguage();

  return (
    <article>
      <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
        <Image src={project.thumbnail} alt="" fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
      </div>
      <p className="mt-2 text-sm font-sans capitalize text-neutral-500">
        {datetime(project.date, locale)}
      </p>
      <h1 className="mt-8 text-3xl font-semibold font-sans tracking-tight">{localize(project.title)}</h1>
      <h2 className="mt-1 text-2xl font-light font-sans text-neutral-700 tracking-tight">{localize(project.description)}</h2>
      
      <p className="mt-2 text-sm font-mono uppercase text-neutral-500">
        {project.tags && project.tags.length > 0 ? `${project.tags.join(" • ")}` : ""}
      </p>
      {project.links && project.links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-300 px-3 py-1 text-sm font-medium hover:bg-neutral-50"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}

     

      <div className="mt-8 font-sans text-neutral-200">
        <ContentBlocks blocks={project.body} />
      </div>
    </article>
  );
}
