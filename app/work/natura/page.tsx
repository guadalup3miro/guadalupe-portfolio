import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyImage from "@/components/case-study-image";

export const metadata: Metadata = {
  title: "Catálogo Natura — Guadalupe Miró",
  description: "Product catalog redesign for Natura.",
};

export default function NaturaPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <Link href="/" className="text-sm text-muted hover:text-foreground">
        ← Back
      </Link>

      <header className="mt-8">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Catálogo Natura
        </h1>
        <p className="mt-2 text-sm text-muted">
          Product designer · May – Aug 2019
        </p>
      </header>

      <CaseStudyImage
        src="/images/natura/natura-extra-6.png"
        alt="Catálogo Natura shown on a laptop"
        aspect="hero"
        className="mt-10"
      />

      <p className="mt-12 max-w-2xl text-2xl leading-snug font-medium tracking-tight sm:text-3xl">
        Millions of women already knew how to shop this way. They just did it
        on paper.
      </p>

      <p className="mt-6 leading-relaxed text-muted">
        Natura&apos;s catalog is a cultural fixture across South America —
        sold not through a store, but through a network of independent
        vendors (consultoras) who share a physical, printed catalog with
        their customers, page by page, like a magazine. It&apos;s intimate,
        familiar, and it works. The problem: it was stuck in print, while
        the world moved to phones.
      </p>

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Not an online shop. A digital catalog.
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        The brief was specific about what this wasn&apos;t: not a
        Shopify-style storefront, not an Amazon-like grid of products.
        Natura wasn&apos;t looking to compete with e-commerce — they already
        had that. What they needed was something that felt like flipping
        through the familiar catalog, just on a screen: a consultora could
        share it with a QR code, a customer could browse it the way they
        always had, and when they bought something, the consultora who
        shared it earned the commission.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
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

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Designing for people who never asked to &quot;go digital&quot;
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        The real challenge wasn&apos;t technical, it was emotional: the
        audience was largely non-tech-savvy, deeply loyal to a ritual that
        had nothing to do with apps. Get the navigation even slightly
        confusing, and we&apos;d lose the exact people the brand depended
        on. So the architecture underneath had to be radically simple — a
        clear, predictable skeleton anyone could move through without
        thinking.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
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

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        But simple skeleton, rich surface
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        Here&apos;s the tension that shaped the whole visual direction: a
        clean, minimal grid — the instinct for most e-commerce — would have
        made it feel exactly like the online shop it was explicitly not
        supposed to be. So once the real content (products, photography)
        filled that simple skeleton, the surface needed to feel more
        organic: layered, a little playful, almost collage-like — closer to
        flipping a glossy magazine page than scrolling a product list.
      </p>
      <CaseStudyImage
        src="/images/natura/natura-extra-3.png"
        alt="Ekos page from sketch to wireframe to final"
        aspect="wide"
        className="mt-8"
      />
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
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

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Built for the business, not just the browse
      </h2>
      <ul className="mt-8 list-disc space-y-4 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="font-medium text-foreground">
            Simple, predictable navigation
          </strong>{" "}
          — the strategic foundation that made everything else possible
        </li>
        <li>
          <strong className="font-medium text-foreground">
            A catalog, not a cart
          </strong>{" "}
          — no marketplace-style browsing; a guided, page-like experience
          per collection (Ekos, Chronos, Una, Ilía)
        </li>
        <li>
          <strong className="font-medium text-foreground">
            Shareable by design
          </strong>{" "}
          — every catalog instance tied to a vendor via QR code
        </li>
        <li>
          <strong className="font-medium text-foreground">
            Built for scale
          </strong>{" "}
          — a CMS-driven, reusable component system, so Natura&apos;s team
          could load new campaigns without designers touching every page
        </li>
      </ul>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
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

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        The opportunity
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        This was never really about &quot;modernizing&quot; a catalog. It
        was about giving thousands of vendors, and the customers who
        already trusted them, a way to keep doing something they loved —
        just with a phone in hand instead of a magazine.
      </p>

      <div className="mt-16 border-t border-border pt-8">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          ← Back to all work
        </Link>
      </div>
    </article>
  );
}
