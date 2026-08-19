import { NotionPathLayout } from "@/components/portfolio/NotionPathLayout";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { getPathData } from "@/data/paths";

export default function SoftwarePage() {
  const { label, achievements, projects } = getPathData("software");
  return (
    <>
      <LanguageToggle />
      <NotionPathLayout pathKey="software" label={label} achievements={achievements} projects={projects} />
    </>
  );
}
