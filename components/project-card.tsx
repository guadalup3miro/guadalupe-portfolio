import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { gallerySlotAspect } from "@/lib/gallery-layout";
import ViewArrow from "@/components/icons/view-arrow";

export default function ProjectCard({
  project,
  index = 0,
  masonry = false,
}: {
  project: Project;
  index?: number;
  // True masonry rendering — see ProjectGrid, which pre-sorts cards into
  // explicit columns and just needs each card here to be a plain block
  // (column spacing is handled by the column wrapper's own gap). This is
  // also currently synonymous with "on the /graphic-design page," which
  // is why it doubles as the switch for that page's image-only cards +
  // estudionuar-style hover reveal, vs. the homepage's caption-under-image
  // cards.
  masonry?: boolean;
}) {
  // Homepage cards are all the same size now — 352 tall, width set by the
  // grid column (528 wide in the reference, expressed as a ratio so it
  // holds at any column width).
  const aspect: {
    className: string;
    style?: { aspectRatio: string };
  } =
    project.kind === "gallery"
      ? gallerySlotAspect(project, index)
      : {
          className: project.cardAspect ?? "",
          style: { aspectRatio: "528 / 352" },
        };
  const isGalleryMiddle = project.kind === "gallery" && index % 3 === 1;
  const wrapperClass = masonry
    ? "block w-full"
    : (project.cardOffsetClass ?? "") + (isGalleryMiddle ? " lg:self-center" : "");
  const meta = `${project.tags.join(" · ").toUpperCase()} · @${project.slug.replace(/-/g, "").toUpperCase()}`;
  // Homepage caption splits the two: hype + handle as the title line,
  // tags alone as the small line underneath (matches the reference grid).
  const handle = project.slug.replace(/-/g, "");
  const tagsLine = project.tags.join(" · ").toUpperCase();

  // Future projects with no thumbnail yet render the same black card as
  // the hover reveal on real projects, just permanently shown (nothing to
  // reveal from under) and not clickable — "coming soon" sits where the
  // arrow-only row would normally go.
  if (!project.thumbnail) {
    return (
      <div
        style={aspect.style}
        className={`flex ${aspect.className} ${wrapperClass} cursor-default flex-col justify-between overflow-hidden bg-black p-6 text-white`}
      >
        <div>
          <h3 className="text-[32px] font-medium leading-[36px]">{project.hype}</h3>
          <p className="mt-2 text-[20px] font-medium leading-normal">@{handle}</p>
        </div>
        <div className="flex items-center gap-3">
          <ViewArrow className="h-6 w-11 text-white" />
          <span className="text-[32px] font-medium leading-none">coming soon</span>
        </div>
      </div>
    );
  }

  const isGif = project.thumbnail.toLowerCase().endsWith(".gif");

  // /graphic-design: image-only card, no caption underneath. On hover the
  // whole image is covered by a solid coral panel (estudionuar.com-style)
  // carrying the title, an arrow, the description, and the tag line, all
  // in cream so it reads as an inverse of the page's cream/coral palette.
  if (masonry) {
    const content = (
      <div
        style={aspect.style}
        className={`relative ${aspect.className} overflow-hidden bg-zinc-50`}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          unoptimized={isGif}
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-between bg-coral p-5 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 sm:p-6">
          <div>
            <h3 className="font-display text-[32px] font-medium leading-[0.95] text-cream sm:text-[44px] lg:text-[56px]">
              {project.title}
            </h3>
            <p className="mt-3 text-base font-medium text-cream sm:text-lg">
              {project.hype}
            </p>
          </div>
          <p className="text-xs font-medium uppercase tracking-wide text-cream">
            {meta}
          </p>
        </div>
      </div>
    );

    // Standalone gallery pieces (no case-study page behind them, e.g.
    // Misión Veleta) skip the "group" class entirely — no hover reveal,
    // since there's nowhere to click through to.
    if (project.standalone) {
      return (
        <div className={`block cursor-default ${wrapperClass}`}>
          {content}
        </div>
      );
    }

    return (
      <Link
        href={`/work/${project.slug}`}
        data-cursor="project"
        className={`group block ${wrapperClass}`}
      >
        {content}
      </Link>
    );
  }

  // Homepage: plain image in a rounded, overflow-clipped wrapper (no
  // background block or border), scaling up slightly on hover — same
  // effect as deadpine.xyz's project cards. Caption below is just two
  // lines, both Inter regular: the title ("hype @handle", 16), then the
  // tag line (uppercase, 12) directly under it.
  const content = (
    <>
      <div
        style={aspect.style}
        className={`relative ${aspect.className} overflow-hidden rounded-2xl`}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          // GIFs need `unoptimized` — otherwise Next's image optimizer
          // re-encodes them and the animation is lost, leaving a still.
          unoptimized={isGif}
          className={`object-cover ${
            project.noHoverZoom
              ? ""
              : "transition-transform duration-300 ease-out group-hover:scale-[1.05]"
          }`}
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <p className="text-base font-normal leading-normal text-foreground">
          {project.hype} @{handle}
        </p>
        <p
          className="text-xs font-normal uppercase leading-3"
          style={{ color: "#ADA4A4" }}
        >
          {tagsLine}
        </p>
      </div>
    </>
  );

  // Standalone pieces (visual experiments, GIFs, stills) render as a card
  // with no project page behind them — same look, just not clickable.
  if (project.standalone) {
    return (
      <div className={`group block cursor-default ${wrapperClass}`}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="project"
      className={`group block ${wrapperClass}`}
    >
      {content}
    </Link>
  );
}
