import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySectionNav from "@/components/case-study-section-nav";
import CaseStudyPlaceholder from "@/components/case-study-placeholder";

export const metadata: Metadata = {
  title: "Catálogo Natura — Guadalupe Miró",
  description: "Product catalog redesign for Natura.",
};

const stats = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "May – Aug 2019" },
];

const sections = [
  { id: "overview", num: "01", label: "Overview" },
  { id: "digital-catalog", num: "02", label: "A digital catalog" },
  { id: "architecture", num: "03", label: "Architecture" },
  { id: "visual-direction", num: "04", label: "Visual direction" },
  { id: "for-the-business", num: "05", label: "Built for the business" },
  { id: "opportunity", num: "06", label: "The opportunity" },
];

// The four strategic principles from the original "Built for the business"
// block — kept verbatim, each an em-dash lead phrase plus its explanation.
const principles = [
  {
    lead: "Simple, predictable navigation",
    body: "the strategic foundation that made everything else possible.",
  },
  {
    lead: "A catalog, not a cart",
    body:
      "no marketplace-style browsing; a guided, page-like experience per collection (Ekos, Chronos, Una, Ilía).",
  },
  {
    lead: "Shareable by design",
    body: "every catalog instance tied to a vendor via QR code.",
  },
  {
    lead: "Built for scale",
    body:
      "a CMS-driven, reusable component system, so Natura's team could load new campaigns without designers touching every page.",
  },
];

// Numbered eyebrow + section title, left-aligned, solid #1A1A1A.
function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
        {num}
      </p>
      <h2 className="mt-2 text-[32px] font-normal leading-tight text-[#1A1A1A]">
        {title}
      </h2>
    </div>
  );
}

// Standard body measure — left-aligned, readable width.
function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[640px] text-base leading-[22px] font-normal text-[#1A1A1A]">
      {children}
    </div>
  );
}

// One numbered section: id'd for the left rail, scroll offset so anchor
// jumps clear the sticky site header.
function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-14">
      {children}
    </section>
  );
}

export default function NaturaPage() {
  return (
    <article className="w-full pb-24 text-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="pt-8">
          <Link
            href="/"
            className="text-xs uppercase tracking-wide text-[#1A1A1A]/50 transition-opacity hover:text-[#1A1A1A]"
          >
            ← Back
          </Link>
        </div>

        <div className="mt-10 lg:grid lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-x-16">
          <CaseStudySectionNav sections={sections} />

          <div className="min-w-0">
            {/* HERO */}
            <header className="py-6">
              <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                Catálogo Natura
              </p>
              <h1 className="mt-4 text-[34px] font-normal leading-[1.15] text-[#1A1A1A] sm:text-[38px]">
                Millions of women already knew how to shop this way. They just
                did it on paper.
              </h1>

              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
                {stats.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Catálogo Natura on a laptop — 16:10 — natura-hero-laptop.jpg"
                />
              </div>
            </header>

            {/* 01 OVERVIEW */}
            <Section id="overview">
              <SectionHeading num="01" title="Overview" />
              <Prose>
                <p>
                  Natura&apos;s catalog is a cultural fixture across South
                  America — sold not through a store, but through a network of
                  independent vendors (consultoras) who share a physical,
                  printed catalog with their customers, page by page, like a
                  magazine. It&apos;s intimate, familiar, and it works. The
                  problem: it was stuck in print, while the world moved to
                  phones.
                </p>
              </Prose>
            </Section>

            {/* 02 NOT AN ONLINE SHOP */}
            <Section id="digital-catalog">
              <SectionHeading
                num="02"
                title="Not an online shop. A digital catalog."
              />
              <Prose>
                <p>
                  The brief was specific about what this wasn&apos;t: not a
                  Shopify-style storefront, not an Amazon-like grid of
                  products. Natura wasn&apos;t looking to compete with
                  e-commerce — they already had that. What they needed was
                  something that felt like flipping through the familiar
                  catalog, just on a screen: a consultora could share it with
                  a QR code, a customer could browse it the way they always
                  had, and when they bought something, the consultora who
                  shared it earned the commission.
                </p>
              </Prose>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Home carousel — Una — 3:4 — natura-home-carousel-una.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Home carousel — Chronos — 3:4 — natura-home-carousel-chronos.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Home carousel — Ilía — 3:4 — natura-home-carousel-ilia.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Home carousel — Ekos — 3:4 — natura-home-carousel-ekos.jpg"
                />
              </div>
            </Section>

            {/* 03 ARCHITECTURE */}
            <Section id="architecture">
              <SectionHeading
                num="03"
                title={'Designing for people who never asked to "go digital"'}
              />
              <Prose>
                <p>
                  The real challenge wasn&apos;t technical, it was emotional:
                  the audience was largely non-tech-savvy, deeply loyal to a
                  ritual that had nothing to do with apps. Get the navigation
                  even slightly confusing, and we&apos;d lose the exact people
                  the brand depended on. So the architecture underneath had to
                  be radically simple — a clear, predictable skeleton anyone
                  could move through without thinking.
                </p>
              </Prose>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Site flow diagram — 16:10 — natura-site-flow-diagram.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Mobile navigation flow wireframes — 16:10 — natura-mobile-nav-wireframes.jpg"
                />
              </div>
            </Section>

            {/* 04 VISUAL DIRECTION */}
            <Section id="visual-direction">
              <SectionHeading
                num="04"
                title="But simple skeleton, rich surface"
              />
              <Prose>
                <p>
                  Here&apos;s the tension that shaped the whole visual
                  direction: a clean, minimal grid — the instinct for most
                  e-commerce — would have made it feel exactly like the online
                  shop it was explicitly not supposed to be. So once the real
                  content (products, photography) filled that simple skeleton,
                  the surface needed to feel more organic: layered, a little
                  playful, almost collage-like — closer to flipping a glossy
                  magazine page than scrolling a product list.
                </p>
              </Prose>
              <div className="mt-10">
                <CaseStudyPlaceholder
                  ratio="16 / 9"
                  label="Ekos page from sketch to wireframe to final — 16:9 — natura-ekos-sketch-to-final.jpg"
                />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Home header option — portrait insert — 3:4 — natura-home-header-portrait.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Home header option — product flat lay — 3:4 — natura-home-header-flatlay.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Home header option — macro texture — 3:4 — natura-home-header-macro.jpg"
                />
              </div>
            </Section>

            {/* 05 BUILT FOR THE BUSINESS */}
            <Section id="for-the-business">
              <SectionHeading
                num="05"
                title="Built for the business, not just the browse"
              />
              <ul className="max-w-[640px] space-y-5">
                {principles.map(({ lead, body }) => (
                  <li
                    key={lead}
                    className="text-base leading-[22px] font-normal text-[#1A1A1A]"
                  >
                    <span className="font-normal">{lead}</span> — {body}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Ekos collection page — 3:4 — natura-collection-ekos.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Chronos collection page — 3:4 — natura-collection-chronos.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Una collection page — 3:4 — natura-collection-una.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Ilía collection page — 3:4 — natura-collection-ilia.jpg"
                />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Ekos collection, Andiroba line — 16:10 — natura-collection-ekos-andiroba.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="3 / 4"
                  label="Product detail page — 3:4 — natura-product-detail.jpg"
                />
              </div>
            </Section>

            {/* 06 THE OPPORTUNITY */}
            <Section id="opportunity">
              <SectionHeading num="06" title="The opportunity" />
              <Prose>
                <p>
                  This was never really about &quot;modernizing&quot; a
                  catalog. It was about giving thousands of vendors, and the
                  customers who already trusted them, a way to keep doing
                  something they loved — just with a phone in hand instead of a
                  magazine.
                </p>
              </Prose>
            </Section>

            <div className="pt-8">
              <Link
                href="/"
                className="text-xs uppercase tracking-wide text-[#1A1A1A]/50 transition-opacity hover:text-[#1A1A1A]"
              >
                ← Back to all work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
