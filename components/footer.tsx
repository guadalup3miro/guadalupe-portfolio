"use client";

import { usePathname } from "next/navigation";
import TimezoneClock from "@/components/timezone-clock";
import { visualProjects } from "@/lib/visual-projects";

// Email block stays hidden for now for a recruiter-shared build that
// shouldn't expose personal contact info — flip back to true to restore it.
const SHOW_CONTACT_EMAIL = false;
const SHOW_SOCIAL_LINKS = true;

const socialLinks = SHOW_SOCIAL_LINKS
  ? [
      { label: "Behance", href: "https://www.behance.net/guadalupemiro" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/guadalupemiro" },
      { label: "GitHub", href: "https://github.com/guadalup3miro" },
    ]
  : [];

export default function Footer() {
  // /graphic-design runs its own coral-on-cream palette (see Header).
  // Every other page (home, /about, /work/apaleo, every product case
  // study) sits on the site's default cream background — the footer
  // stays light/near-black to match, instead of falling back to a dark
  // theme, so the page reads as one continuous surface to the bottom.
  const pathname = usePathname();
  const isGraphicDesign = pathname?.startsWith("/graphic-design") ?? false;
  const isProject = pathname?.startsWith("/work/") ?? false;
  // Visual-project pages (see lib/visual-projects.ts) each carry their own
  // background/text color — the footer picks those up directly instead of
  // the site-wide dark bar, so the color runs unbroken to the bottom.
  const projectSlug = isProject ? pathname?.split("/")[2] : undefined;
  const visualProject = projectSlug ? visualProjects[projectSlug] : undefined;

  return (
    <footer
      // The explicit color (not just the --foreground var) is the actual
      // fix: elements with no explicit color class (the email link, the
      // "splitting time" paragraph, the city name in TimezoneClock) inherit
      // body's *already-computed* color, not a live var(--foreground)
      // lookup — so overriding the variable alone doesn't reach them.
      // Setting color here directly covers those, while
      // text-foreground/text-muted/border-border children below still pick
      // up the variable overrides.
      className={`w-full ${
        visualProject
          ? ""
          : isGraphicDesign
            ? "bg-cream text-coral"
            : "bg-[#F6F5EF] text-[#1A1A1A]"
      }`}
      style={
        (visualProject
          ? {
              backgroundColor: visualProject.bgColor,
              color: visualProject.textColor,
              "--foreground": visualProject.textColor,
              "--muted": visualProject.mutedTextColor,
              "--border": "color-mix(in srgb, " + visualProject.textColor + " 20%, transparent)",
            }
          : isGraphicDesign
            ? {
                "--foreground": "var(--coral)",
                "--muted": "color-mix(in srgb, var(--coral) 65%, transparent)",
                "--border": "color-mix(in srgb, var(--coral) 25%, transparent)",
              }
            : {
                "--foreground": "#1a1a1a",
                "--muted": "rgba(26,26,26,0.55)",
                "--border": "rgba(26,26,26,0.15)",
              }) as unknown as React.CSSProperties
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div
          className={`grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-8 ${
            SHOW_CONTACT_EMAIL ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {SHOW_CONTACT_EMAIL && (
            <div>
              <p className="text-xs uppercase tracking-wide text-foreground">
                Contact
              </p>
              <a
                href="mailto:guadamiro@gmail.com"
                className="text-sm font-normal transition-opacity hover:opacity-70"
              >
                guadamiro@gmail.com
              </a>
            </div>
          )}

          <div>
            <p className="text-xs uppercase tracking-wide text-foreground">
              Buenos Aires ⇄ Madrid
            </p>
            <p className="mt-3 max-w-[220px] text-sm font-normal leading-snug">
              Splitting time between Buenos Aires and Madrid. Available
              worldwide.
            </p>
          </div>

          <TimezoneClock
            city="Buenos Aires"
            countryCode="ARG."
            timeZone="America/Argentina/Buenos_Aires"
          />
          <TimezoneClock
            city="Madrid"
            countryCode="ESP."
            timeZone="Europe/Madrid"
          />
        </div>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground">© 2026 Guadalupe Miró</p>
          <div className="flex gap-6 text-xs font-normal uppercase tracking-wide">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-opacity hover:opacity-70"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
