import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyImage from "@/components/case-study-image";

export const metadata: Metadata = {
  title: "Ripio — Guadalupe Miró",
  description: "Crypto exchange — wallet and trading experience.",
};

export default function RipioPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <Link href="/" className="text-sm text-muted hover:text-foreground">
        ← Back
      </Link>

      <header className="mt-8">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Ripio
        </h1>
        <p className="mt-2 text-sm text-muted">
          Product designer · Oct 2018 – Mar 2019
        </p>
      </header>

      <CaseStudyImage
        src="/images/ripio/dashboard-clean.png"
        alt="Ripio dashboard"
        aspect="hero"
        className="mt-10"
      />

      <p className="mt-12 max-w-2xl text-2xl leading-snug font-medium tracking-tight sm:text-3xl">
        Crypto&apos;s biggest problem was never the technology. It was trust.
      </p>

      <figure className="mt-8 max-w-xl">
        <CaseStudyImage
          src="/images/ripio/old-wallet-page.png"
          alt="Ripio's old wallet page"
          aspect="wide"
        />
        <figcaption className="mt-2 text-xs tracking-wide text-muted uppercase">
          Before
        </figcaption>
      </figure>

      <p className="mt-6 leading-relaxed text-muted">
        In 2018, Argentina was a country where crypto adoption should have
        been obvious. Chronic inflation was eating people&apos;s savings in
        real time — a stable, borderless currency wasn&apos;t a gimmick
        here, it was a genuine lifeline. But normal people, the ones who
        used regular banks and had never touched an exchange, weren&apos;t
        buying in. Crypto looked like something for gamers and speculators.
        It looked risky, technical, and not for them.
      </p>

      <p className="mt-4 leading-relaxed text-muted">
        Ripio saw the gap. We were brought in to help close it.
      </p>

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Not a redesign. A ground-up build.
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        This didn&apos;t start as a redesign brief — it started as a
        one-month proof of concept: run discovery, prototype a tiny MVP,
        see what&apos;s possible. It didn&apos;t stay small for long. We
        ended up building an entirely new platform from the ground up: the
        full wallet experience, every transactional flow, the onboarding
        and identity verification process, the credit flow, and the UI kit
        and design system it would all run on.
      </p>
      <CaseStudyImage
        src="/images/ripio/discovery-scope-growth.png"
        alt="Discovery scope growing from a one-month proof of concept into a full wallet rebuild"
        aspect="wide"
        className="mt-8"
      />

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Understanding who we were actually building for
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        Before touching a single screen, we needed to know exactly who was
        on the other side of it. Using Jobs to Be Done, we segmented users
        by crypto knowledge, motivation, and how they already handled
        money — mapping six proto-personas, from total Newbies just getting
        familiar, through Curious users on the fence, to Financers and
        Business negotiators already comfortable investing real money. We
        focused the MVP on the middle of that spectrum: the people most
        ready to convert, but most likely to bounce if the product asked
        too much of them too soon.
      </p>
      <CaseStudyImage
        src="/images/ripio/personas-graphic.png"
        alt="Proto-persona segmentation graphic"
        aspect="wide"
        className="mt-8"
      />
      <CaseStudyImage
        src="/images/ripio/jtbd-research-photo.png"
        alt="Jobs-to-be-done research session"
        aspect="photo"
        className="mt-6 max-w-sm"
      />
      <CaseStudyImage
        src="/images/ripio/jtbd-segmentation-matrix.png"
        alt="Jobs-to-be-done segmentation matrix"
        aspect="wide"
        className="mt-6"
      />
      <CaseStudyImage
        src="/images/ripio/user-survey-results.png"
        alt="User survey results on wallet choice and banking habits"
        aspect="wide"
        className="mt-6"
      />
      <CaseStudyImage
        src="/images/ripio/competitive-benchmark.png"
        alt="Competitive benchmark against Coinbase, MetaMask, Opensea, Xapo, and Blockchain.com"
        aspect="wide"
        className="mt-6"
      />

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Making a stranger feel safe enough to hand over their money
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        The first real test of trust is the moment someone verifies their
        identity — hand over personal details to an app they&apos;ve never
        used, for a currency they don&apos;t fully understand yet. Get this
        wrong and people abandon before they&apos;ve even started. We built
        this as a clean, guided sequence — personal info, then residency,
        then phone and ID validation — one clear step at a time, instead of
        a wall of form fields.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <figure>
          <CaseStudyImage
            src="/images/ripio/onboarding-sketch.png"
            alt="Onboarding flow sketch"
            aspect="portrait"
          />
          <figcaption className="mt-2 text-xs tracking-wide text-muted uppercase">
            Sketch
          </figcaption>
        </figure>
        <figure>
          <CaseStudyImage
            src="/images/ripio/onboarding-wireframes-grid.png"
            alt="Onboarding wireframes"
            aspect="portrait"
          />
          <figcaption className="mt-2 text-xs tracking-wide text-muted uppercase">
            Wireframes
          </figcaption>
        </figure>
      </div>
      <CaseStudyImage
        src="/images/ripio/validation-flow-grid.png"
        alt="Full identity validation flow"
        aspect="wide"
        className="mt-6"
      />

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Built for people, not just for crypto
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        Everything after that followed the same principle: make crypto feel
        like something a regular banking customer could actually use.
      </p>

      <ul className="mt-8 list-disc space-y-4 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="font-medium text-foreground">
            New navigation &amp; architecture
          </strong>
          , built for logged-in and logged-out users alike, so the
          product&apos;s logic was never a mystery
        </li>
      </ul>
      <CaseStudyImage
        src="/images/ripio/information-architecture.png"
        alt="Information architecture diagram"
        aspect="wide"
        className="mt-6"
      />

      <ul className="mt-6 list-disc space-y-4 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="font-medium text-foreground">
            A brand-new dashboard
          </strong>{" "}
          — the portal to the crypto world: pesos account, holdings, and
          key actions, all in one place, greeting you by name
        </li>
        <li>
          <strong className="font-medium text-foreground">
            A unified wallet
          </strong>
          , showing pesos, Bitcoin, and Ethereum the way a bank statement
          should look — clear, at a glance, nothing hidden
        </li>
        <li>
          <strong className="font-medium text-foreground">
            A real, readable investment chart
          </strong>
          , in place of raw numbers
        </li>
        <li>
          <strong className="font-medium text-foreground">
            Crypto catalog &amp; landings
          </strong>
          , built to teach as much as to sell, so no one had to become an
          expert just to get started
        </li>
        <li>
          <strong className="font-medium text-foreground">
            Credit, built from scratch
          </strong>{" "}
          — a transparent request flow, plus real tools to track and manage
          active lines
        </li>
      </ul>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <CaseStudyImage
          src="/images/ripio/credit-request-options.png"
          alt="Credit request options"
          aspect="portrait"
        />
        <CaseStudyImage
          src="/images/ripio/credit-history.png"
          alt="Credit history"
          aspect="portrait"
        />
        <CaseStudyImage
          src="/images/ripio/credit-overdue-alert.png"
          alt="Credit overdue alert"
          aspect="portrait"
        />
      </div>

      <ul className="mt-6 list-disc space-y-4 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="font-medium text-foreground">
            A marketplace
          </strong>{" "}
          — a first-of-its-kind space to discover, buy, and sell
          non-fungible collectibles directly in pesos
        </li>
      </ul>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CaseStudyImage
          src="/images/ripio/marketplace-collection.png"
          alt="Marketplace collection view"
          aspect="portrait"
        />
        <CaseStudyImage
          src="/images/ripio/marketplace-detail.png"
          alt="Marketplace item detail"
          aspect="portrait"
        />
      </div>

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        The opportunity
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        Argentina didn&apos;t need another app for crypto insiders. It
        needed a bridge — between millions of people who already trusted
        (and needed) a currency they could count on, and a technology
        they&apos;d been taught to fear. That&apos;s what we built Ripio
        into.
      </p>

      <div className="mt-16 border-t border-border pt-8">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          ← Back to all work
        </Link>
      </div>
    </article>
  );
}
