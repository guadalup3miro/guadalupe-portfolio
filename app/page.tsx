import Hero from "@/components/hero";
import SectionTabs from "@/components/section-tabs";
import HomeProjectRows from "@/components/home-project-rows";
import { homeProjects } from "@/lib/home-projects";

export default function Home() {
  return (
    <>
      <Hero />
      {/* #work wraps the tabs too (not just the rows) so the "Work" nav
          link lands with the selector visible, not scrolled past it.
          scroll-mt-16 offsets for the sticky 64px header so the tabs don't
          land tucked underneath it. */}
      <div id="work" className="scroll-mt-16">
        <SectionTabs active="product" />
        <HomeProjectRows projects={homeProjects} />
      </div>
    </>
  );
}
