import Link from "next/link";

// #work anchors (matched by an id="work" wrapper on both pages, see
// app/page.tsx and app/graphic-design/page.tsx) so switching tabs lands
// already scrolled to the tabs/grid — no jump back up to the top hero copy.
const tabs = [
  { label: "Product UX-UI", href: "/#work", key: "product" as const },
  { label: "Visual & Brand", href: "/graphic-design#work", key: "visual" as const },
];

// Full-width bar between the page hero and the project grid. Text stays the
// same solid color whether a tab is active or not — the only difference is
// the pill/oval outline (and medium vs. regular weight) on the active one.
// Default tone is dark-text-on-transparent, matching the light homepage;
// `tone="coral"` mirrors the page-wide coral-on-cream reskin /graphic-design
// already does elsewhere (see Header, Footer).
export default function SectionTabs({
  active,
  tone = "default",
}: {
  active: "product" | "visual";
  tone?: "default" | "coral";
}) {
  const barClass = tone === "coral" ? "bg-cream text-coral" : "bg-transparent text-foreground";
  const pillClass = tone === "coral" ? "border-coral" : "border-foreground";

  return (
    <div className={`relative w-full ${barClass}`}>
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-12 px-6 py-5 text-xs uppercase tracking-wide sm:px-10">
        {tabs.map(({ label, href, key }) =>
          key === active ? (
            <span
              key={key}
              // rounded-[50%] (not rounded-full): a fixed-px radius clamps
              // to a circle and leaves flat top/bottom edges once the box
              // is wider than it is tall (a stadium/pill). A 50% radius is
              // computed separately per axis — 50% of width, 50% of height
              // — so the curve consumes the whole edge on all four sides,
              // giving a true ellipse instead.
              className={`rounded-[50%] border px-7 py-2.5 font-medium ${pillClass}`}
            >
              {label}
            </span>
          ) : (
            <Link
              key={key}
              href={href}
              className="font-normal transition-opacity hover:opacity-80"
            >
              {label}
            </Link>
          ),
        )}
      </nav>
    </div>
  );
}
