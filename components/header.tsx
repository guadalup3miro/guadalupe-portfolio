"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { visualProjects } from "@/lib/visual-projects";

const SHOW_CONTACT_LINK = true;

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Old Portfolio", href: "/old-portfolio.pdf" },
  ...(SHOW_CONTACT_LINK
    ? [{ label: "Contact me", href: "mailto:guadamiro@gmail.com" }]
    : []),
];

// Keep in sync with --header-height in app/globals.css (the CSS side, used
// for scroll-margin on in-page anchors).
export const HEADER_HEIGHT = 64;

export default function Header() {
  // /graphic-design runs its own coral-on-cream palette — the nav text
  // switches to match it there, and back to the default elsewhere.
  const pathname = usePathname();
  const isGraphicDesign = pathname?.startsWith("/graphic-design") ?? false;
  const isHome = pathname === "/";
  const isProject = pathname?.startsWith("/work/") ?? false;
  // Visual-project pages (see lib/visual-projects.ts) each carry their own
  // background/text color — the header and footer pick those up directly
  // instead of the site-wide cream/dark bar, so the color runs unbroken
  // from the very top of the page.
  const projectSlug = isProject ? pathname?.split("/")[2] : undefined;
  const visualProject = projectSlug ? visualProjects[projectSlug] : undefined;

  // Below `sm` the full inline nav (wordmark + 5 links) is ~120px wider
  // than a phone viewport — it overflowed the page and overlapped the
  // wordmark. Collapse it into a toggle + stacked drop-down panel instead.
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the panel whenever the route changes — this component stays
  // mounted across client-side navigations, so an open panel would
  // otherwise carry onto the next page (covers back/forward too; tapping a
  // panel link also closes it directly). Store-and-compare during render
  // rather than an effect, per the React "adjusting state when a prop
  // changes" pattern — no throwaway render with the panel still open.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  // On the homepage the header swaps from the cream bar to a solid black
  // one the moment a dark section scrolls up underneath it — watches the #dark-section-start marker
  // rendered right at that boundary in app/page.tsx.
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!isHome) {
        setIsOverDark(false);
        return;
      }
      const marker = document.getElementById("dark-section-start");
      setIsOverDark(marker ? marker.getBoundingClientRect().top <= HEADER_HEIGHT : false);
    };
    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [isHome]);

  // Project case studies also hide the header on scroll-down (out of the
  // reader's way over the imagery), then bring it back on scroll-up.
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      if (!isProject) {
        setHidden(false);
        return;
      }
      const y = window.scrollY;
      setHidden(y > lastY.current && y > HEADER_HEIGHT);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isProject]);

  const useLightText = isGraphicDesign ? "text-coral" : isOverDark ? "text-white" : "";

  // The bar is always solid, filled with the page's own background (cream
  // by default, the project's color on visual project pages, black over the
  // homepage's dark section) — a transparent bar let the nav render on top
  // of whatever content scrolled up underneath it.
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[transform,background-color] duration-300 ${
        isProject && hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        visualProject
          ? ""
          : isOverDark
            ? "bg-[#1A1A1A]"
            : "bg-background"
      }`}
      style={visualProject ? { backgroundColor: visualProject.bgColor } : undefined}
    >
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 ${
          visualProject ? "" : useLightText
        }`}
        style={visualProject ? { color: visualProject.textColor } : undefined}
      >
        <Link
          href="/"
          className="animate-fade-in-down text-xs font-semibold uppercase tracking-wide"
          style={{ animationDelay: "0ms" }}
        >
          Guadalupe Miró
        </Link>

        {/* Desktop / tablet: the full inline nav. Hidden below `sm`. */}
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-wide sm:flex">
          {navLinks.map(({ label, href }, index) => {
            const linkClassName = `animate-fade-in-down transition-colors ${
              isGraphicDesign || isOverDark ? "hover:opacity-70" : "hover:text-muted"
            }`;
            const style = { animationDelay: `${(index + 1) * 80}ms` };

            // mailto: isn't an internal route — Next's Link is built for
            // client-side navigation between pages, so a plain <a> (same
            // pattern the footer's email link already uses) is what
            // actually hands off to the mail client instead of Link trying
            // to route it.
            if (href.startsWith("mailto:")) {
              return (
                <a key={label} href={href} className={linkClassName} style={style}>
                  {label}
                </a>
              );
            }

            return (
              <Link key={label} href={href} className={linkClassName} style={style}>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile: a toggle button. Inherits the bar's current text color
            via currentColor, so it tracks the same light/dark/coral states
            as the links do. */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="-mr-2 animate-fade-in-down p-2 sm:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M5 5l12 12M17 5L5 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drop-down panel. Rendered in normal flow inside the sticky
          header (not an overlay), so it just extends the header's height
          while open — no z-index/backdrop juggling. Always cream-surfaced
          with dark (or coral) text so it stays legible over whatever the
          bar itself is doing. */}
      {menuOpen && (
        <div
          className={`border-b border-black/10 sm:hidden ${
            visualProject ? "" : isGraphicDesign ? "bg-[#F6F5EF] text-coral" : "bg-[#F6F5EF] text-[#1A1A1A]"
          }`}
          style={
            visualProject
              ? { backgroundColor: visualProject.bgColor, color: visualProject.textColor }
              : undefined
          }
        >
          <nav className="flex flex-col px-6 py-2 text-xs font-semibold uppercase tracking-wide">
            {navLinks.map(({ label, href }) => {
              const linkClassName = "py-3 transition-opacity hover:opacity-70";
              // Close on tap explicitly: same-page hash links (/#work) don't
              // change the pathname, so the route-change check above wouldn't
              // catch them.
              const close = () => setMenuOpen(false);

              if (href.startsWith("mailto:")) {
                return (
                  <a key={label} href={href} className={linkClassName} onClick={close}>
                    {label}
                  </a>
                );
              }

              return (
                <Link key={label} href={href} className={linkClassName} onClick={close}>
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
