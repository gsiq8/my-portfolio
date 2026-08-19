"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { AchievementsList } from "./AchievementsList";
import { ProjectGalleryItem } from "./ProjectGalleryItem";
import type { Achievement, PathKey, Project, LocalizedString } from "@/data/types";
import { Container } from "@/components/ui/Container";

interface NotionPathLayoutProps {
  pathKey: PathKey;
  label: LocalizedString;
  achievements: Achievement[];
  projects: Project[];
}

export function NotionPathLayout({ pathKey, label, achievements, projects }: NotionPathLayoutProps) {
  const { localize } = useLanguage();

  return (
    <Container className="max-w-5xl py-16">
      <h1 className="mb-10 text-3xl font-semibold tracking-tight">{localize(label)}</h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <AchievementsList achievements={achievements} />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          {projects.map((project) => (
            <ProjectGalleryItem key={project.slug} project={project} pathKey={pathKey} />
          ))}
        </div>
      </div>
    </Container>
  );
}
