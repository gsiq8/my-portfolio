import { notFound } from "next/navigation";
import { getPathData, getProject } from "@/data/paths";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { BackLink } from "@/components/portfolio/BackLink";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Container } from "@/components/ui/Container";

export function generateStaticParams() {
  return getPathData("software").projects.map((p) => ({ slug: p.slug }));
}

export default async function SoftwareProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject("software", slug);
  if (!project) notFound();

  return (
    <>
      <LanguageToggle />
      <Container className="max-w-3xl py-16">
        <BackLink href="/software" label={getPathData("software").label} />
        <div className="mt-6">
          <ProjectDetail project={project} />
        </div>
      </Container>
    </>
  );
}
