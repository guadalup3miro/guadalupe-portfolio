import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySectionNav from "@/components/case-study-section-nav";
import CaseStudyPlaceholder from "@/components/case-study-placeholder";
import PrototypeEmbed from "@/components/prototype-embed";
import ZoomableImage from "@/components/zoomable-image";
import { isUnlocked } from "@/lib/tax-engine-gate";
import { unlock } from "./actions";

export const metadata: Metadata = {
  title: "Apaleo — Tax Engine 2.0 — Guadalupe Miró",
  description:
    "Turning a patchwork tax system into one configurable platform.",
  robots: { index: false, follow: false },
};

const stats = [
  { label: "Role", value: "Senior Product Designer" },
  { label: "Team", value: "Me + 1 PM, engineering" },
  { label: "Tools", value: "Claude, Cursor, Figma" },
  { label: "Timeline", value: "4 months" },
  { label: "Status", value: "In development, heading into beta" },
];

const summary = [
  {
    label: "Problem",
    text: "Tax logic had grown market by market for years, and nobody could explain end to end what tax applied where, or how.",
  },
  {
    label: "What I did",
    text: "Turned the problem into a spec with Claude, ran the definition workshops with our PM, and designed and prototyped the new tax engine in code.",
  },
  {
    label: "Outcome",
    text: "One configurable model where every tax answers three questions, and a working prototype the team tested internally.",
  },
];

const sections = [
  { id: "problem", num: "01", label: "The problem" },
  { id: "approach", num: "02", label: "My approach" },
  { id: "interaction-model", num: "03", label: "Interaction model" },
  { id: "pm", num: "04", label: "Working with the PM" },
  { id: "production-ui", num: "05", label: "Production-ready UI" },
  { id: "where-it-stands", num: "06", label: "Where it stands" },
];

// Numbered eyebrow ("01 — THE PROBLEM", monospace) + section title below.
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

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base leading-[22px] font-normal text-[#1A1A1A]">
      {children}
    </div>
  );
}

function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-[calc(var(--header-height)-2rem)] py-14">
      {children}
    </section>
  );
}

// One interaction-model option: bold name + description.
function Option({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <p className="text-base leading-[22px] font-normal text-[#1A1A1A]">
      <span className="font-bold">{name}</span> — {children}
    </p>
  );
}

function BackLink({ label }: { label: string }) {
  return (
    <Link
      href="/"
      className="text-xs uppercase tracking-wide text-[#1A1A1A]/50 transition-opacity hover:text-[#1A1A1A]"
    >
      {label}
    </Link>
  );
}

// Shown instead of the case study until the shared password is entered.
function PasswordGate({ error }: { error: boolean }) {
  return (
    <article className="w-full pb-24 text-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="pt-8">
          <BackLink label="← Back" />
        </div>
        <div className="mx-auto mt-24 max-w-[420px]">
          <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
            Apaleo — Tax Engine 2.0
          </p>
          <h1 className="mt-4 text-[34px] font-normal leading-[1.15]">
            This case study is password protected.
          </h1>
          <p className="mt-4 text-base leading-[22px]">
            The project is still in development and not public yet. Enter the
            password to view it.
          </p>
          <form action={unlock} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              autoComplete="current-password"
              placeholder="Password"
              aria-invalid={error || undefined}
              aria-describedby={error ? "password-error" : undefined}
              className="min-w-0 flex-1 rounded-[10px] border border-[#1A1A1A]/20 bg-transparent px-4 py-3 text-base outline-none focus:border-[#1A1A1A]"
            />
            <button
              type="submit"
              className="rounded-[10px] bg-[#1A1A1A] px-6 py-3 text-sm uppercase tracking-wide text-white transition-opacity hover:opacity-80"
            >
              View
            </button>
          </form>
          {error && (
            <p id="password-error" className="mt-3 text-sm text-[#B4281C]">
              That password didn&apos;t work. Try again.
            </p>
          )}
          <p className="mt-4 text-base leading-[22px]">
            Don&apos;t have the password?{" "}
            <a
              href="mailto:guadamiro@gmail.com?subject=Password%20for%20Tax%20Engine%202.0%20case%20study"
              className="underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              Request access
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}

export default async function ApaleoTaxEnginePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (!(await isUnlocked())) {
    const { error } = await searchParams;
    return <PasswordGate error={error === "1"} />;
  }

  return (
    <article className="w-full pb-24 text-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="pt-8">
          <BackLink label="← Back" />
        </div>

        <div className="mt-10 lg:grid lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-x-16">
          <CaseStudySectionNav sections={sections} />

          <div className="min-w-0 max-w-[660px]">
            {/* HERO */}
            <header className="py-6">
              <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                Apaleo — Tax Engine 2.0
              </p>
              <h1 className="mt-4 text-[34px] font-normal leading-[1.15] text-[#1A1A1A] sm:text-[38px]">
                Turning a tax system that had grown market by market, patch by
                patch, into one configurable platform the whole team could
                actually explain.
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

              <div className="mt-10 space-y-4">
                {summary.map(({ label, text }) => (
                  <div key={label}>
                    <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                      {label}
                    </p>
                    <p className="mt-1.5 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <ZoomableImage
                  src="/images/apaleo-tax-engine/hero-tax-list.png"
                  alt="Tax engine list view in apaleo, with a City tax configured for Berlin"
                  width={2880}
                  height={1400}
                />
              </div>
            </header>

            {/* 01 THE PROBLEM */}
            <Section id="problem">
              <SectionHeading num="01" title="The problem" />
              <Prose>
                <p>
                  Apaleo&apos;s tax logic had grown case by case for years: a
                  rule added for one market, a workaround added for another.
                  Nobody could explain, end to end, what tax applied where or
                  how it was calculated. That slowed down expansion into new
                  markets and made support and compliance conversations
                  genuinely risky.
                </p>
              </Prose>
            </Section>

            {/* 02 MY APPROACH */}
            <Section id="approach">
              <SectionHeading num="02" title="My approach" />
              <Prose>
                <p>
                  I started with Claude, not Figma. I used it to turn a messy,
                  ambiguous problem into a structured spec, surfacing edge
                  cases and open questions before designing a single screen.
                  Then I built a working HTML prototype directly, tested it
                  internally with the team, and iterated on the real thing
                  instead of a static mock.
                </p>
                <p className="mt-5">
                  The reframe that made everything else possible: every tax
                  now answers three plain questions. What is it. Where does it
                  apply. How does it calculate. That became the spine of both
                  the product architecture and the interface.
                </p>
              </Prose>
            </Section>

            {/* 03 EXPLORING THE INTERACTION MODEL */}
            <Section id="interaction-model">
              <SectionHeading
                num="03"
                title="Exploring the interaction model"
              />
              <Prose>
                <p>
                  Before committing to a layout, I prototyped three ways to
                  configure a tax rule.
                </p>
              </Prose>

              <div className="mt-10">
                <Option name="Single page">
                  every section visible and editable at once. Fast to scan,
                  fast to cross-reference. Built for someone who does this
                  often.
                </Option>
              </div>
              <div className="mt-8 space-y-6">
                <ZoomableImage
                  src="/images/apaleo-tax-engine/single-page-identity.png"
                  alt="Single-page prototype, top: Identity and Tax Configuration sections"
                  width={2020}
                  height={1702}
                />
                <ZoomableImage
                  src="/images/apaleo-tax-engine/single-page-applicability.png"
                  alt="Single-page prototype, bottom: Applicability and Calculation Rules sections"
                  width={2068}
                  height={1722}
                />
              </div>

              <div className="mt-16">
                <Option name="Step wizard">
                  a guided four-step flow (Identity &amp; Tax Config →
                  Applicability → Calculation Rules → Review &amp; Confirm),
                  ending in a full read-only summary before saving. Built for
                  first-time setup, when you need the guardrails.
                </Option>
              </div>
              <div className="mt-8">
                {/* TODO(image): step wizard — one screenshot per step, or a
                    single composite showing the 4-step progression. */}
                <CaseStudyPlaceholder label="Image coming soon" />
              </div>

              <div className="mt-16">
                <Option name="Accordion">
                  sections collapse into live summaries as each one is
                  completed, and any step can be reopened for editing. A
                  middle ground between guidance and context.
                </Option>
              </div>
              <div className="mt-8">
                {/* TODO(image): accordion — one collapsed-with-summary state
                    + one expanded state. */}
                <CaseStudyPlaceholder label="Image coming soon" />
              </div>

              <div className="mt-16">
                <Prose>
                  <p>
                    We chose <span className="font-bold">single page</span>.
                    The people using this are property admins configuring tax
                    rules regularly, not once-a-year setup wizards — speed and
                    the ability to cross-reference mattered more than
                    hand-holding.
                  </p>
                </Prose>
              </div>
            </Section>

            {/* 04 WORKING WITH THE PM */}
            <Section id="pm">
              <SectionHeading num="04" title="Working with the PM" />
              <Prose>
                <p>
                  I ran the workshops with our PM that shaped the PRD: the tax
                  logic, the edge cases, what the interface needed to expose
                  and what it needed to hide. He owned the document; the
                  definition was built together, and the interaction model and
                  interface were mine.
                </p>
              </Prose>
            </Section>

            {/* 05 FROM PROTOTYPE TO PRODUCTION-READY UI */}
            <Section id="production-ui">
              <SectionHeading
                num="05"
                title="From prototype to production-ready UI"
              />
              <div>
                <Prose>
                  <p>
                    Try it below. This is the real prototype, running live.
                    Click Create tax, fill in all three sections (including
                    the rule&apos;s valid dates and night range), then save to
                    see it in the list.
                  </p>
                </Prose>
              </div>

              {/* Breaks out of the 660px text column on desktop, up to the
                  page's right edge, so the prototype gets room to breathe. */}
              <div className="mt-8 lg:w-[min(968px,calc(100vw-330px))]">
                <PrototypeEmbed
                  src="/work/apaleo-tax-engine/prototype"
                  title="Apaleo Tax Engine 2.0 — live prototype"
                />
              </div>
            </Section>

            {/* 06 WHERE IT STANDS */}
            <Section id="where-it-stands">
              <SectionHeading num="06" title="Where it stands" />
              <Prose>
                <p>
                  Tax Engine 2.0 is in development and heading into beta, so
                  there are no results to share yet. Going into beta, success
                  means faster setup when opening a new market, fewer support
                  conversations about how a tax was calculated, and admins
                  configuring rules without asking for help.
                </p>
                <p className="mt-5">
                  What this project changed for me: prototyping in code
                  instead of static mocks. Testing a working prototype with
                  the team surfaced edge cases no Figma file would have, and
                  made the tradeoffs concrete enough to decide on quickly.
                </p>
              </Prose>
            </Section>

            <div className="pt-8">
              <BackLink label="← Back to all work" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
