import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySectionNav from "@/components/case-study-section-nav";
import CaseStudyPlaceholder from "@/components/case-study-placeholder";

export const metadata: Metadata = {
  title: "Ripio — Guadalupe Miró",
  description: "Crypto exchange — wallet and trading experience.",
};

const stats = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "Oct 2018 – Mar 2019" },
  { label: "Team", value: "2 Product Designers, 1 PM" },
  { label: "Tools", value: "Sketch, InVision, Mural, Whimsical" },
];

// Project summary figures are Aerolab's own published numbers for this
// engagement (aerolab.co/ripio) — real, not estimated.
const summary = [
  { label: "Team", value: "2 Product Designers · 1 Project Manager" },
  { label: "Duration", value: "6 months" },
  {
    label: "Deliverables",
    value:
      "Discovery definitions, UX architecture, hi-fi prototypes, motion & illustrations",
  },
  { label: "Project type", value: "Product discovery · Product design" },
  {
    label: "Applied methodologies",
    value:
      "Competitive benchmarking, user & product discovery, user interviews, usability testing, low-fi & high-fi prototyping",
  },
];

const sections = [
  { id: "overview", num: "01", label: "Overview" },
  { id: "product", num: "02", label: "The Product" },
  { id: "goals", num: "03", label: "Goals" },
  { id: "users", num: "04", label: "Users" },
  { id: "process", num: "05", label: "Process" },
  { id: "what-we-built", num: "06", label: "What We Built" },
  { id: "featured-flows", num: "07", label: "Featured Flows" },
  { id: "platform", num: "08", label: "The Platform" },
  { id: "design-system", num: "09", label: "Design System" },
  { id: "reflection", num: "10", label: "Reflection" },
];

const features = [
  {
    title: "Site navigation",
    tag: "Existing → redesigned",
    body: "Architecture and sitemap rework for logged in/out users.",
  },
  {
    title: "Login / Signup / Validation",
    tag: "Existing → redesigned",
    body: "New UX for higher conversion.",
  },
  {
    title: "Wallet",
    tag: "Existing → redesigned",
    body: "Complete core refactor.",
  },
  { title: "Dashboard", tag: "New", body: "Portal to the crypto world." },
  {
    title: "Crypto catalog",
    tag: "New",
    body: "Discovery section per currency.",
  },
  {
    title: "Crypto landing",
    tag: "New",
    body: "Currency-specific landing pages.",
  },
  {
    title: "Ripio credit redesign",
    tag: "Existing → redesigned",
    body: "New request-and-manage flow.",
  },
  {
    title: "Marketplace / Discovery",
    tag: "New",
    body: "Buy/sell collectibles in pesos.",
  },
];

// Proto-personas from the original discovery deck — grouped by rollout
// phase, each with the emoji and one-line goal used on the slide.
const personaPhases = [
  {
    phase: "Phase 01",
    people: [
      { emoji: "👼", name: "Newbies", goal: "Get familiar with the product" },
      { emoji: "🛒", name: "Consumers", goal: "Perform daily actions" },
      { emoji: "🤑", name: "Financers", goal: "Make small investments" },
    ],
  },
  {
    phase: "Phase 02",
    people: [
      { emoji: "🔍", name: "Curious", goal: "Be able to capture them" },
      {
        emoji: "📈",
        name: "Business negotiators",
        goal: "Make great investments",
      },
    ],
  },
  {
    phase: "Phase 03",
    people: [
      { emoji: "🕹️", name: "Anarcho-Capitalist", goal: "Have autonomy" },
    ],
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

// Proto-persona chart — the discovery deck's phase grid, rebuilt: each
// rollout phase is a labelled group of cards (emoji · name · goal).
function PersonaChart() {
  return (
    <div className="space-y-8">
      {personaPhases.map(({ phase, people }) => (
        <div key={phase}>
          <p className="mb-3 text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/40">
            {phase}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {people.map(({ emoji, name, goal }) => (
              <div
                key={name}
                className="rounded-[10px] border border-[#1A1A1A]/15 p-5"
              >
                <div className="text-2xl leading-none" aria-hidden>
                  {emoji}
                </div>
                <p className="mt-3 text-base font-normal text-[#1A1A1A]">
                  {name}
                </p>
                <p className="mt-1 text-sm leading-[20px] font-normal text-[#1A1A1A]/70">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
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

export default function RipioPage() {
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
                Ripio
              </p>
              <h1 className="mt-4 text-[34px] font-normal leading-[1.15] text-[#1A1A1A] sm:text-[38px]">
                Crypto&apos;s biggest problem was never the technology.
                <br className="hidden sm:inline" /> It was trust.
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
                  ratio="16 / 9"
                  label="Hero — dashboard + crypto catalog, wide shot. 16:9. ripio-hero-dashboard-catalog.jpg"
                />
              </div>
            </header>

            {/* 01 OVERVIEW */}
            <Section id="overview">
              <SectionHeading num="01" title="Overview" />
              <div className="mb-10">
                <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  Project summary
                </p>
                <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                  {summary.map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-xs font-normal text-[#1A1A1A]/50">
                        {label}
                      </p>
                      <p className="mt-1.5 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Prose>
                <p>
                  This didn&apos;t start as a redesign brief — it started as
                  a one-month proof of concept: run discovery, prototype a
                  tiny MVP, see what&apos;s possible. It didn&apos;t stay
                  small for long. We ended up rebuilding the entire WebApp
                  Wallet from the ground up — every transactional flow, the
                  onboarding and identity verification process, the credit
                  flow, the crypto catalog and marketplace, and the UI kit
                  and design system it would all run on.
                </p>
              </Prose>
            </Section>

            {/* 02 THE PRODUCT */}
            <Section id="product">
              <SectionHeading num="02" title="The Product" />
              <Prose>
                <p>
                  Ripio was a digital wallet used to buy crypto with
                  Argentine pesos. But it had many features and functions
                  and little product — it was much more than a wallet, but
                  it was only ever presented as one.
                </p>
              </Prose>
              <div className="mt-10">
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Before — old Ripio web wallet screenshot (sidebar nav + Rapipago top-up flow). 16:10. ripio-before-old-wallet.jpg"
                />
              </div>
            </Section>

            {/* 03 GOALS */}
            <Section id="goals">
              <SectionHeading num="03" title="Goals" />
              <div className="grid max-w-[860px] grid-cols-1 gap-10 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                    Business goals
                  </h3>
                  <ul className="mt-4 space-y-2 text-base leading-[22px] font-normal text-[#1A1A1A]">
                    <li>Gain new users</li>
                    <li>Innovate ahead of competitors</li>
                    <li>Increase loyalty of current users</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                    Product goals
                  </h3>
                  <p className="mt-2 text-sm leading-[20px] font-normal text-[#1A1A1A]/70">
                    &ldquo;Make Ripio the link between people and
                    cryptocurrencies&rdquo;
                  </p>
                  <ul className="mt-4 space-y-2 text-base leading-[22px] font-normal text-[#1A1A1A]">
                    <li>Democratize access to knowledge</li>
                    <li>Provide information in a targeted manner</li>
                    <li>
                      Offer relevant functionality for each user segment
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* 04 USERS */}
            <Section id="users">
              <SectionHeading num="04" title="Users" />
              <Prose>
                <p>
                  We audited the wallet and community landscape — clear
                  primary actions, onboarding, cross-device nav, unified
                  architecture — and benchmarked competitors including Xapo,
                  noting how well-established players target by-products to
                  specific segments and recover analog money behaviors
                  digitally.
                </p>
              </Prose>
              <div className="mt-10">
                <CaseStudyPlaceholder
                  ratio="3 / 2"
                  label="Benchmark table + competitor UI comparison grid. 3:2. ripio-benchmark-table.jpg"
                />
              </div>

              <div className="mt-16">
                <Prose>
                  <p>
                    We segmented users with Jobs to Be Done, crossing three
                    parameters: motivation for money transactions, type of
                    crypto transactions, and level of crypto knowledge.
                  </p>
                </Prose>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyPlaceholder
                  ratio="16 / 9"
                  label="JTBD survey screenshot. 16:9. ripio-jtbd-survey.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 9"
                  label="Sticky-note research wall photo. 16:9. ripio-research-wall.jpg"
                />
              </div>

              <div className="mt-16">
                <h3 className="mb-6 text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  Proto-personas
                </h3>
                <PersonaChart />
              </div>
              <div className="mt-10">
                <CaseStudyPlaceholder
                  ratio="16 / 9"
                  label="Full persona sticky-note board. 16:9. ripio-personas-board.jpg"
                />
              </div>
            </Section>

            {/* 05 PROCESS / DISCOVERY */}
            <Section id="process">
              <SectionHeading num="05" title="Process / Discovery" />
              <Prose>
                <p>
                  Their behaviors speak to their needs, but their actions
                  are limited by their level of crypto knowledge — and what
                  they do increases as what they know increases.
                </p>
              </Prose>
              <div className="mt-10">
                <CaseStudyPlaceholder
                  ratio="21 / 9"
                  label="Full information architecture / sitemap diagram, full-width. 21:9. ripio-information-architecture.jpg"
                />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <CaseStudyPlaceholder
                  ratio="1 / 1"
                  label="Hand-drawn onboarding sketch. 1:1. ripio-onboarding-sketch-1.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="1 / 1"
                  label="Hand-drawn onboarding sketch. 1:1. ripio-onboarding-sketch-2.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="1 / 1"
                  label="Hand-drawn onboarding sketch. 1:1. ripio-onboarding-sketch-3.jpg"
                />
              </div>
            </Section>

            {/* 06 WHAT WE BUILT */}
            <Section id="what-we-built">
              <SectionHeading num="06" title="What We Built" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {features.map(({ title, tag, body }) => (
                  <div
                    key={title}
                    className="flex flex-col rounded-[10px] border border-[#1A1A1A]/15 p-5"
                  >
                    <span
                      className={`inline-block w-fit rounded-full px-2.5 py-1 text-xs font-normal uppercase tracking-wide ${
                        tag === "New"
                          ? "bg-[#1A1A1A] text-[#F6F5EF]"
                          : "border border-[#1A1A1A]/25 text-[#1A1A1A]"
                      }`}
                    >
                      {tag}
                    </span>
                    <h3 className="mt-3 text-base font-normal text-[#1A1A1A]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-[20px] font-normal text-[#1A1A1A]/70">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 07 FEATURED FLOWS */}
            <Section id="featured-flows">
              <SectionHeading num="07" title="Featured Flows" />

              {/* ① Onboarding + Validation */}
              <div className="max-w-[640px]">
                <h3 className="text-[22px] font-normal leading-tight text-[#1A1A1A]">
                  ① Onboarding + Validation
                  <span className="mt-1 block text-xs uppercase tracking-wide text-[#1A1A1A]/50">
                    the trust arc
                  </span>
                </h3>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <span className="uppercase tracking-wide text-[#1A1A1A]/50">
                    Objective —{" "}
                  </span>
                  get a first-time user through account validation and a
                  welcome tour without scaring them off.
                </p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>Validate account to start trading</li>
                  <li>Learn platform via welcome tour</li>
                  <li>
                    Enter personal info → residence → phone → ID, one step
                    at a time
                  </li>
                </ul>
              </div>
              <div className="mt-8 max-w-[360px]">
                <CaseStudyPlaceholder
                  ratio="9 / 16"
                  label="ONE GIF — onboarding → questionnaire → 4-step ID validation. 9:16, ~4–6 sec loop. ripio-trust-flow.gif"
                />
              </div>

              {/* ② Wallet + Dashboard */}
              <div className="mt-20 max-w-[640px]">
                <h3 className="text-[22px] font-normal leading-tight text-[#1A1A1A]">
                  ② Wallet + Dashboard
                  <span className="mt-1 block text-xs uppercase tracking-wide text-[#1A1A1A]/50">
                    the core rebuild
                  </span>
                </h3>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <span className="uppercase tracking-wide text-[#1A1A1A]/50">
                    Objective —{" "}
                  </span>
                  one clear home for pesos and crypto holdings.
                </p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>Access / buy / sell / send / receive each asset</li>
                  <li>View movements and status at a glance</li>
                </ul>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  Every transactional flow — buy, sell, cash in, cash out —
                  followed the same one-step-at-a-time logic.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Desktop dashboard. 16:10. ripio-dashboard.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Desktop wallet with coin cards. 16:10. ripio-wallet-desktop.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="9 / 16"
                  label="Mobile wallet with swipe cards. 9:16. ripio-wallet-mobile.jpg"
                />
              </div>

              {/* ③ Marketplace */}
              <div className="mt-20 max-w-[640px]">
                <h3 className="text-[22px] font-normal leading-tight text-[#1A1A1A]">
                  ③ Marketplace
                  <span className="mt-1 block text-xs uppercase tracking-wide text-[#1A1A1A]/50">
                    the differentiator
                  </span>
                </h3>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <span className="uppercase tracking-wide text-[#1A1A1A]/50">
                    Objective —{" "}
                  </span>
                  first-of-its-kind space to discover, buy, sell
                  non-fungible collectibles directly in pesos.
                </p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>Explore catalog and collections</li>
                  <li>Add / remove favorites</li>
                </ul>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Illustrated collectible catalog grid. 16:10. ripio-marketplace-catalog.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="9 / 16"
                  label="Individual collectible detail page. 9:16. ripio-marketplace-detail.jpg"
                />
              </div>
            </Section>

            {/* 08 ALSO PART OF THE PLATFORM */}
            <Section id="platform">
              <SectionHeading num="08" title="Also Part of the Platform" />
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <CaseStudyPlaceholder
                    ratio="1 / 1"
                    label="ripio-platform-login.jpg"
                  />
                  <p className="mt-3 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                    Login / Signup — icon-based validation, new visual
                    hierarchy.
                  </p>
                </div>
                <div>
                  <CaseStudyPlaceholder
                    ratio="1 / 1"
                    label="ripio-platform-catalog.jpg"
                  />
                  <p className="mt-3 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                    Crypto catalog &amp; landing — discovery and price info
                    per currency, plus logged-out landing pages.
                  </p>
                </div>
                <div>
                  <CaseStudyPlaceholder
                    ratio="1 / 1"
                    label="ripio-platform-credits.jpg"
                  />
                  <p className="mt-3 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                    Credits — request-and-manage flow, amount and type
                    assigned by scoring.
                  </p>
                </div>
              </div>
            </Section>

            {/* 09 DESIGN SYSTEM */}
            <Section id="design-system">
              <SectionHeading num="09" title="Design System" />
              <Prose>
                <p>
                  Everything above ran on a modular design system —
                  integral, flexible, and scalable enough to adapt across
                  every Ripio product and platform.
                </p>
              </Prose>
              <div className="mt-10">
                <CaseStudyPlaceholder
                  ratio="16 / 9"
                  label="Component / UI kit sheet. 16:9. ripio-design-system.jpg"
                />
              </div>
            </Section>

            {/* 10 REFLECTION / OUTCOME */}
            <Section id="reflection">
              <SectionHeading num="10" title="Reflection / Outcome" />
              <Prose>
                <p>
                  <span className="uppercase tracking-wide text-[#1A1A1A]/50">
                    Outcome.{" "}
                  </span>
                  The redesigned KYC flow increased conversion, per
                  Aerolab&apos;s own case study of the project. Exact uplift
                  wasn&apos;t publicly disclosed.
                </p>
                <p className="mt-5">
                  Argentina didn&apos;t need another app for crypto
                  insiders. It needed a bridge — between millions of people
                  who already trusted (and needed) a currency they could
                  count on, and a technology they&apos;d been taught to
                  fear. That&apos;s what we built Ripio into.
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
