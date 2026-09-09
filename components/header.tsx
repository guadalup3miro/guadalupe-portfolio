"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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

const HEADER_HEIGHT = 64;

export default function Header() {
  // /graphic-design runs its own coral-on-cream palette — the nav text
  // switches to match it there, and back to the default elsewhere.
  const pathname = usePathname();
  const isGraphicDesign = pathname?.startsWith("/graphic-design") ?? false;
  const isHome = pathname === "/";
  const isProject = pathname?.startsWith("/work/") ?? false;

  // On the homepage the header floats clear (no bg) over the cream hero,
  // then swaps to a solid black bar the moment the dark work section
  // scrolls up underneath it — watches the #dark-section-start marker
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

  // Project case studies get a different pattern: the header hides on
  // scroll-down (out of the reader's way over the imagery), then reappears
  // on scroll-up — with a solid page-background fill instead of a
  // transparent one, so the nav stays legible over whatever content has
  // scrolled up underneath it.
  const [hidden, setHidden] = useState(false);
  const [scrolledPastTop, setScrolledPastTop] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      if (!isProject) {
        setHidden(false);
        setScrolledPastTop(false);
        return;
      }
      const y = window.scrollY;
      setScrolledPastTop(y > HEADER_HEIGHT);
      setHidden(y > lastY.current && y > HEADER_HEIGHT);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isProject]);

  const useLightText = isGraphicDesign ? "text-coral" : isOverDark ? "text-white" : "";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[transform,background-color] duration-300 ${
        isProject && hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        isOverDark ? "bg-[#1A1A1A]" : isProject && scrolledPastTop ? "bg-[#F6F5EF]" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 ${useLightText}`}
      >
        <Link
          href="/"
          className="animate-fade-in-down text-xs font-semibold uppercase tracking-wide"
          style={{ animationDelay: "0ms" }}
        >
          Guadalupe Miró
        </Link>
        <nav className="flex items-center gap-8 text-xs font-semibold uppercase tracking-wide">
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
      </div>
    </header>
  );
}
