import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySectionNav from "@/components/case-study-section-nav";
import CaseStudyImage from "@/components/case-study-image";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Ripio — Guadalupe Miró",
  description: "Crypto exchange — wallet and trading experience.",
};

const stats = [
  { label: "Role", value: "Lead Product Designer" },
  { label: "Timeline", value: "Oct 2018 – Mar 2019" },
  { label: "Team", value: "Me (lead), 1 Product Designer, 1 Project Manager" },
  { label: "Tools", value: "Sketch, InVision, Mural, Whimsical" },
];

// Project summary figures are Aerolab's own published numbers for this
// engagement (aerolab.co/ripio) — real, not estimated.
const summary = [
  { label: "Team", value: "Me (lead), 1 Product Designer, 1 Project Manager" },
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
  { id: "design-system", num: "08", label: "Design System" },
  { id: "reflection", num: "09", label: "Reflection" },
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

// Numbered eyebrow ("01 — OVERVIEW", monospace) + section title below.
function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
        {num} — {title}
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

// Body copy — full column width, so it shares the same container as the
// images instead of sitting narrower inside it.
function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base leading-[22px] font-normal text-[#1A1A1A]">
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
    <>
      <Header />
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

          <div className="min-w-0 max-w-[660px]">
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
                <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  At a glance
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs font-normal text-[#1A1A1A]/50">
                      Problem
                    </p>
                    <p className="mt-1.5 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                      Crypto could help Argentinians protect their
                      savings, but nobody had made it easy to use or to
                      trust.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-normal text-[#1A1A1A]/50">
                      What I did
                    </p>
                    <p className="mt-1.5 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                      Led design end to end for 6 months. Rebuilt the web
                      wallet, onboarding, credits, catalog and
                      marketplace, plus the UI kit behind them.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-normal text-[#1A1A1A]/50">
                      Outcome
                    </p>
                    <p className="mt-1.5 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                      Everything shipped.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <CaseStudyImage
                  src="/images/ripio/hero-dashboard-catalog.jpg"
                  alt="Ripio dashboard and crypto catalog"
                  width={2880}
                  height={1458}
                  shadow={false}
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
                  This didn&apos;t start as a redesign. It started as a
                  one-month discovery to prototype a small MVP. But
                  discovery showed that a wallet disconnected from
                  everything else wouldn&apos;t solve the real problem.
                  Ripio needed a connected ecosystem, not just a better
                  wallet. We made the case, Ripio agreed, and the project
                  grew into rebuilding the entire web wallet: every
                  transactional flow, onboarding and identity
                  verification, credits, the crypto catalog and
                  marketplace, and the UI kit it all ran on.
                </p>
              </Prose>
              <div className="mt-10">
                <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  My role
                </p>
                <p className="mt-4 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  I led the design end to end, from discovery to final UI.
                  I ran the process, designed every flow in this case
                  study, and facilitated workshops with Ripio&apos;s CEO
                  to define the personas, prioritize the flows and make
                  the key product decisions together.
                </p>
              </div>
            </Section>

            {/* 02 THE PRODUCT */}
            <Section id="product">
              <SectionHeading num="02" title="The Product" />
              <Prose>
                <p>
                  In Argentina, with constant inflation, crypto was a
                  real way for ordinary people to protect their savings.
                  But nobody was solving the obvious problem: most
                  people had no idea how to use it. Digital wallets were
                  still new, and people didn&apos;t trust them. The bar
                  we set was simple: using Ripio should feel as familiar
                  as using your home banking.
                </p>
                <p className="mt-5">
                  The problem wasn&apos;t a lack of features. Buying,
                  selling, credits, services, exchange: it was all there.
                  But nothing told people what to do first, each section
                  worked on its own, and the whole experience assumed you
                  already understood crypto. For the people Ripio wanted
                  to reach, that was the real barrier. Not the technology,
                  but trusting something they didn&apos;t understand.
                </p>
              </Prose>
              <div className="mt-10">
                <CaseStudyImage
                  src="/images/ripio/before-old-wallet.jpg"
                  alt="Old Ripio web wallet — sidebar nav and Rapipago top-up flow"
                  width={3944}
                  height={2750}
                  shadow={false}
                />
              </div>
            </Section>

            {/* 03 GOALS */}
            <Section id="goals">
              <SectionHeading num="03" title="Goals" />
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
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
              <div className="mt-10">
                <CaseStudyImage
                  src="/images/ripio/benchmark-table.jpg"
                  alt="Benchmark table and competitor UI comparison grid"
                  width={4440}
                  height={2008}
                  shadow={false}
                />
              </div>

              <div className="mt-10">
                <CaseStudyImage
                  src="/images/ripio/research-wall.gif"
                  alt="Sticky-note research wall"
                  width={1448}
                  height={355}
                  shadow={false}
                  unoptimized
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
              <div className="mt-10">
                <CaseStudyImage
                  src="/images/ripio/jtbd-survey.jpg"
                  alt="JTBD survey screenshot"
                  width={4440}
                  height={2750}
                  shadow={false}
                />
              </div>

              <div className="mt-16">
                <h3 className="mb-6 text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  Proto-personas
                </h3>
                <PersonaChart />
              </div>
              <div className="mt-16">
                <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  What we discovered
                </p>
                <div className="mt-4 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <p>
                    People shouldn&apos;t have to become crypto experts to
                    reach their goals. Our job was to shorten the learning
                    curve and lower the cognitive effort at every step.
                  </p>
                  <p className="mt-5">
                    The MVP focused on phase 1: Newbies, Consumers and
                    Financers. The more expert profiles came in later
                    phases. The self-rated knowledge question (low,
                    intermediate, high) became part of onboarding, so the
                    product could adapt to each level from the first
                    session.
                  </p>
                  <p className="mt-5">
                    The personas also shaped the roadmap. Each part of
                    the ecosystem was built for a different profile:
                    buying and saving crypto for Newbies and Consumers,
                    the core of the MVP. Credits for Financers, offering
                    something many people couldn&apos;t get from a
                    regular bank. And the marketplace for the niche that
                    already used crypto wallets, like the Curious and
                    the Anarcho-capitalists. That&apos;s why the
                    marketplace came later. It mattered, but it
                    wasn&apos;t the main focus.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <CaseStudyImage
                  src="/images/ripio/personas-board.jpg"
                  alt="Full persona sticky-note board"
                  width={2220}
                  height={767}
                  shadow={false}
                />
              </div>
            </Section>

            {/* 05 PROCESS / DISCOVERY */}
            <Section id="process">
              <SectionHeading num="05" title="Process / Discovery" />
              <Prose>
                <p>
                  We started with an audit of the wallet and community,
                  looking at primary actions, onboarding, cross-device
                  navigation and architecture. We also benchmarked
                  competitors like Xapo, which targeted specific
                  products at specific segments and translated familiar
                  money habits into digital ones.
                </p>
                <p className="mt-5">
                  We rebuilt the information architecture from scratch,
                  mapping every section for users with and without an
                  account, so the product logic was clear before any
                  screen was drawn.
                </p>
              </Prose>
              <div className="mt-10">
                <CaseStudyImage
                  src="/images/ripio/onboarding-sketch-1.jpg"
                  alt="Hand-drawn onboarding sketch"
                  width={1696}
                  height={1696}
                  shadow={false}
                />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyImage
                  src="/images/ripio/onboarding-sketch-2.jpg"
                  alt="Hand-drawn onboarding sketch"
                  width={1696}
                  height={1696}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/ripio/onboarding-sketch-3.jpg"
                  alt="Hand-drawn onboarding sketch"
                  width={1696}
                  height={1696}
                  shadow={false}
                />
              </div>
              <Prose>
                <p className="mt-8">
                  From there we sketched the key screens by hand, moved to
                  lo-fi wireframes to test the flows, and only then went
                  to high fidelity.
                </p>
              </Prose>
              <div className="mt-10">
                <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  What testing showed
                </p>
                <p className="mt-4 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  People didn&apos;t know how to load crypto, where to
                  load it from, or even why they would. The new flows
                  answer those three questions up front, and when we
                  tested them with users, they found them clearly easier
                  to use.
                </p>
              </div>
              <div className="mt-10">
                <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  Three principles
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>
                    <span className="font-bold">Integral:</span> every
                    Ripio product in one place, organically and with
                    sense.
                  </li>
                  <li>
                    <span className="font-bold">Flexible:</span> a modular
                    design system that adapts to different platforms and
                    products.
                  </li>
                  <li>
                    <span className="font-bold">Scalable:</span> a
                    permeable structure that lets the product grow at
                    different levels.
                  </li>
                </ul>
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

              {/* ① Wallet + Dashboard */}
              <div>
                <h3 className="text-[22px] font-normal leading-tight text-[#1A1A1A]">
                  Wallet + Dashboard
                </h3>
                <p className="mt-2 text-base leading-[22px] font-bold text-[#1A1A1A]">
                  The core rebuild
                </p>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  One clear home for pesos and crypto holdings. Every
                  transactional flow: buy, sell, cash in, cash out,
                  followed the same one-step-at-a-time logic.
                </p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>Access / buy / sell / send / receive each asset</li>
                  <li>View movements and status at a glance</li>
                  <li>
                    Discover new products relevant to each user&apos;s
                    profile
                  </li>
                </ul>
              </div>
              <div className="mt-8 space-y-6">
                <div>
                  <CaseStudyImage
                    src="/images/ripio/cargarsaldo.gif"
                    alt="Cash in flow — amount, method, fees and limits"
                    width={1348}
                    height={955}
                    shadow={false}
                    unoptimized
                  />
                  <p className="mt-3 text-sm leading-[20px] font-normal text-[#1A1A1A]/70">
                    Cash in. Amount first, then method, with fees and
                    limits visible before you commit.
                  </p>
                </div>
                <div>
                  <CaseStudyImage
                    src="/images/ripio/sellbtc.gif"
                    alt="Selling BTC — from wallet to amount, destination and receipt"
                    width={1348}
                    height={955}
                    shadow={false}
                    unoptimized
                  />
                  <p className="mt-3 text-sm leading-[20px] font-normal text-[#1A1A1A]/70">
                    Selling BTC. From the wallet to amount, destination
                    and receipt.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  Key decisions
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>
                    One step, one action at a time, to reduce cognitive
                    load
                  </li>
                  <li>
                    Price and full breakdown shown before confirming, so
                    there are no surprises
                  </li>
                  <li>Every CTA says what happens next</li>
                  <li>
                    Fees and limits visible before choosing a payment
                    method
                  </li>
                  <li>
                    Payment methods as expandable cards, so new ones can
                    be added without redesigning the flow
                  </li>
                </ul>
              </div>

              {/* ② Onboarding + Validation */}
              <div className="mt-20">
                <h3 className="text-[22px] font-normal leading-tight text-[#1A1A1A]">
                  Onboarding + Validation
                </h3>
                <p className="mt-2 text-base leading-[22px] font-bold text-[#1A1A1A]">
                  The trust arc
                </p>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  Get a first-time user through account validation and a
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
              <div className="mt-8 space-y-6">
                <CaseStudyImage
                  src="/images/ripio/trust-flow.gif"
                  alt="Onboarding, questionnaire, and 4-step ID validation flow"
                  width={1348}
                  height={955}
                  shadow={false}
                  unoptimized
                />
                <CaseStudyImage
                  src="/images/ripio/verification.gif"
                  alt="Account activation and phone validation with a one-time code"
                  width={1348}
                  height={955}
                  shadow={false}
                  unoptimized
                />
              </div>
              <p className="mt-3 text-sm leading-[20px] font-normal text-[#1A1A1A]/70">
                Lo-fi prototype. Account activation and phone validation
                with a one-time code.
              </p>
              <div className="mt-8">
                <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  Key decisions
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>
                    Validation split into four short steps, so no single
                    screen asks too much
                  </li>
                  <li>
                    A knowledge questionnaire up front, so the experience
                    adapts to each user
                  </li>
                  <li>
                    A welcome tour that teaches by showing the priority
                    actions
                  </li>
                </ul>
              </div>

              {/* ③ Marketplace */}
              <div className="mt-20">
                <h3 className="text-[22px] font-normal leading-tight text-[#1A1A1A]">
                  Marketplace
                </h3>
                <p className="mt-2 text-base leading-[22px] font-bold text-[#1A1A1A]">
                  The differentiator
                </p>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  A new space to discover, buy and sell non-fungible
                  collectibles directly in pesos.
                </p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>Explore catalog and collections</li>
                  <li>Add / remove favorites</li>
                  <li>
                    See each collectible&apos;s bio, owner, price and
                    details, then share it or add it to a wishlist
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <CaseStudyImage
                  src="/images/ripio/catalog.gif"
                  alt="Browsing the collectible catalog with price and owner info"
                  width={766}
                  height={571}
                  shadow={false}
                  unoptimized
                />
                <p className="mt-3 text-sm leading-[20px] font-normal text-[#1A1A1A]/70">
                  Browsing collections like Cryptokitties, with price and
                  owner at a glance.
                </p>
              </div>
              <p className="mt-8 text-base leading-[22px] font-normal text-[#1A1A1A]">
                Ripio wanted to offer crypto products beyond coins: assets,
                collectible tokens, and whatever came next. The
                marketplace gave them a home, where people could
                discover, buy and sell them directly in pesos. It was
                built for a different audience: people who already used
                crypto wallets. A niche, but a way to reach users that a
                wallet made for ordinary people wouldn&apos;t attract on
                its own.
              </p>
              <div className="mt-8">
                <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  Key decisions
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>The main action is always visible, on every screen</li>
                  <li>
                    Each collectible gets its own page: bio, owner, price
                    and details
                  </li>
                  <li>
                    Favorites and sharing, to turn browsing into coming
                    back
                  </li>
                </ul>
              </div>

              {/* ④ Ripio Credits */}
              <div className="mt-20">
                <h3 className="text-[22px] font-normal leading-tight text-[#1A1A1A]">
                  Ripio Credits
                </h3>
                <p className="mt-2 text-base leading-[22px] font-bold text-[#1A1A1A]">
                  The transparency test
                </p>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  Make a credit easy to take and impossible to lose track
                  of.
                </p>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  For many people in Argentina, getting a credit from a
                  traditional bank wasn&apos;t an option. Ripio offered
                  one online, which made it a strong way into the whole
                  platform.
                </p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>
                    Scoring assigns either a personal loan or a
                    micro-credit. Users don&apos;t choose the type or the
                    amount
                  </li>
                  <li>
                    Pre-approved line with a slider, and installment
                    options compared side by side
                  </li>
                  <li>
                    Once active: available amount, status, history and
                    movements in one place
                  </li>
                  <li>Clear alerts for upcoming and overdue installments</li>
                </ul>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  Since users couldn&apos;t choose the product, the design
                  had to earn their trust by being completely clear about
                  everything else.
                </p>
              </div>
              <div className="mt-8">
                <CaseStudyImage
                  src="/images/ripio/creditos.gif"
                  alt="Requesting and managing a pre-approved credit, including overdue alerts"
                  width={1348}
                  height={955}
                  shadow={false}
                  unoptimized
                />
                <p className="mt-3 text-sm leading-[20px] font-normal text-[#1A1A1A]/70">
                  Requesting a pre-approved credit, then managing it,
                  including overdue alerts.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                  Key decisions
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <li>
                    A short, transparent request form with few actions at
                    a time
                  </li>
                  <li>
                    Payment and financing options compared side by side
                    before committing
                  </li>
                  <li>
                    Due-date alerts with the amount and the main action
                    right there
                  </li>
                </ul>
              </div>
            </Section>

            {/* 08 DESIGN SYSTEM */}
            <Section id="design-system">
              <SectionHeading num="08" title="Design System" />
              <Prose>
                <p>Everything above ran on the same system.</p>
                <p className="mt-5">
                  The UI kit covered primary and alternative CTAs with all
                  their states, inputs with icon-based validation (active,
                  typing, error, complete, disabled), a type scale for
                  desktop and mobile, and a palette anchored in
                  Ripio&apos;s purple.
                </p>
                <p className="mt-5">
                  With this many flows redesigned in parallel, consistency
                  couldn&apos;t depend on memory. We defined the base
                  components and their states first, so every new screen
                  was built from the same parts.
                </p>
              </Prose>
              <div className="mt-10">
                <CaseStudyImage
                  src="/images/ripio/design-system.jpg"
                  alt="Component and UI kit sheet"
                  width={3704}
                  height={1770}
                  shadow={false}
                />
              </div>
            </Section>

            {/* 09 REFLECTION / OUTCOME */}
            <Section id="reflection">
              <SectionHeading num="09" title="Reflection / Outcome" />
              <Prose>
                <p>
                  <span className="font-bold">Outcome.</span>{" "}
                  Everything shipped: the new dashboard, wallet,
                  onboarding and validation, credits, crypto catalog and
                  marketplace.
                </p>
              </Prose>
              <div className="mt-10">
                <p className="text-base leading-[22px] font-bold text-[#1A1A1A]">
                  What I&apos;d do differently
                </p>
                <p className="mt-4 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <span className="font-bold">Measure.</span>{" "}
                  I handed the project off at launch, so I never saw how
                  the new flows actually performed. Today I&apos;d define
                  success metrics from day one, like activation,
                  validation completion and first purchase, and stay close
                  enough to the launch to learn from them.
                </p>
                <p className="mt-4 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  <span className="font-bold">
                    Let discovery change the brief.
                  </span>{" "}
                  We were hired to prototype a small MVP. Discovery
                  showed that wouldn&apos;t solve the real problem, so we
                  made the case for a bigger scope. The most valuable
                  thing I did on this project happened before any screen
                  was designed.
                </p>
              </div>
              <Prose>
                <p className="mt-5">
                  Ripio didn&apos;t need another feature for crypto
                  insiders. It needed to feel trustworthy to people who had
                  never bought crypto. That was the bar for every screen I
                  designed.
                </p>
              </Prose>
              <div className="mt-10">
                <CaseStudyImage
                  src="/images/ripio/mac.jpg"
                  alt="Ripio on a MacBook"
                  width={1920}
                  height={1080}
                  shadow={false}
                />
              </div>
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
    </>
  );
}
