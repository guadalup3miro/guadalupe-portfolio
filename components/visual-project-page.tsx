import Image from "next/image";
import type {
  VisualProject,
  VisualProjectImage,
  VisualProjectMediaItem,
} from "@/lib/visual-projects";
import { isVideoItem } from "@/lib/visual-projects";
import VideoEmbed from "@/components/video-embed";
import NaturalImageGrid from "@/components/natural-image-grid";

// One shared landing template for every /graphic-design project — a hero
// (the first image in the project's `images` array, pulled out of the
// gallery so it isn't shown twice), a title + metadata block, a short
// paragraph, then a gallery
// that mixes full-width images with 2-up pairs. Every project supplies its
// own background/text color pair via `project` (see lib/visual-projects.ts)
// so the look changes per project without touching this file.
// Structure modeled on estudionuar.com/project/el-colmo-packaging (data
// organization only — not its white background).

// A block is 1 image (full width), 2 (2-up), or 3 (3-up) — rendered as an
// N-column grid. Row sizes come from position in the (already PDF-ordered)
// array so page order can never get scrambled by a layout choice, with two
// per-project overrides in lib/visual-projects.ts:
//   - `galleryGroups`: an explicit prefix of row sizes (e.g. [1, 3] for "one
//     full-width image, then the next 3 side by side") — anything left over
//     after the prefix falls back to the default alternation below.
//   - `gallerySeamless`: every image full width, stacked with zero gap
//     between them (no pairing at all) — a continuous scroll of images.
// With neither set, the default rhythm alternates full, pair, full, pair,
// ... falling back to full for a trailing odd image.
//
// A video (see VisualProjectVideo) never shares a row — whatever grouping
// produced above gets it, any block containing one is split back into
// single-item (full-width) blocks first.
function groupImages(
  items: VisualProjectMediaItem[],
  groups?: number[],
): VisualProjectMediaItem[][] {
  const raw: VisualProjectMediaItem[][] = [];
  let i = 0;
  for (const size of groups ?? []) {
    if (i >= items.length) break;
    raw.push(items.slice(i, i + size));
    i += size;
  }
  let wantsPair = false;
  while (i < items.length) {
    if (wantsPair && items[i + 1]) {
      raw.push([items[i], items[i + 1]]);
      i += 2;
    } else {
      raw.push([items[i]]);
      i += 1;
    }
    wantsPair = !wantsPair;
  }

  const blocks: VisualProjectMediaItem[][] = [];
  for (const block of raw) {
    if (block.length > 1 && block.some(isVideoItem)) {
      block.forEach((item) => blocks.push([item]));
    } else {
      blocks.push(block);
    }
  }
  return blocks;
}

const GRID_COLS_CLASS: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
};

function mediaKey(item: VisualProjectMediaItem): string {
  return isVideoItem(item) ? `video-${item.vimeoId}` : item.src;
}

// Renders one media item full-width in its row. A video manages its own
// responsive 16:9 wrapper (VideoEmbed) and ignores `aspectClass` — an image
// gets the aspect-ratio crop box the caller asked for.
function Media({
  item,
  aspectClass,
  sizes,
  alt,
}: {
  item: VisualProjectMediaItem;
  aspectClass: string;
  sizes: string;
  alt: string;
}) {
  if (isVideoItem(item)) {
    return <VideoEmbed vimeoId={item.vimeoId} background={item.background} />;
  }
  if (item.noCrop) {
    return (
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
      >
        <Image src={item.src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return (
    <div className={`relative w-full overflow-hidden ${aspectClass}`}>
      <Image src={item.src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export default function VisualProjectPage({ project }: { project: VisualProject }) {
  const naturalGrid = project.galleryNaturalGrid ?? false;
  const services = project.metadata.find((item) => item.label === "Services")?.value ?? "Visual design";
  const galleryAltPrefix = `${project.title} — ${services}`;
  const naturalGridCols = project.galleryNaturalGridCols ?? 2;
  const seamless = !naturalGrid && (project.gallerySeamless ?? false);

  // Hero = the first image (skipping a leading video, e.g. hedwig's), taken
  // out of the gallery. When it's item 0, the first `galleryGroups` row
  // gives up one slot too, so the rest of the explicit rhythm stays aligned.
  const heroIndex = project.images.findIndex((item) => !isVideoItem(item));
  const hero =
    heroIndex >= 0 ? (project.images[heroIndex] as VisualProjectImage) : undefined;
  const galleryItems = project.images.filter((_, i) => i !== heroIndex);
  const galleryGroups =
    heroIndex === 0 && project.galleryGroups
      ? [project.galleryGroups[0] - 1, ...project.galleryGroups.slice(1)].filter((n) => n > 0)
      : project.galleryGroups;

  const blocks =
    naturalGrid || seamless
      ? galleryItems.map((image) => [image])
      : groupImages(galleryItems, galleryGroups);

  return (
    <div style={{ backgroundColor: project.bgColor, color: project.textColor }}>
      {hero && (
        // Shown uncropped at its own aspect ratio, capped at 85% of the
        // viewport height (a portrait hero narrows and centers instead of
        // running several screens tall).
        <div className="mx-auto w-full max-w-6xl px-6 pt-6 sm:px-10 sm:pt-10">
          <div
            className="relative mx-auto"
            style={{
              aspectRatio: `${hero.width} / ${hero.height}`,
              width: `min(100%, calc(85vh * ${hero.width / hero.height}))`,
            }}
          >
            <Image
              src={hero.src}
              alt={`${galleryAltPrefix}, image ${heroIndex + 1}`}
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      )}

      <section className="mx-auto w-full max-w-6xl px-6 pt-10 sm:px-10 sm:pt-14">
        <h1 className="font-display max-w-2xl text-[40px] font-medium leading-[1.05] sm:text-[56px]">
          {project.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed sm:mt-8 sm:text-lg">
          {project.description}
        </p>

        <dl
          className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t pt-8 sm:mt-12 sm:grid-cols-4 sm:pt-10"
          style={{ borderColor: project.mutedTextColor }}
        >
          {project.metadata.map((item) => (
            <div key={item.label}>
              <dt
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: project.mutedTextColor }}
              >
                {item.label}
              </dt>
              <dd className="mt-2 text-base font-medium sm:text-lg">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {project.video && (
        <section className="mx-auto w-full max-w-6xl px-6 pt-10 sm:px-10 sm:pt-14">
          <VideoEmbed
            vimeoId={project.video.vimeoId}
            background={project.video.background}
            hoverSeekControls={project.video.hoverSeekControls}
            rounded={project.video.rounded}
            title={project.title}
          />
        </section>
      )}

      {blocks.length > 0 &&
        (naturalGrid ? (
          // pogo-tv-style: a plain responsive grid, every still at its own
          // natural aspect ratio (no crop, no object-cover), rounded
          // corners, click-to-open lightbox (see natural-image-grid.tsx).
          <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14 sm:px-10 sm:pb-32 sm:pt-20">
            <NaturalImageGrid
              items={galleryItems}
              cols={naturalGridCols}
              altPrefix={`${project.title} — ${services}`}
            />
          </section>
        ) : seamless ? (
          // Uno en Uno-style: one continuous scroll, images stacked with
          // zero gap between them — but still inside the same side
          // wrapper/margins as the rest of the page.
          <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14 sm:px-10 sm:pb-32 sm:pt-20">
            <div className="flex flex-col">
              {blocks.map((block) => {
                const item = block[0];
                const spaced = !isVideoItem(item) && item.spaced;
                return (
                  <div key={mediaKey(item)} className={spaced ? "my-6 sm:my-10" : undefined}>
                    <Media item={item} alt={`${galleryAltPrefix}, image ${project.images.indexOf(item) + 1}`} aspectClass="aspect-[16/10]" sizes="(min-width: 1024px) 1152px, 100vw" />
                  </div>
                );
              })}
            </div>
          </section>
        ) : (
          <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14 sm:px-10 sm:pb-32 sm:pt-20">
            <div className="flex flex-col gap-4 sm:gap-6">
              {blocks.map((block, i) => (
                <div
                  key={mediaKey(block[0]) ?? i}
                  className={`grid gap-4 sm:gap-6 ${GRID_COLS_CLASS[block.length] ?? GRID_COLS_CLASS[1]}`}
                >
                  {block.map((item) => (
                    <Media
                      key={mediaKey(item)}
                      item={item}
                      alt={`${galleryAltPrefix}, image ${project.images.indexOf(item) + 1}`}
                      aspectClass={block.length === 1 ? "aspect-[16/10]" : "aspect-[4/3]"}
                      sizes={
                        block.length === 1
                          ? "(min-width: 1024px) 1152px, 100vw"
                          : block.length === 3
                            ? "(min-width: 1024px) 384px, 100vw"
                            : "(min-width: 1024px) 576px, 100vw"
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}
