"use client";

import { useEffect, useRef, useState } from "react";

// Live, clickable prototype in an iframe. The prototype is a desktop app,
// so it never renders narrower than `minWidth`: below that, the iframe keeps
// its desktop size and is scaled down to fit the column (still clickable),
// with an "open full screen" link for a proper look on small screens.
export default function PrototypeEmbed({
  src,
  title,
  minWidth = 960,
  height = 760,
}: {
  src: string;
  title: string;
  minWidth?: number;
  height?: number;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    setWidth(el.getBoundingClientRect().width);
    const observer = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const innerWidth = width ? Math.max(width, minWidth) : minWidth;
  const scale = width ? Math.min(1, width / minWidth) : 1;

  return (
    <div>
      <div
        ref={frameRef}
        style={{ height: height * scale }}
        className="relative w-full overflow-hidden rounded-[10px] border border-[#1A1A1A]/15 bg-white"
      >
        {width !== null && (
          <iframe
            src={src}
            title={title}
            loading="lazy"
            style={{
              width: innerWidth,
              height,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            className="absolute top-0 left-0 block border-0"
          />
        )}
      </div>
      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-sm leading-[20px] text-[#1A1A1A]/70">
        <p>Live prototype, fully clickable.</p>
        <a
          href={src}
          target="_blank"
          rel="noopener"
          className="text-xs uppercase tracking-wide text-[#1A1A1A]/50 transition-opacity hover:text-[#1A1A1A]"
        >
          Open full screen ↗
        </a>
      </div>
    </div>
  );
}
