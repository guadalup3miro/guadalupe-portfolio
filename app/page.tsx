import Hero from "@/components/hero";
import SectionTabs from "@/components/section-tabs";
import WorkRows from "@/components/work-rows";
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
      {/* Zero-height marker Header watches (by id) to know when the dark
          section has scrolled up underneath it, so it can swap from a
          clear bar to a solid black one right at this boundary. */}
      <div id="dark-section-start" />
      {/* #work wraps the tabs too (not just WorkRows) so the "Work" nav
          link lands with the selector visible, not scrolled past it.
          scroll-mt-16 offsets for the sticky 64px header so the tabs don't
          land tucked underneath it. */}
      <div id="work" className="scroll-mt-16">
        <SectionTabs active="product" />
        <WorkRows projects={caseStudies} />
      </div>
    </>
  );
}
