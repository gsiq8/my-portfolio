"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";
import type { ProcessStage } from "@/data/organize-copy";

export function ProcessStages({ stages }: { stages: ProcessStage[] }) {
  const { localize } = useLanguage();

  return (
    <section className="bg-neutral-50 py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {stages.map((stage, index) => (
            
            <div key={stage.key} className="rounded-lg bg-white p-10 shadow-sm hover:bg-neutral-200 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-400">
                <div className="grid auto-cols-min grid-flow-col gap-5">
                 
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold">{localize(stage.title)}</h3>
                </div>

              <p className="mt-6 text-neutral-600">{localize(stage.description)}</p>
            </div>

          ))}

        </div>
      </Container>
    </section>
  );
}
