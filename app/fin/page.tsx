import { NotionPathLayout } from "@/components/portfolio/NotionPathLayout";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { getPathData } from "@/data/paths";

export default function FinPage() {
  const { label, achievements, projects } = getPathData("fin");
  return (
    <>
      <LanguageToggle />
      <NotionPathLayout pathKey="fin" label={label} achievements={achievements} projects={projects} />
    </>
  );
}
