"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { RAINBOW_COLORS, RAINBOW_STEP_MS } from "@/lib/rainbow-colors";

function subscribeFinePointer(callback: () => void) {
  const query = window.matchMedia("(pointer: fine)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getFinePointerSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

// A small dot that trails the pointer with easing (rather than snapping
// 1:1), with mix-blend-difference so it reads on both light and dark
// backgrounds. On /graphic-design it switches to coral/cream instead. Only
// enabled on fine-pointer (mouse/trackpad) devices — touch devices keep
// their native cursor.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot,
  );
  const [isOverProject, setIsOverProject] = useState(false);
  // Hovering the hero's "visual designer's eye for the details" link — the
  // dot cycles through the same 4 colors as the letters underneath it.
  const [isOverRainbow, setIsOverRainbow] = useState(false);
  // Over an embedded iframe (e.g. a live prototype) the page stops getting
  // mousemove, so the dot would freeze at its edge — hide it there and let
  // the iframe's native cursor take over.
  const [isOverFrame, setIsOverFrame] = useState(false);
  const [rainbowTick, setRainbowTick] = useState(0);
  const rainbowIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // /graphic-design runs its own coral/cream palette — the cursor matches
  // it there instead of the sitewide mix-blend-difference dot.
  const pathname = usePathname();
  const isGraphicDesign = pathname?.startsWith("/graphic-design") ?? false;

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let hasMoved = false;
    let rafId = 0;

    const handleMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!hasMoved) {
        // Snap on the very first move so it doesn't glide in from center.
        current.x = target.x;
        current.y = target.y;
        hasMoved = true;
      }
    };

    const handleOver = (event: MouseEvent) => {
      const el = event.target as HTMLElement | null;
      setIsOverProject(!!el?.closest('[data-cursor="project"]'));
      setIsOverFrame(el?.tagName === "IFRAME");

      const overRainbow = !!el?.closest('[data-cursor="rainbow"]');
      setIsOverRainbow((was) => {
        if (overRainbow === was) return was;
        if (overRainbow) {
          setRainbowTick(0);
          rainbowIntervalRef.current = setInterval(() => {
            setRainbowTick((t) => (t + 1) % RAINBOW_COLORS.length);
          }, RAINBOW_STEP_MS);
        } else if (rainbowIntervalRef.current) {
          clearInterval(rainbowIntervalRef.current);
          rainbowIntervalRef.current = null;
        }
        return overRainbow;
      });
    };

    const render = () => {
      // Ease toward the real pointer position each frame — lower factor
      // trails more, higher tracks closer to 1:1.
      const ease = 0.2;
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      const transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      if (dotRef.current) dotRef.current.style.transform = transform;
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      if (rainbowIntervalRef.current) clearInterval(rainbowIntervalRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className={`pointer-events-none fixed left-0 top-0 z-[999] h-3 w-3 rounded-full ${isOverFrame ? "opacity-0" : "opacity-100"} transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOverRainbow
          ? ""
          : isGraphicDesign
            ? isOverProject
              ? "bg-cream"
              : "bg-coral"
            : "bg-white mix-blend-difference"
      }`}
      style={isOverRainbow ? { backgroundColor: RAINBOW_COLORS[rainbowTick] } : undefined}
    />
  );
}
