import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { getVisualProject } from "@/lib/visual-projects";
import VisualProjectPage from "@/components/visual-project-page";

const builtSlugs = new Set(["ripio", "natura", "maintainx", "apaleo"]);

export function generateStaticParams() {
  return projects
    .filter((project) => !builtSlugs.has(project.slug) && !project.standalone)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getVisualProject(slug);

  if (!project) return {};

  const description = project.description.split(/(?<=[.!?])\s+/)[0];
  return {
    title: `${project.title} — Guadalupe Miró`,
    description,
    openGraph: {
      title: `${project.title} — Guadalupe Miró`,
      description,
      images: [{ url: project.hero.src, alt: project.title }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const visualProject = getVisualProject(slug);
  if (visualProject) {
    return <VisualProjectPage project={visualProject} />;
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-10">
      <Link
        href={project.kind === "gallery" ? "/graphic-design" : "/"}
        className="text-sm text-muted hover:text-foreground"
      >
        ← Back
      </Link>
      <p className="mt-8 text-sm text-muted">{project.tags.join(" · ")}</p>
      <h1 className="mt-2 text-3xl font-medium tracking-tight">
        {project.title}
      </h1>
      <p className="mt-4 max-w-md text-muted">{project.summary}</p>
      <p className="mt-10 text-sm text-muted">
        {project.kind === "case-study"
          ? "Full case study coming soon."
          : "Gallery coming soon."}
      </p>
    </section>
  );
}
