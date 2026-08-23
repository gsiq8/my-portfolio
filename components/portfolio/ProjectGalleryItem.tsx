"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { PathKey, Project } from "@/data/types";

export function ProjectGalleryItem({ project, pathKey }: { project: Project; pathKey: PathKey }) {
  const { localize } = useLanguage();

  return (
    <Link
      href={`/${pathKey}/${project.slug}`}
      className="group flex gap-4 rounded-lg p-2 transition hover:bg-neutral-50"
    >
      <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-md bg-neutral-100">
        <Image src={project.gallery} alt="" fill sizes="128px" className="object-cover" />
      </div>
      <div className="min-w-0">
        <h3 className="font-medium text-neutral-900 group-hover:underline">{localize(project.title)}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-neutral-500">{localize(project.description)}</p>
      </div>
    </Link>
  );
}
