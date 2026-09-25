"use client";

import { useEffect, useState } from "react";
import { HEADER_HEIGHT } from "@/components/header";

// Left-rail wayfinding for a numbered case study: a vertical list of the
// sections that stays pinned while the reader scrolls and highlights the
// one currently in view. Desktop only — it renders nothing below `lg`, so
// the page collapses to a single column on tablet and mobile. Same
// scroll-listener + getBoundingClientRect approach the site header uses;
// solid #1A1A1A throughout (active at full strength, the rest dimmed).
type NavSection = { id: string; num: string; label: string };

export default function CaseStudySectionNav({
  sections,
}: {
  sections: NavSection[];
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    // The active section is the last one whose top has passed a reading
    // line a third of the way down the visible area below the sticky site
    // header (an anchor jump lands the section top well above it, so a
    // clicked item always highlights itself). At the very bottom of the
    // page the last section wins, even if it's too short to reach the line.
    const onScroll = () => {
      const line = HEADER_HEIGHT + (window.innerHeight - HEADER_HEIGHT) / 3;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      let current = sections[0]?.id ?? "";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      if (atBottom) current = sections[sections.length - 1]?.id ?? current;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  useEffect(() => {
    // Re-run the anchor jump once after mount (and on every hash change):
    // the browser's own initial jump can fire before this long page has
    // settled its height. scrollIntoView here honours each section's
    // scroll-mt so the heading clears the header.
    const jump = () => {
      const id = window.location.hash.slice(1);
      if (id) document.getElementById(id)?.scrollIntoView();
    };
    const t = window.setTimeout(jump, 120);
    window.addEventListener("hashchange", jump);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", jump);
    };
  }, []);

  return (
    <nav aria-label="Sections" className="hidden lg:block">
      <ul className="sticky top-24 flex flex-col gap-2.5 text-xs uppercase tracking-wide text-[#1A1A1A]">
        {sections.map(({ id, num, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`flex gap-2 leading-snug transition-opacity hover:opacity-100 ${
                active === id ? "opacity-100" : "opacity-40"
              }`}
            >
              <span className="tabular-nums">{num}</span>
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
