import { NotionPathLayout } from "@/components/portfolio/NotionPathLayout";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { getPathData } from "@/data/paths";

export default function AiMlPage() {
  const { label, achievements, projects } = getPathData("ai-ml");
  return (
    <>
      <LanguageToggle />
      <NotionPathLayout pathKey="ai-ml" label={label} achievements={achievements} projects={projects} />
    </>
  );
}
