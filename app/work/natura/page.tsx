import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyImage from "@/components/case-study-image";
import CaseStudyHero from "@/components/case-study-hero";
import CaseStudyBlock from "@/components/case-study-block";

export const metadata: Metadata = {
  title: "Catálogo Natura — Guadalupe Miró",
  description: "Product catalog redesign for Natura.",
};

export default function NaturaPage() {
  return (
    <article className="w-full pb-24">
      <CaseStudyHero
        eyebrow="Catálogo Natura"
        title="Millions of women already knew how to shop this way. They just did it on paper."
        role="Product Designer"
        timeline="May – Aug 2019"
      />

      <div className="mx-auto w-full max-w-[1088px] px-6 pt-16">
        <CaseStudyImage
          src="/images/natura/natura-extra-6.png"
          alt="Catálogo Natura shown on a laptop"
          aspect="hero"
        />
      </div>

      <CaseStudyBlock>
        <p>
          Natura&apos;s catalog is a cultural fixture across South America —
          sold not through a store, but through a network of independent
          vendors (consultoras) who share a physical, printed catalog with
          their customers, page by page, like a magazine. It&apos;s intimate,
          familiar, and it works. The problem: it was stuck in print, while
          the world moved to phones.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Not an online shop. A digital catalog.">
        <p>
          The brief was specific about what this wasn&apos;t: not a
          Shopify-style storefront, not an Amazon-like grid of products.
          Natura wasn&apos;t looking to compete with e-commerce — they
          already had that. What they needed was something that felt like
          flipping through the familiar catalog, just on a screen: a
          consultora could share it with a QR code, a customer could browse
          it the way they always had, and when they bought something, the
          consultora who shared it earned the commission.
        </p>
      </CaseStudyBlock>

      <div className="mx-auto w-full max-w-[1088px] px-6 py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <CaseStudyImage
            src="/images/natura/Home_Copy_42.png"
            alt="Home carousel — Una"
            aspect="photo"
          />
          <CaseStudyImage
            src="/images/natura/Home_Copy_65.png"
            alt="Home carousel — Chronos"
            aspect="photo"
          />
          <CaseStudyImage
            src="/images/natura/Home_Copy_69.png"
            alt="Home carousel — Ilía"
            aspect="photo"
          />
          <CaseStudyImage
            src="/images/natura/Home_Copy_71.png"
            alt="Home carousel — Ekos"
            aspect="photo"
          />
        </div>
      </div>

      <CaseStudyBlock title="Designing for people who never asked to &quot;go digital&quot;">
        <p>
          The real challenge wasn&apos;t technical, it was emotional: the
          audience was largely non-tech-savvy, deeply loyal to a ritual that
          had nothing to do with apps. Get the navigation even slightly
          confusing, and we&apos;d lose the exact people the brand depended
          on. So the architecture underneath had to be radically simple — a
          clear, predictable skeleton anyone could move through without
          thinking.
        </p>
      </CaseStudyBlock>

      <div className="mx-auto w-full max-w-[1088px] px-6 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <CaseStudyImage
            src="/images/natura/natura-extra-2.png"
            alt="Site flow diagram"
            aspect="wide"
          />
          <CaseStudyImage
            src="/images/natura/natura-extra-1.png"
            alt="Mobile navigation flow wireframes"
            aspect="wide"
          />
        </div>
      </div>

      <CaseStudyBlock
        title="But simple skeleton, rich surface"
        image={{
          src: "/images/natura/natura-extra-3.png",
          alt: "Ekos page from sketch to wireframe to final",
          width: 4000,
          height: 2250,
        }}
      >
        <p>
          Here&apos;s the tension that shaped the whole visual direction: a
          clean, minimal grid — the instinct for most e-commerce — would
          have made it feel exactly like the online shop it was explicitly
          not supposed to be. So once the real content (products,
          photography) filled that simple skeleton, the surface needed to
          feel more organic: layered, a little playful, almost
          collage-like — closer to flipping a glossy magazine page than
          scrolling a product list.
        </p>
      </CaseStudyBlock>

      <div className="mx-auto w-full max-w-[1088px] px-6 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <CaseStudyImage
            src="/images/natura/Opcion_Header.png"
            alt="Home header option — portrait insert"
            aspect="photo"
          />
          <CaseStudyImage
            src="/images/natura/Opcion_Header_Copy.png"
            alt="Home header option — product flat lay"
            aspect="photo"
          />
          <CaseStudyImage
            src="/images/natura/Opcion_Header_Copy_2.png"
            alt="Home header option — macro texture"
            aspect="photo"
          />
        </div>
      </div>

      <CaseStudyBlock title="Built for the business, not just the browse">
        <p>
          Simple, predictable navigation — the strategic foundation that made
          everything else possible.
        </p>
      </CaseStudyBlock>
      <CaseStudyBlock>
        <p>
          A catalog, not a cart — no marketplace-style browsing; a guided,
          page-like experience per collection (Ekos, Chronos, Una, Ilía).
        </p>
      </CaseStudyBlock>
      <CaseStudyBlock>
        <p>
          Shareable by design — every catalog instance tied to a vendor via
          QR code.
        </p>
      </CaseStudyBlock>
      <CaseStudyBlock>
        <p>
          Built for scale — a CMS-driven, reusable component system, so
          Natura&apos;s team could load new campaigns without designers
          touching every page.
        </p>
      </CaseStudyBlock>

      <div className="mx-auto w-full max-w-[1088px] px-6 py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <CaseStudyImage
            src="/images/natura/Ekos.png"
            alt="Ekos collection page"
            aspect="scroll"
            position="top"
          />
          <CaseStudyImage
            src="/images/natura/Chronos.png"
            alt="Chronos collection page"
            aspect="scroll"
            position="top"
          />
          <CaseStudyImage
            src="/images/natura/Una.png"
            alt="Una collection page"
            aspect="scroll"
            position="top"
          />
          <CaseStudyImage
            src="/images/natura/Ilia.png"
            alt="Ilía collection page"
            aspect="scroll"
            position="top"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <CaseStudyImage
            src="/images/natura/Ekos_Copy.png"
            alt="Ekos collection, Andiroba line"
            aspect="wide"
          />
          <CaseStudyImage
            src="/images/natura/Detalleproducto.png"
            alt="Product detail page"
            aspect="scroll"
            position="top"
          />
        </div>
      </div>

      <CaseStudyBlock title="The opportunity">
        <p>
          This was never really about &quot;modernizing&quot; a catalog. It
          was about giving thousands of vendors, and the customers who
          already trusted them, a way to keep doing something they loved —
          just with a phone in hand instead of a magazine.
        </p>
      </CaseStudyBlock>

      <div className="mx-auto w-full max-w-[1088px] px-6 pt-8">
        <Link href="/" className="text-sm text-[#1A1A1A] hover:opacity-70">
          ← Back to all work
        </Link>
      </div>
    </article>
  );
}
