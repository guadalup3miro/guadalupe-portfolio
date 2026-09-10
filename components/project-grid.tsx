import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/project-card";
import { assignMasonryColumns } from "@/lib/gallery-layout";

// Tag filtering (components/tag-filter.tsx) is temporarily hidden — not
// currently used, but left in place in case it's wanted later.

export default function ProjectGrid({
  projects,
  masonry = false,
}: {
  projects: Project[];
  // True masonry: cards are packed into explicit columns server-side
  // (see lib/gallery-layout.ts) instead of relying on CSS `columns`,
  // which balances by an opaque browser heuristic and won't reliably put
  // card #2 in column #2. Packing greedily by estimated height means
  // every column starts flush at the same top line and the order still
  // reads left-to-right for at least the first row, same as a row grid,
  // while every later card slots into whichever column has room — no
  // blank space under any card.
  masonry?: boolean;
}) {
  if (projects.length === 0) {
    return (
      <section className="w-full pb-32">
        <p className="mx-auto mt-10 max-w-7xl px-6 text-sm text-muted sm:px-10">
          More coming soon.
        </p>
      </section>
    );
  }

  if (!masonry) {
    // Every card is the same 352-tall size now, so a plain CSS grid works
    // fine — no more independent per-column flow needed to dodge dead
    // space under a shorter card.
    return (
      // pt-12/14: real breathing room between the tab bar and the first
      // card row (was flush). gap-y-10: vertical gutter between card rows,
      // wider than the 16px column gutter — same airy rhythm as
      // deadpine.xyz / rominaideses.com project grids.
      <section className="w-full pb-32 pt-12 sm:pt-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-4 gap-y-10 px-6 sm:grid-cols-2 sm:px-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    );
  }

  const twoCol = assignMasonryColumns(projects, 2);
  const threeCol = assignMasonryColumns(projects, 3);

  return (
    <section className="w-full pb-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* mobile: single column, natural order — trivially gapless */}
        <div className="flex flex-col gap-4 sm:hidden">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} masonry />
          ))}
        </div>

        {/* tablet: 2-column masonry */}
        <div className="hidden gap-4 sm:flex lg:hidden">
          {twoCol.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-1 flex-col gap-4">
              {column.map(({ project, index }) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  masonry
                />
              ))}
            </div>
          ))}
        </div>

        {/* desktop: 3-column masonry */}
        <div className="hidden gap-4 lg:flex">
          {threeCol.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-1 flex-col gap-4">
              {column.map(({ project, index }) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  masonry
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
