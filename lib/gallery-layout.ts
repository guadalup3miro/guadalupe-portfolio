import type { Project } from "@/lib/projects";
import { getPublicImageSize } from "@/lib/get-image-size";

// Shared aspect-ratio logic for gallery cards, used by both ProjectCard
// (to render the right className/style) and ProjectGrid (to estimate each
// card's height when packing columns for masonry). Keeping this in one
// place means the two can never disagree about how tall a card actually
// is. `style` (when present) takes priority over `className` — it's the
// image's real aspect ratio, read straight off the file in /public.
export function gallerySlotAspect(
  project: Project,
  index: number,
): { className: string; ratio: number; style?: { aspectRatio: string } } {
  if (project.kind === "gallery" && project.thumbnail) {
    const size = getPublicImageSize(project.thumbnail);
    if (size) {
      return {
        className: "",
        ratio: size.height / size.width,
        style: { aspectRatio: `${size.width} / ${size.height}` },
      };
    }
  }

  if (project.cardAspect) {
    if (project.cardAspect.includes("square")) {
      return { className: project.cardAspect, ratio: 1 };
    }
    const match = project.cardAspect.match(/\[(\d+)\/(\d+)\]/);
    if (match) {
      return {
        className: project.cardAspect,
        ratio: Number(match[2]) / Number(match[1]),
      };
    }
    return { className: project.cardAspect, ratio: 1 };
  }

  // Every 3rd card (by overall order) renders smaller/square, purely for
  // visual rhythm — masonry packing means it no longer needs to line up
  // with a literal grid "middle column."
  const isSmaller = index % 3 === 1;
  return isSmaller
    ? { className: "aspect-square", ratio: 1 }
    : { className: "aspect-[9/16]", ratio: 16 / 9 };
}

export type MasonryColumn = { project: Project; index: number }[];

// Greedy "shortest column gets the next item" packing, computed from known
// aspect ratios (not measured DOM heights) so it can run server-side with
// no layout shift or client JS. Because every column starts at height 0,
// the first `columnCount` items are always placed one per column in order
// — so card order still maps predictably to left-to-right position for at
// least the first row, and the rest packs tight with no leftover gaps.
export function assignMasonryColumns(
  projects: Project[],
  columnCount: number,
): MasonryColumn[] {
  const columns: { items: MasonryColumn; height: number }[] = Array.from(
    { length: columnCount },
    () => ({ items: [], height: 0 }),
  );

  projects.forEach((project, index) => {
    const { ratio } = gallerySlotAspect(project, index);
    const target = columns.reduce((min, col) =>
      col.height < min.height ? col : min,
    columns[0]);
    target.items.push({ project, index });
    // + a small fixed amount for the gap below each image (cards are now
    // image-only, no caption underneath), so tall images don't completely
    // dominate a column's running height.
    target.height += ratio + 0.08;
  });

  return columns.map((col) => col.items);
}
