import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

// Full-bleed black section, one big row per case study — text and image
// side by side, alternating which side the text sits on as you go down
// the page. Replaces the old uniform 2-column card grid on the homepage.
// Tags are always visible here (not hover-gated), since there's no hover
// overlay to sync them with anymore.
export default function WorkRows({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="w-full bg-[#1A1A1A] py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-32 px-6 sm:gap-40 sm:px-10">
        {projects.map((project, index) => {
          const handle = project.slug.replace(/-/g, "");
          const tagsLine = project.tags.join(" · ").toUpperCase();
          const reversed = index % 2 === 1;
          const isGif = project.thumbnail?.toLowerCase().endsWith(".gif") ?? false;

          const textBlock = (
            <div className="flex flex-1 flex-col justify-start">
              <p className="max-w-xl text-[30px] font-normal leading-tight text-white sm:text-[48px]">
                {project.hype} @{handle}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-white/50">
                {tagsLine}
              </p>
            </div>
          );

          // 3:2 matches the actual thumbnail files (2400×1600 / 1200×800) —
          // they were 4:3 before, which is narrower than the real images
          // and cropped their sides via object-cover.
          const imageBlock = (
            <div className="w-full sm:w-[656px] sm:flex-none">
              {project.thumbnail ? (
                // No shadow-2xl: the thumbnails' own background is already
                // #1A1A1A (same as this section), so a drop shadow just
                // adds a soft dark rim outside the rounded corners that
                // reads as a mismatched seam instead of blending in.
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(min-width: 640px) 656px, 100vw"
                    unoptimized={isGif}
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[3/2] w-full items-center justify-center rounded-lg border border-white/20 text-sm text-white/40">
                  Coming soon
                </div>
              )}
            </div>
          );

          const rowClass = `flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-16 ${
            reversed ? "sm:flex-row-reverse" : ""
          }`;

          if (!project.thumbnail) {
            return (
              <div key={project.slug} className={rowClass}>
                {textBlock}
                {imageBlock}
              </div>
            );
          }

          return (
            <Link key={project.slug} href={`/work/${project.slug}`} className={`group ${rowClass}`}>
              {textBlock}
              {imageBlock}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
