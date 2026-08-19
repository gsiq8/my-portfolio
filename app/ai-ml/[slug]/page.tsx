import { notFound } from "next/navigation";
import { getPathData, getProject } from "@/data/paths";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { BackLink } from "@/components/portfolio/BackLink";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Container } from "@/components/ui/Container";

export function generateStaticParams() {
  return getPathData("ai-ml").projects.map((p) => ({ slug: p.slug }));
}

export default async function AiMlProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject("ai-ml", slug);
  if (!project) notFound();

  return (
    <>
      <LanguageToggle />
      <Container className="max-w-3xl py-16">
        <BackLink href="/ai-ml" label={getPathData("ai-ml").label} />
        <div className="mt-6">
          <ProjectDetail project={project} />
        </div>
      </Container>
    </>
  );
}
