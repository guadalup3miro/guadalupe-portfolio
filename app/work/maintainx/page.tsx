import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySectionNav from "@/components/case-study-section-nav";
import CaseStudyPlaceholder from "@/components/case-study-placeholder";

export const metadata: Metadata = {
  title: "MaintainX — Procedure Creation — Guadalupe Miró",
  description:
    "Procedure creation flow for a CMMS used by frontline maintenance teams.",
};

const stats = [
  { label: "Role", value: "Senior Product Designer" },
  { label: "Timeline", value: "May 2020 – Jun 2022" },
];

const sections = [
  { id: "overview", num: "01", label: "Overview" },
  { id: "problem", num: "02", label: "The problem" },
  { id: "three-ways", num: "03", label: "Three ways it showed up" },
  { id: "technician", num: "04", label: "Designed for a technician" },
  { id: "global-library", num: "05", label: "Standardization at scale" },
  { id: "two-moments", num: "06", label: "Two moments" },
  { id: "opportunity", num: "07", label: "The opportunity" },
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

          <div className="min-w-0">
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
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Procedure editor with sections, fields, and scoring — 16:10 — maintainx-procedure-editor.jpg"
                />
              </div>
            </header>

            {/* 01 OVERVIEW */}
            <Section id="overview">
              <SectionHeading num="01" title="Overview" />
              <Prose>
                <p>
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

            {/* 02 THE PROBLEM */}
            <Section id="problem">
              <SectionHeading
                num="02"
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
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="MaintainX Procedure Hub — public library of procedure templates — 16:10 — maintainx-procedure-hub-landing.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Procedure templates browsable by industry — 16:10 — maintainx-procedure-hub-browse.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="1 / 1"
                  label="Nested conditional logic on a numeric field — 1:1 — maintainx-conditional-logic-nested.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Adding a choice field inside conditional logic — 16:10 — maintainx-logic-add-field.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Procedure preview showing a max score — 16:10 — maintainx-procedure-preview-score.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="A reading outside the expected range flagged as an anomaly — 16:10 — maintainx-anomaly-flagging.jpg"
                />
              </div>
            </Section>

            {/* 03 THREE WAYS THIS SHOWED UP */}
            <Section id="three-ways">
              <SectionHeading
                num="03"
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
                <CaseStudyPlaceholder
                  ratio="4 / 3"
                  label="Preventive maintenance work order history and schedule — 4:3 — maintainx-preventive-work-orders.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="4 / 3"
                  label="An out-of-range reading automatically triggering a PM work order — 4:3 — maintainx-reading-triggers-pm.jpg"
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
                <CaseStudyPlaceholder
                  ratio="4 / 3"
                  label="A Pass, Flag, or Fail inspection step — 4:3 — maintainx-procedures-checklist-step.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="4 / 3"
                  label="A safety precautions checklist on a global procedure — 4:3 — maintainx-global-procedure-checklist.jpg"
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
                <CaseStudyPlaceholder
                  ratio="4 / 3"
                  label="A work order with a required signature and activity log — 4:3 — maintainx-work-order-signature.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="4 / 3"
                  label="A new work order linked to a procedure from the library — 4:3 — maintainx-new-work-order.jpg"
                />
              </div>
            </Section>

            {/* 04 DESIGNED FOR A TECHNICIAN */}
            <Section id="technician">
              <SectionHeading
                num="04"
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
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="A single, simple text field in the procedure editor — 16:10 — maintainx-simple-field-editor.jpg"
                />
              </div>
            </Section>

            {/* 05 GLOBAL PROCEDURE LIBRARY */}
            <Section id="global-library">
              <SectionHeading
                num="05"
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
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Creating a new procedure from the Global Library — 16:10 — maintainx-create-procedure-options.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="The Procedure Library with an Explore Global Library option — 16:10 — maintainx-procedure-library.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="A prompt to edit a shared template from the Global Library — 16:10 — maintainx-template-library-edit-modal.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Usage performance across work orders generated from a procedure — 16:10 — maintainx-procedure-library-usage.jpg"
                />
              </div>
            </Section>

            {/* 06 DESIGNING FOR TWO MOMENTS */}
            <Section id="two-moments">
              <SectionHeading
                num="06"
                title="Designing for two very different moments"
              />

              <div className="max-w-[640px]">
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
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Naming and describing a new procedure — 16:10 — maintainx-new-procedure-modal.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="16 / 10"
                  label="Procedure settings: tags, teams in charge, recommended frequency — 16:10 — maintainx-procedure-settings.jpg"
                />
              </div>

              <div className="mt-20 max-w-[640px]">
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
                <CaseStudyPlaceholder
                  ratio="16 / 9"
                  label="A public procedure page with a send-to-phone option — 16:9 — maintainx-procedure-hub-detail.jpg"
                />
              </div>
            </Section>

            {/* 07 THE OPPORTUNITY */}
            <Section id="opportunity">
              <SectionHeading num="07" title="The opportunity" />
              <Prose>
                <p>
                  This wasn&apos;t about making paper look like an app. It was
                  about giving frontline teams — the people actually keeping
                  equipment running and workplaces safe — a system precise
                  enough for compliance, standardized enough to trust
                  everywhere, and simple enough to actually get used every
                  single day, gloves and all.
                </p>
              </Prose>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CaseStudyPlaceholder
                  ratio="4 / 3"
                  label="Inspection completion stats: pass, flag, fail rates — 4:3 — maintainx-inspection-stats.jpg"
                />
                <CaseStudyPlaceholder
                  ratio="4 / 3"
                  label="Mean time between failures dashboard — 4:3 — maintainx-mtbf-dashboard.jpg"
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
  );
}
