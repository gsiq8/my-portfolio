import { Hero } from "@/components/portfolio/Hero";
import { PathNav } from "@/components/portfolio/PathNav";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { SITE_NAME } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <LanguageToggle />
      <Hero name={SITE_NAME} />
      <PathNav />
    </main>
  );
}
