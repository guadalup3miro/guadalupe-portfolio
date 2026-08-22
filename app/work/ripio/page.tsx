import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyImage from "@/components/case-study-image";
import CaseStudyHero from "@/components/case-study-hero";
import CaseStudySummary from "@/components/case-study-summary";
import CaseStudyBlock from "@/components/case-study-block";

export const metadata: Metadata = {
  title: "Ripio — Guadalupe Miró",
  description: "Crypto exchange — wallet and trading experience.",
};

// Project summary figures are Aerolab's own published numbers for this
// engagement (aerolab.co/ripio) — real, not estimated.
const summary = [
  { label: "Team", value: "2 Product Designers · 1 Project Manager" },
  { label: "Duration", value: "6 months" },
  {
    label: "Deliverables",
    value: "Discovery definitions, UX architecture, hi-fi prototypes, motion & illustrations",
  },
  { label: "Project type", value: "Product discovery · Product design" },
  {
    label: "Applied methodologies",
    value:
      "Competitive benchmarking, user & product discovery, user interviews, usability testing, low-fi & high-fi prototyping",
  },
];

export default function RipioPage() {
  return (
    <article className="w-full pb-24">
      <CaseStudyHero
        eyebrow="Ripio"
        title="Crypto's biggest problem was never the technology. It was trust."
        role="Product Designer"
        timeline="Oct 2018 – Mar 2019"
        agency="Aerolab"
      />

      <div className="mx-auto w-full max-w-[1088px] px-6 pt-16">
        <CaseStudyImage
          src="/images/ripio/hero-catalog-dashboard.jpg"
          alt="Ripio crypto catalog and dashboard"
          width={2880}
          height={1458}
          multiply
        />
      </div>

      <CaseStudySummary items={summary} />

      <CaseStudyBlock
        title="Not a redesign. A ground-up build."
        image={{
          src: "/images/ripio/onboarding-sketch.png",
          alt: "Hand-drawn onboarding flow sketch",
          width: 1970,
          height: 2610,
          radius: false,
          multiply: true,
          className: "max-w-[420px]",
        }}
      >
        <p>
          This didn&apos;t start as a redesign brief — it started as a
          one-month proof of concept: run discovery, prototype a tiny MVP,
          see what&apos;s possible. It didn&apos;t stay small for long. We
          ended up building an entirely new platform from the ground up: the
          full wallet experience, every transactional flow, the onboarding
          and identity verification process, the credit flow, and the UI kit
          and design system it would all run on.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock
        title="Understanding who we were actually building for"
        image={{
          src: "/images/ripio/jtbd-survey-card.jpg",
          alt: "Jobs-to-be-done user segmentation card",
          width: 780,
          height: 962,
        }}
      >
        <p>
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
      </CaseStudyBlock>

      <div className="mx-auto w-full max-w-[1088px] px-6 py-8">
        <CaseStudyImage
          src="/images/ripio/personas-board.jpg"
          alt="Proto-persona segmentation board"
          width={2288}
          height={870}
        />
      </div>

      <CaseStudyBlock
        title="What do we know about our users?"
        image={{
          src: "/images/ripio/information-architecture.jpg",
          alt: "Information architecture diagram",
          width: 1222,
          height: 806,
        }}
      >
        <p>
          Their behaviors speak about their needs, but their actions are
          limited by their level of knowledge on the subject. The actions
          they perform are different and increase based on what they know.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Making a stranger feel safe enough to hand over their money">
        <p>
          The first real test of trust is the moment someone verifies their
          identity — hand over personal details to an app they&apos;ve never
          used, for a currency they don&apos;t fully understand yet. Get this
          wrong and people abandon before they&apos;ve even started. We built
          this as a clean, guided sequence — personal info, then residency,
          then phone and ID validation — one clear step at a time, instead of
          a wall of form fields.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Built for people, not just for crypto">
        <p>
          Everything after that followed the same principle: make crypto feel
          like something a regular banking customer could actually use.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="New navigation & architecture">
        <p>
          Built for logged-in and logged-out users alike, so the
          product&apos;s logic was never a mystery.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock
        title="A brand-new dashboard"
        image={{
          src: "/images/ripio/sell-btc-amount.jpg",
          alt: "Selling Bitcoin — amount entry screen",
          width: 1332,
          height: 1102,
        }}
      >
        <p>
          The portal to the crypto world: pesos account, holdings, and key
          actions, all in one place, greeting you by name.
        </p>
      </CaseStudyBlock>
      <div className="mx-auto -mt-8 w-full max-w-[1088px] px-6 pb-16">
        <div className="flex flex-col gap-6 sm:flex-row">
          <CaseStudyImage
            src="/images/ripio/buy-btc-confirm.jpg"
            alt="Buying Bitcoin — confirmation screen"
            width={964}
            height={686}
          />
          <CaseStudyImage
            src="/images/ripio/sell-btc-confirm.jpg"
            alt="Selling Bitcoin — confirmation screen"
            width={964}
            height={686}
          />
        </div>
      </div>

      <CaseStudyBlock
        title="A unified wallet"
        image={{
          src: "/images/ripio/rapipago-topup.jpg",
          alt: "Topping up a wallet balance via Rapipago",
          width: 1184,
          height: 725,
        }}
        imageSide="left"
      >
        <p>
          Showing pesos, Bitcoin, and Ethereum the way a bank statement
          should look — clear, at a glance, nothing hidden.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="A real, readable investment chart">
        <p>In place of raw numbers.</p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Crypto catalog & landings">
        <p>
          Built to teach as much as to sell, so no one had to become an
          expert just to get started.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Credit, built from scratch">
        <p>
          A transparent request flow, plus real tools to track and manage
          active lines.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="A marketplace">
        <p>
          A first-of-its-kind space to discover, buy, and sell non-fungible
          collectibles directly in pesos.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="The opportunity">
        <p>
          Argentina didn&apos;t need another app for crypto insiders. It
          needed a bridge — between millions of people who already trusted
          (and needed) a currency they could count on, and a technology
          they&apos;d been taught to fear. That&apos;s what we built Ripio
          into.
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
