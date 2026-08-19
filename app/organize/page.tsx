import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { OrganizeNav } from "@/components/organize/OrganizeNav";
import { OrganizeHero } from "@/components/organize/OrganizeHero";
import { ProcessStages } from "@/components/organize/ProcessStages";
import { BeforeAfterGallery } from "@/components/organize/BeforeAfterGallery";
import { CtaSection } from "@/components/organize/CtaSection";
import { OrganizeFooter } from "@/components/organize/OrganizeFooter";
import { organizeCopy } from "@/data/organize-copy";

export default function OrganizeLandingPage() {
  return (
    <main>
      <OrganizeNav />
      <LanguageToggle />
      <OrganizeHero title={organizeCopy.hero.title} subtitle={organizeCopy.hero.subtitleOptions[0]} />
      <ProcessStages stages={organizeCopy.stages} />
      <BeforeAfterGallery title={organizeCopy.beforeAfter.title} examples={organizeCopy.beforeAfter.examples} />
      <CtaSection
        heading={organizeCopy.cta.heading}
        subheading={organizeCopy.cta.subheading}
        phonePlaceholder={organizeCopy.cta.phonePlaceholder}
      />
      <OrganizeFooter date={organizeCopy.footer.date} />
    </main>
  );
}
