import type { Metadata } from "next";
import Link from "next/link";
import ProjectGrid from "@/components/project-grid";
import GraphicDesignColorCycle from "@/components/graphic-design-color-cycle";
import SectionTabs from "@/components/section-tabs";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Graphic design & branding — Guadalupe Miró",
  description:
    "Branding, editorial, and collage work by Guadalupe Miró.",
};

export default function GraphicDesignPage() {
  const galleryProjects = projects.filter((project) => project.kind === "gallery");

  return (
    <div className="flex flex-1 flex-col">
      <GraphicDesignColorCycle />
      {/* Fixed full-viewport layer, not a normal-flow background — this is
          what lets the cream show through the transparent sticky header
          even before you've scrolled (the header sits earlier in the DOM
          than this page's own content, so a background on the content
          itself doesn't reach behind it). */}
      <div className="fixed inset-0 -z-10 bg-cream" aria-hidden />
      <section className="mx-auto w-full max-w-7xl px-6 pt-[180px] pb-[156px] sm:px-10">
        <h1 className="max-w-[728px] text-[32px] font-normal leading-tight tracking-tight text-coral">
          Before{" "}
          <Link
            href="/"
            className="font-medium transition-[font-style] duration-300 hover:italic"
          >
            product design
          </Link>{" "}
          was cool, graphic design kept me busy. These days: interfaces by
          day, collage whenever the karma needs balancing.
        </h1>
      </section>
      {/* id="work" + scroll-mt-16 mirrors app/page.tsx — the "Product
          UX-UI" tab (and the header's Work link) both jump straight to
          this point, not the top of the page, so switching tabs feels
          seamless in both directions. */}
      <div id="work" className="scroll-mt-16">
        <SectionTabs active="visual" tone="coral" />
        <ProjectGrid projects={galleryProjects} masonry />
      </div>
    </div>
  );
}
