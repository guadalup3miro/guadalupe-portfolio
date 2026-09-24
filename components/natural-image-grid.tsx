"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { VisualProjectImage, VisualProjectMediaItem } from "@/lib/visual-projects";
import { isVideoItem } from "@/lib/visual-projects";
import VideoEmbed from "@/components/video-embed";

// pogo-tv-style still grid: every image at its own natural aspect ratio
// (no crop, no object-cover), rounded corners, click-to-open a full-screen
// lightbox with prev/next (looping), swipe on mobile, Escape/click-outside/
// the X to close, and left/right arrow keys — all built into
// yet-another-react-lightbox rather than hand-rolled. A video item in the
// mix (rare for this layout, but supported for parity with the other
// gallery modes) spans the full row and isn't part of the lightbox.
const COLS_CLASS: Record<2 | 3, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};
const SPAN_CLASS: Record<2 | 3, string> = {
  2: "sm:col-span-2",
  3: "sm:col-span-3",
};

export default function NaturalImageGrid({
  items,
  cols,
}: {
  items: VisualProjectMediaItem[];
  cols: 2 | 3;
}) {
  const [index, setIndex] = useState(-1);

  const images = items.filter((item): item is VisualProjectImage => !isVideoItem(item));
  const slides = images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  }));

  return (
    <>
      <div className={`grid grid-cols-1 gap-6 sm:gap-8 ${COLS_CLASS[cols]}`}>
        {items.map((item) => {
          if (isVideoItem(item)) {
            return (
              <div key={`video-${item.vimeoId}`} className={SPAN_CLASS[cols]}>
                <VideoEmbed vimeoId={item.vimeoId} background={item.background} />
              </div>
            );
          }
          const imageIndex = images.indexOf(item);
          return (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(imageIndex)}
              className="relative block w-full cursor-zoom-in overflow-hidden rounded-2xl"
              aria-label="Open image"
            >
              <Image
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                sizes={cols === 3 ? "(min-width: 640px) 384px, 100vw" : "(min-width: 640px) 576px, 100vw"}
                className="h-auto w-full"
              />
            </button>
          );
        })}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        carousel={{ finite: false }}
        // Library defaults to false -- explicitly on since "click outside
        // the image closes it" was a stated requirement.
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
