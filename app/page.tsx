import Link from "next/link";
import Hero from "@/components/hero";
import ProjectGrid from "@/components/project-grid";
import { projects } from "@/lib/projects";

export default function Home() {
  const caseStudies = projects.filter((project) => project.kind === "case-study");

  return (
    <>
      <Hero />
      <ProjectGrid projects={caseStudies} />
      <div className="mx-auto w-full max-w-5xl px-6 pb-24 sm:px-10">
        <Link
          href="/graphic-design"
          className="text-sm text-muted hover:text-foreground"
        >
          Also available: graphic design &amp; branding work →
        </Link>
      </div>
    </>
  );
}
