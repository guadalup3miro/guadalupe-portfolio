"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Case-study image at its natural aspect ratio that opens full screen on
// click, for dense UI screenshots that are hard to read at column width.
// Same lightbox as NaturalImageGrid (Escape / click outside / X to close),
// with a single slide, so no prev/next.
export default function ZoomableImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open larger: ${alt}`}
        className="block w-full cursor-zoom-in overflow-hidden rounded-[10px] border border-[#1A1A1A]/15"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1088px) 1088px, 100vw"
          className="h-auto w-full"
        />
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src, width, height, alt }]}
        carousel={{ finite: true }}
        controller={{ closeOnBackdropClick: true }}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
      />
    </>
  );
}
