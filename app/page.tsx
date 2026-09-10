import Hero from "@/components/hero";
import SectionTabs from "@/components/section-tabs";
import ProjectGrid from "@/components/project-grid";
import { projects } from "@/lib/projects";

export default function Home() {
  // Only show case studies that actually have a thumbnail — pura-mente and
  // caminos-de-la-villa are still "coming soon" placeholders, hidden from
  // the homepage until there's real work to show.
  const caseStudies = projects.filter(
    (project) => project.kind === "case-study" && project.thumbnail,
  );

  return (
    <>
      <Hero />
      {/* #work wraps the tabs too (not just the grid) so the "Work" nav
          link lands with the selector visible, not scrolled past it.
          scroll-mt-16 offsets for the sticky 64px header so the tabs don't
          land tucked underneath it. */}
      <div id="work" className="scroll-mt-16">
        <SectionTabs active="product" />
        <ProjectGrid projects={caseStudies} />
      </div>
    </>
  );
}
