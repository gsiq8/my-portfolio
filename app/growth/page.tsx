import { NotionPathLayout } from "@/components/portfolio/NotionPathLayout";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { getPathData } from "@/data/paths";

export default function GrowthPage() {
  const { label, achievements, projects } = getPathData("growth");
  return (
    <>
      <LanguageToggle />
      <NotionPathLayout pathKey="growth" label={label} achievements={achievements} projects={projects} />
    </>
  );
}
