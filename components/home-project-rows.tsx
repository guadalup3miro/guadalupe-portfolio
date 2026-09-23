import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import type { HomeProject } from "@/lib/home-projects";

// #666 on the #F6F5EF cream is 5.26:1 (WCAG AA). The site-wide --muted
// (#767676) only reaches 4.16:1 on cream, so it isn't used for body text here.
const GRAY = "text-[#666666]";

// Homepage "Product UX-UI" list: one row per project, text on the left
// (~40%) and a solid accent-color card on the right (~60%), same side on
// every row. Below `lg` (tablets included) the row stacks, card first. The
// whole row links to the case study; unpublished ones render the same row
// without a link.
export default function HomeProjectRows({ projects }: { projects: HomeProject[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="w-full pb-32 pt-10 sm:pt-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 sm:px-10 lg:gap-20">
        {projects.map((project) => {
          // Checked at render (server-side) so a missing export shows the
          // empty card + expected filename instead of a broken image.
          const hasImage = existsSync(path.join(process.cwd(), "public", project.image));
          const eyebrow = [project.company, project.area, project.years].join(" · ");
          const tagsLine = project.tags.join(" · ");

          const card = (
            <div
              className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl lg:order-2 lg:w-[60%] lg:flex-none"
              style={{ backgroundColor: project.accentColor }}
            >
              {hasImage ? (
                // The exports are 3:2 like the card and already carry the
                // accent background + padding, so they fill the card edge to
                // edge; overflow-hidden keeps the hover scale inside it.
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.025]">
                  <Image
                    src={project.image}
                    alt={`${project.company} product screens`}
                    fill
                    sizes="(min-width: 1280px) 720px, (min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <p className="absolute inset-0 flex items-center justify-center font-mono text-xs text-black/60">
                  public{project.image}
                </p>
              )}
            </div>
          );

          const text = (
            <div className="flex flex-col lg:order-1 lg:flex-1">
              <p className={`text-[11px] font-medium uppercase tracking-[0.12em] ${GRAY}`}>
                {eyebrow}
              </p>
              <h2 className="mt-4 max-w-[520px] text-[28px] font-normal leading-[1.15] tracking-tight text-foreground sm:text-[32px] lg:text-[40px]">
                {project.title}
              </h2>
              <p className={`mt-4 max-w-[460px] text-base leading-relaxed ${GRAY}`}>
                {project.outcome}
              </p>
              <p className={`mt-6 text-xs font-medium uppercase leading-normal tracking-wide ${GRAY}`}>
                {tagsLine}
              </p>
              {!project.published && (
                <p className="mt-6 text-xs font-medium uppercase tracking-wide text-foreground">
                  Case study coming soon
                </p>
              )}
            </div>
          );

          const rowClass = "flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16";

          if (!project.published) {
            return (
              <div key={project.slug} className={rowClass}>
                {card}
                {text}
              </div>
            );
          }

          return (
            <Link key={project.slug} href={`/work/${project.slug}`} className={`group ${rowClass}`}>
              {card}
              {text}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
