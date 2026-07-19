import type { Metadata } from "next";
import ProjectGrid from "@/components/project-grid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Graphic design & branding — Guadalupe Miró",
  description:
    "Branding, editorial, and collage work by Guadalupe Miró.",
};

export default function GraphicDesignPage() {
  const galleryProjects = projects.filter((project) => project.kind === "gallery");

  return (
    <>
      <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-16 sm:px-10 sm:pt-12">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Graphic design &amp; branding
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Branding, editorial, and collage work alongside the product design
          practice.
        </p>
      </section>
      <ProjectGrid projects={galleryProjects} />
    </>
  );
}
