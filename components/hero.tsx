"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { RAINBOW_COLORS as COLORS, RAINBOW_STEP_MS as STEP_MS } from "@/lib/rainbow-colors";

// Orange, blue, pink, green, repeating — matches /graphic-design's accent
// rotation. Driven by a JS interval (not CSS steps()) so the exact order
// and solid colors are guaranteed: each letter's color is
// COLORS[(letterIndex + tick) % 4], and tick advances by 1 every 800ms
// while hovered, so the whole pattern visibly shifts one color at a time —
// a marquee-chase effect, like a looping GIF. The custom cursor
// (data-cursor="rainbow" below) picks up the same colors independently.

function RainbowHoverLink({ text, href }: { text: string; href: string }) {
  const [tick, setTick] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleEnter = useCallback(() => {
    setIsHovering(true);
    setTick(0);
    intervalRef.current = setInterval(() => {
      setTick((t) => (t + 1) % COLORS.length);
    }, STEP_MS);
  }, []);

  const handleLeave = useCallback(() => {
    setIsHovering(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  let letterIndex = 0;
  return (
    <Link
      href={href}
      data-cursor="rainbow"
      className="font-medium"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {text.split("").map((char, i) => {
        if (char === " ") return <span key={i}> </span>;
        const color = COLORS[(letterIndex + tick) % COLORS.length];
        letterIndex += 1;
        return (
          <span
            key={i}
            className="transition-colors duration-200"
            style={{ color: isHovering ? color : undefined }}
          >
            {char}
          </span>
        );
      })}
    </Link>
  );
}

export default function Hero() {
  return (
    <section
      className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pt-[180px] pb-[180px] sm:px-10"
    >
      <div className="relative z-10">
        <h1 className="max-w-[728px] text-[32px] font-normal leading-tight tracking-tight">
          Hey, I&apos;m Guadalupe — a product designer with a{" "}
          <RainbowHoverLink
            text="visual designer's eye for the details"
            href="/graphic-design"
          />{" "}
          <span className="font-normal">others</span> miss.
          That eye for detail never left —
          it just moved from posters to platforms. Crypto, industrial
          maintenance, hotel platforms — different worlds, same job:
          translate chaos into something people can actually use.
        </h1>
      </div>
    </section>
  );
}
