"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Achievement } from "@/data/types";

export function AchievementsList({ achievements }: { achievements: Achievement[] }) {
  const { t, localize } = useLanguage();

  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">{t("achievements")}</h2>
      <ul className="space-y-4">
        {achievements.map((achievement, i) => {
          const title = localize(achievement.title);
          const content = (
            <>
              <p className="font-medium text-neutral-900">{title}</p>
              <p className="text-sm text-neutral-500">
                {achievement.issuer} · {achievement.date}
              </p>
            </>
          );
          return (
            <li key={i}>
              {achievement.link ? (
                <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
