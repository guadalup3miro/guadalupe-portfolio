"use client";

import { useEffect, useRef } from "react";

// Rotates through 4 accent colors — coral first (the default, matches
// --coral in globals.css so there's no flash on the very first visit),
// then blue, pink, green, then back to coral. Persisted in localStorage so
// the sequence continues rather than picking randomly. This runs as a
// useEffect (not a raw <script>) specifically so it fires on every mount
// of the /graphic-design page — a hard reload, clicking in from the
// homepage, or navigating back from a project page all remount this
// component, whereas a plain inline script only reliably re-runs on a
// full page load. Everything that reads `--coral` (header nav, the
// heading, the hover-card fill, the cursor dot) follows automatically
// since they're all Tailwind's `coral` color pointing at this one variable.
//
// hasRun guards against React Strict Mode's dev-only double-invoke of
// effects on mount — without it, the index advanced by 2 every visit
// instead of 1, which skips two of the four colors entirely (only ever
// landing on coral/pink or blue/green, never all four).
const COLORS = ["#EC5149", "#2C67F6", "#EF87D1", "#46B13D"];
const STORAGE_KEY = "gd-color-index";

export default function GraphicDesignColorCycle() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let i = parseInt(localStorage.getItem(STORAGE_KEY) ?? "-1", 10);
    if (Number.isNaN(i)) i = -1;
    i = (i + 1) % COLORS.length;
    localStorage.setItem(STORAGE_KEY, String(i));
    document.documentElement.style.setProperty("--coral", COLORS[i]);
  }, []);

  return null;
}
