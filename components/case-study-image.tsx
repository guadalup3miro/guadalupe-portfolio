import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Legacy fixed-crop mode (still used by /work/natura and /work/maintainx) —
// forces an aspect ratio via `fill` + object-cover.
const aspectClass = {
  hero: "aspect-[16/10]",
  wide: "aspect-[16/9]",
  photo: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  scroll: "aspect-[9/16]",
} as const;

export default function CaseStudyImage({
  src,
  alt,
  // Natural-size mode: pass the source file's real pixel dimensions and the
  // image renders at its own aspect ratio (scaled to fit the container),
  // never cropped — "the size that it is," per Guada's spec.
  width,
  height,
  aspect = "wide",
  position = "center",
  className = "",
  // True viewport-edge-to-edge width, ignoring any parent max-width/padding
  // (the "relative left-1/2 w-screen -translate-x-1/2" breakout trick).
  // Reserved for the single lead/hero shot at the top of a case study —
  // everything else stays inside the page's safe-area column.
  bleed = false,
  // 20px rounded corners + a soft drop shadow — the default treatment for
  // every in-grid (non-bleed) image.
  radius = true,
  // mix-blend-mode: multiply — for images with a white/light background
  // (the top hero shot, hand-drawn sketches) so they sit into the page's
  // cream background instead of showing a hard rectangle edge.
  multiply = false,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspect?: keyof typeof aspectClass;
  position?: "center" | "top";
  className?: string;
  bleed?: boolean;
  radius?: boolean;
  multiply?: boolean;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));
  const bleedClass = bleed ? "relative left-1/2 w-screen -translate-x-1/2" : "";
  const treatmentClass =
    !bleed && radius
      ? "rounded-[10px] shadow-[0_25px_50px_-20px_rgba(26,26,26,0.25)]"
      : "";
  const multiplyClass = multiply ? "mix-blend-multiply" : "";

  if (!exists) return null;

  // Natural-size mode — no `fill`, so Next.js derives the aspect ratio
  // straight from width/height and the image is never cropped.
  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={bleed ? "100vw" : "(min-width: 1088px) 1088px, 100vw"}
        className={`h-auto w-full overflow-hidden ${bleedClass} ${treatmentClass} ${multiplyClass} ${className}`}
      />
    );
  }

  // Legacy fixed-crop mode.
  return (
    <div
      className={`relative overflow-hidden bg-zinc-50 ${aspectClass[aspect]} ${bleedClass} ${treatmentClass} ${multiplyClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={bleed ? "100vw" : "(min-width: 768px) 1280px, 100vw"}
        className={position === "top" ? "object-cover object-top" : "object-cover"}
      />
    </div>
  );
}
