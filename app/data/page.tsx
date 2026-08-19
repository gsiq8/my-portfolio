import { NotionPathLayout } from "@/components/portfolio/NotionPathLayout";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { getPathData } from "@/data/paths";

export default function DataPage() {
  const { label, achievements, projects } = getPathData("data");
  return (
    <>
      <LanguageToggle />
      <NotionPathLayout pathKey="data" label={label} achievements={achievements} projects={projects} />
    </>
  );
}
