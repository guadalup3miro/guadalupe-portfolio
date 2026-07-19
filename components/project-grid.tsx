"use client";

import { useState } from "react";
import { projects, projectTags, type ProjectTag } from "@/lib/projects";
import TagFilter from "@/components/tag-filter";
import ProjectCard from "@/components/project-card";

export default function ProjectGrid() {
  const [active, setActive] = useState<ProjectTag | "All">("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(active));

  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-24 sm:px-10">
      <TagFilter tags={projectTags} active={active} onChange={setActive} />

      {filtered.length > 0 ? (
        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-muted">More coming soon.</p>
      )}
    </section>
  );
}
