import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySectionNav from "@/components/case-study-section-nav";
import CaseStudyImage from "@/components/case-study-image";

export const metadata: Metadata = {
  title: "MaintainX — Procedure Creation — Guadalupe Miró",
  description:
    "Procedure creation flow for a CMMS used by frontline maintenance teams.",
};

const stats = [
  { label: "Role", value: "Senior Product Designer · First design hire" },
  { label: "Timeline", value: "May 2020 – Apr 2022" },
  {
    label: "Team",
    value: "First designer on a 6-person team; grew design to 2",
  },
  { label: "Tools", value: "Figma, FigJam" },
];

const sections = [
  { id: "overview", num: "01", label: "Overview" },
  { id: "my-role", num: "02", label: "My role" },
  { id: "problem", num: "03", label: "The problem" },
  { id: "three-ways", num: "04", label: "Three ways it showed up" },
  { id: "technician", num: "05", label: "Designed for a technician" },
  { id: "global-library", num: "06", label: "Standardization at scale" },
  { id: "two-moments", num: "07", label: "Two moments" },
  { id: "design-from-zero", num: "08", label: "Building design from zero" },
  { id: "reflection", num: "09", label: "Reflection" },
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

// Body copy — full column width, so it shares the same container as the
// images instead of sitting narrower inside it.
function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base leading-[22px] font-normal text-[#1A1A1A]">
      {children}
    </div>
  );
}

// One numbered section: id'd for the left rail. The scroll margin is the
// header height minus 2rem, which with the 3.5rem top padding lands the
// section's label 1.5rem below the sticky site header on an anchor jump.
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

export default function MaintainXPage() {
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

          <div className="min-w-0 max-w-[660px]">
            {/* HERO */}
            <header className="py-6">
              <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                MaintainX
              </p>
              <h1 className="mt-4 text-[34px] font-normal leading-[1.15] text-[#1A1A1A] sm:text-[38px]">
                Frontline maintenance ran on paper. That doesn&apos;t scale.
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
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                      Problem
                    </p>
                    <p className="mt-1.5 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                      Frontline maintenance teams ran on paper checklists
                      that couldn&apos;t be standardized, audited, or acted
                      on.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                      What I did
                    </p>
                    <p className="mt-1.5 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                      Joined as the first designer. Designed the procedure
                      builder and field experience, built the early design
                      system, and moved the team from Sketch to Figma.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-normal uppercase tracking-wide text-[#1A1A1A]/50">
                      Outcome
                    </p>
                    <p className="mt-1.5 text-sm leading-[20px] font-normal text-[#1A1A1A]">
                      Procedures became structured, reusable data: scored
                      inspections that trigger follow-up work, shared across
                      every site from one global library.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <CaseStudyImage
                  src="/images/maintainx/procedure-editor.png"
                  alt="Procedure editor with sections, fields, and scoring"
                  width={2880}
                  height={1800}
                  shadow={false}
                />
              </div>
            </header>

            {/* 01 OVERVIEW */}
            <Section id="overview">
              <SectionHeading num="01" title="Overview" />
              <Prose>
                <p>
                  This wasn&apos;t about making paper look like an app. It was
                  about giving frontline teams — the people actually keeping
                  equipment running and workplaces safe — a system precise
                  enough for compliance, standardized enough to trust
                  everywhere, and simple enough to actually get used every
                  single day, gloves and all.
                </p>
                <p className="mt-5">
                  MaintainX is a CMMS — maintenance and asset management
                  software — for the people keeping factories, hotels, and
                  facilities running: technicians doing inspections,
                  preventive maintenance, safety checks. For decades, the
                  instructions guiding that work lived on paper: SOPs,
                  checklists, inspection sheets, often specific to one site,
                  rarely updated, and impossible to standardize across a
                  company with multiple locations.
                </p>
              </Prose>
            </Section>

            {/* 02 MY ROLE */}
            <Section id="my-role">
              <SectionHeading num="02" title="My role" />
              <Prose>
                <p>
                  I joined MaintainX as its first product designer, on a team
                  of six. There was no design process, no component library,
                  and no one to hand anything off to. Over two years I
                  designed core product surfaces like the procedure builder,
                  set up the early design system, led the move from Sketch to
                  Figma, and helped grow design to a team of two while the
                  company scaled past 200 people. This case study focuses on
                  procedures, the part of the product I spent the most time
                  shaping.
                </p>
              </Prose>
            </Section>

            {/* 03 THE PROBLEM */}
            <Section id="problem">
              <SectionHeading
                num="03"
                title={
                  'Not just "digitize a checklist." Build the system underneath it.'
                }
              />
              <Prose>
                <p>
                  A procedure needed to be more than a PDF on a phone. It had
                  to support real structured data: checkboxes, multiple
                  choice, inspection checks, conditional logic, and scoring —
                  so a completed procedure could actually do something. If an
                  inspection score came back too low, the system could
                  automatically trigger a corrective action, instead of a bad
                  result quietly sitting in a filing cabinet until something
                  broke.
                </p>
              </Prose>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyImage
                  src="/images/maintainx/procedure-hub-landing.png"
                  alt="MaintainX Procedure Hub — public library of procedure templates"
                  width={2682}
                  height={1442}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/procedure-hub-browse.png"
                  alt="Procedure templates browsable by industry"
                  width={2688}
                  height={1460}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/conditional-logic-nested.png"
                  alt="Nested conditional logic on a numeric field"
                  width={2880}
                  height={2642}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/logic-add-field.png"
                  alt="Adding a choice field inside conditional logic"
                  width={2880}
                  height={1800}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/procedure-preview-score.png"
                  alt="Procedure preview showing a max score"
                  width={2880}
                  height={1800}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/anomaly-flagging.webp"
                  alt="A reading outside the expected range flagged as an anomaly"
                  width={1248}
                  height={800}
                  shadow={false}
                />
              </div>
            </Section>

            {/* 04 THREE WAYS THIS SHOWED UP */}
            <Section id="three-ways">
              <SectionHeading
                num="04"
                title="Three ways this showed up in the real world"
              />

              <Prose>
                <p>
                  <span className="font-normal">Preventive maintenance</span>{" "}
                  — scheduled, recurring inspections designed to catch a
                  failure before it causes downtime. The procedure had to make
                  it obvious, in the moment, whether a reading was in range —
                  and automatically flag what needed to happen next if it
                  wasn&apos;t.
                </p>
              </Prose>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyImage
                  src="/images/maintainx/preventive-work-orders.webp"
                  alt="Preventive maintenance work order history and schedule"
                  width={1248}
                  height={800}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/reading-triggers-pm.webp"
                  alt="An out-of-range reading automatically triggering a PM work order"
                  width={1200}
                  height={780}
                  shadow={false}
                />
              </div>

              <div className="mt-16">
                <Prose>
                  <p>
                    <span className="font-normal">
                      Checklists &amp; inspections
                    </span>{" "}
                    — safety and regulatory compliance work, where the
                    procedure itself becomes the audit trail. Every checkbox
                    and signature had to be trustworthy enough to hold up if a
                    regulator ever asked for it.
                  </p>
                </Prose>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyImage
                  src="/images/maintainx/procedures-checklist-step.webp"
                  alt="A Pass, Flag, or Fail inspection step"
                  width={1248}
                  height={800}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/global-procedure-checklist.webp"
                  alt="A safety precautions checklist on a global procedure"
                  width={1248}
                  height={800}
                  shadow={false}
                />
              </div>

              <div className="mt-16">
                <Prose>
                  <p>
                    <span className="font-normal">Facility management</span> —
                    the same procedure engine, applied to the day-to-day work
                    of keeping a building running, not just industrial
                    equipment.
                  </p>
                </Prose>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyImage
                  src="/images/maintainx/work-order-signature.webp"
                  alt="A work order with a required signature and activity log"
                  width={1250}
                  height={800}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/new-work-order.webp"
                  alt="A new work order linked to a procedure from the library"
                  width={1250}
                  height={800}
                  shadow={false}
                />
              </div>
            </Section>

            {/* 05 DESIGNED FOR A TECHNICIAN */}
            <Section id="technician">
              <SectionHeading
                num="05"
                title="Designed for a technician, not a desk"
              />
              <Prose>
                <p>
                  Every one of these had to work for someone standing at a
                  machine, often wearing gloves, mid-task — not sitting at a
                  computer. That constraint shaped everything: large tap
                  targets, one clear action per step, minimal typing, and a
                  flow that could survive being interrupted and picked back
                  up.
                </p>
              </Prose>
              <div className="mt-10">
                <CaseStudyImage
                  src="/images/maintainx/simple-field-editor.png"
                  alt="A single, simple text field in the procedure editor"
                  width={2880}
                  height={1800}
                  shadow={false}
                />
              </div>
            </Section>

            {/* 06 GLOBAL PROCEDURE LIBRARY */}
            <Section id="global-library">
              <SectionHeading
                num="06"
                title="Built for standardization at scale"
              />
              <Prose>
                <p>
                  The bigger unlock was the Global Procedure Library: a single
                  procedure, authored once by a safety manager or global
                  leader, could be shared and reused across every site in an
                  organization — instead of every location reinventing (and
                  slightly misremembering) the same safety checklist.
                </p>
              </Prose>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyImage
                  src="/images/maintainx/create-procedure-options.png"
                  alt="Creating a new procedure from the Global Library"
                  width={2880}
                  height={1800}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/procedure-library.png"
                  alt="The Procedure Library with an Explore Global Library option"
                  width={2880}
                  height={1800}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/template-library-edit-modal.png"
                  alt="A prompt to edit a shared template from the Global Library"
                  width={2880}
                  height={1800}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/procedure-library-usage.png"
                  alt="Usage performance across work orders generated from a procedure"
                  width={2880}
                  height={1800}
                  shadow={false}
                />
              </div>
            </Section>

            {/* 07 DESIGNING FOR TWO MOMENTS */}
            <Section id="two-moments">
              <SectionHeading
                num="07"
                title="Designing for two very different moments"
              />

              <div>
                <h3 className="text-[22px] font-normal leading-tight text-[#1A1A1A]">
                  Creating a procedure
                  <span className="mt-1 block text-xs uppercase tracking-wide text-[#1A1A1A]/50">
                    the authoring tool
                  </span>
                </h3>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  This meant designing for two distinct experiences that had
                  to feel like one connected system: creating a procedure — an
                  authoring tool flexible enough to define precise,
                  scoring-aware steps, without needing to think like a
                  developer.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyImage
                  src="/images/maintainx/new-procedure-modal.png"
                  alt="Naming and describing a new procedure"
                  width={2880}
                  height={1800}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/procedure-settings.png"
                  alt="Procedure settings: tags, teams in charge, recommended frequency"
                  width={2880}
                  height={1800}
                  shadow={false}
                />
              </div>

              <div className="mt-20">
                <h3 className="text-[22px] font-normal leading-tight text-[#1A1A1A]">
                  Running a procedure
                  <span className="mt-1 block text-xs uppercase tracking-wide text-[#1A1A1A]/50">
                    the field experience
                  </span>
                </h3>
                <p className="mt-5 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  And running a procedure — a guided, step-by-step field
                  experience, simple enough to complete accurately without
                  slowing anyone down.
                </p>
              </div>
              <div className="mt-8">
                <CaseStudyImage
                  src="/images/maintainx/procedure-hub-detail.png"
                  alt="A public procedure page with a send-to-phone option"
                  width={2664}
                  height={1498}
                  shadow={false}
                />
              </div>
            </Section>

            {/* 08 BUILDING DESIGN FROM ZERO */}
            <Section id="design-from-zero">
              <SectionHeading num="08" title="Building design from zero" />
              <Prose>
                <p>
                  Being the first designer meant the job was bigger than
                  screens. I built the first shared components so engineers
                  could ship consistent UI without waiting on me for every
                  screen, moved all design work from Sketch to Figma so
                  product and engineering could see and comment on work in
                  one place, and set the habits the team grew into: how
                  design gets reviewed, how specs get handed off, how
                  decisions get documented. When the second designer joined,
                  they started from a system, not a blank file.
                </p>
              </Prose>
            </Section>

            {/* 09 REFLECTION */}
            <Section id="reflection">
              <SectionHeading num="09" title="Reflection" />
              <Prose>
                <p>
                  <span className="font-bold">Outcome.</span>{" "}
                  Procedures went from static paper to structured data:
                  scored, conditional, reusable across sites, and able to
                  trigger the next piece of work on their own.
                </p>
              </Prose>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyImage
                  src="/images/maintainx/inspection-stats.webp"
                  alt="Inspection completion stats: pass, flag, fail rates"
                  width={1248}
                  height={800}
                  shadow={false}
                />
                <CaseStudyImage
                  src="/images/maintainx/mtbf-dashboard.webp"
                  alt="Mean time between failures dashboard"
                  width={1200}
                  height={768}
                  shadow={false}
                />
              </div>
              <p className="mt-3 text-sm leading-[20px] font-normal text-[#1A1A1A]/70">
                Reporting I designed so teams could see results, not just
                record them: inspection completion and scores, and mean time
                between failures per asset.
              </p>
              <div className="mt-10">
                <p className="text-base leading-[22px] font-bold text-[#1A1A1A]">
                  What I&apos;d do differently
                </p>
                <p className="mt-4 text-base leading-[22px] font-normal text-[#1A1A1A]">
                  Treat the design system as its own project from day one. I
                  built it alongside feature work, because that&apos;s what a
                  six-person startup needed at the time. But the earlier a
                  system exists, the less every new screen has to be
                  reconciled with it later, and the faster a growing team can
                  move without a designer in every conversation.
                </p>
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
  );
}
