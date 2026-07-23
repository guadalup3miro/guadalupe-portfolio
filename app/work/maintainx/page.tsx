import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyImage from "@/components/case-study-image";

export const metadata: Metadata = {
  title: "MaintainX — Procedure Creation — Guadalupe Miró",
  description: "Procedure creation flow for a CMMS used by frontline maintenance teams.",
};

export default function MaintainXPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <Link href="/" className="text-sm text-muted hover:text-foreground">
        ← Back
      </Link>

      <header className="mt-8">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          MaintainX — Procedure Creation
        </h1>
        <p className="mt-2 text-sm text-muted">
          Senior Product Designer · May 2020 – Jun 2022
        </p>
      </header>

      <CaseStudyImage
        src="/images/maintainx/procedure-editor.png"
        alt="Procedure editor with sections, fields, and scoring"
        aspect="hero"
        className="mt-10"
      />

      <p className="mt-12 max-w-2xl text-2xl leading-snug font-medium tracking-tight sm:text-3xl">
        Frontline maintenance ran on paper. That doesn&apos;t scale.
      </p>

      <p className="mt-6 leading-relaxed text-muted">
        MaintainX is a CMMS — maintenance and asset management software — for
        the people keeping factories, hotels, and facilities running:
        technicians doing inspections, preventive maintenance, safety
        checks. For decades, the instructions guiding that work lived on
        paper: SOPs, checklists, inspection sheets, often specific to one
        site, rarely updated, and impossible to standardize across a
        company with multiple locations.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CaseStudyImage
          src="/images/maintainx/procedure-hub-landing.png"
          alt="MaintainX Procedure Hub, a public library of procedure templates"
          aspect="wide"
        />
        <CaseStudyImage
          src="/images/maintainx/procedure-hub-browse.png"
          alt="Procedure templates browsable by industry"
          aspect="wide"
        />
      </div>

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Not just &quot;digitize a checklist.&quot; Build the system
        underneath it.
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        A procedure needed to be more than a PDF on a phone. It had to
        support real structured data: checkboxes, multiple choice,
        inspection checks, conditional logic, and scoring — so a completed
        procedure could actually do something. If an inspection score came
        back too low, the system could automatically trigger a corrective
        action, instead of a bad result quietly sitting in a filing cabinet
        until something broke.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CaseStudyImage
          src="/images/maintainx/conditional-logic-nested.png"
          alt="Nested conditional logic on a numeric field"
          aspect="square"
          position="top"
        />
        <CaseStudyImage
          src="/images/maintainx/logic-add-field.png"
          alt="Adding a choice field inside conditional logic"
          aspect="wide"
        />
        <CaseStudyImage
          src="/images/maintainx/procedure-preview-score.png"
          alt="Procedure preview showing a max score"
          aspect="wide"
        />
        <CaseStudyImage
          src="/images/maintainx/anomaly-flagging.webp"
          alt="A reading outside the expected range flagged as an anomaly"
          aspect="wide"
        />
      </div>

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Three ways this showed up in the real world
      </h2>
      <ul className="mt-8 list-disc space-y-4 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="font-medium text-foreground">
            Preventive maintenance
          </strong>{" "}
          — scheduled, recurring inspections designed to catch a failure
          before it causes downtime. The procedure had to make it obvious,
          in the moment, whether a reading was in range — and automatically
          flag what needed to happen next if it wasn&apos;t.
        </li>
      </ul>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CaseStudyImage
          src="/images/maintainx/preventive-work-orders.webp"
          alt="Preventive maintenance work order history and schedule"
          aspect="photo"
        />
        <CaseStudyImage
          src="/images/maintainx/reading-triggers-pm.webp"
          alt="An out-of-range reading automatically triggering a PM work order"
          aspect="photo"
        />
      </div>

      <ul className="mt-6 list-disc space-y-4 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="font-medium text-foreground">
            Checklists &amp; inspections
          </strong>{" "}
          — safety and regulatory compliance work, where the procedure
          itself becomes the audit trail. Every checkbox and signature had
          to be trustworthy enough to hold up if a regulator ever asked for
          it.
        </li>
      </ul>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CaseStudyImage
          src="/images/maintainx/procedures-checklist-step.webp"
          alt="A Pass, Flag, or Fail inspection step"
          aspect="photo"
        />
        <CaseStudyImage
          src="/images/maintainx/global-procedure-checklist.webp"
          alt="A safety precautions checklist on a global procedure"
          aspect="photo"
        />
      </div>

      <ul className="mt-6 list-disc space-y-4 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="font-medium text-foreground">
            Facility management
          </strong>{" "}
          — the same procedure engine, applied to the day-to-day work of
          keeping a building running, not just industrial equipment.
        </li>
      </ul>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CaseStudyImage
          src="/images/maintainx/work-order-signature.webp"
          alt="A work order with a required signature and activity log"
          aspect="photo"
        />
        <CaseStudyImage
          src="/images/maintainx/new-work-order.webp"
          alt="A new work order linked to a procedure from the library"
          aspect="photo"
        />
      </div>

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Designed for a technician, not a desk
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        Every one of these had to work for someone standing at a machine,
        often wearing gloves, mid-task — not sitting at a computer. That
        constraint shaped everything: large tap targets, one clear action
        per step, minimal typing, and a flow that could survive being
        interrupted and picked back up.
      </p>
      <CaseStudyImage
        src="/images/maintainx/simple-field-editor.png"
        alt="A single, simple text field in the procedure editor"
        aspect="wide"
        className="mt-8 max-w-xl"
      />

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Built for standardization at scale
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        The bigger unlock was the Global Procedure Library: a single
        procedure, authored once by a safety manager or global leader,
        could be shared and reused across every site in an organization —
        instead of every location reinventing (and slightly misremembering)
        the same safety checklist.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CaseStudyImage
          src="/images/maintainx/create-procedure-options.png"
          alt="Creating a new procedure from the Global Library"
          aspect="wide"
        />
        <CaseStudyImage
          src="/images/maintainx/procedure-library.png"
          alt="The Procedure Library with an Explore Global Library option"
          aspect="wide"
        />
        <CaseStudyImage
          src="/images/maintainx/template-library-edit-modal.png"
          alt="A prompt to edit a shared template from the Global Library"
          aspect="wide"
        />
        <CaseStudyImage
          src="/images/maintainx/procedure-library-usage.png"
          alt="Usage performance across work orders generated from a procedure"
          aspect="wide"
        />
      </div>

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        Designing for two very different moments
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        This meant designing for two distinct experiences that had to feel
        like one connected system:
      </p>
      <ul className="mt-8 list-disc space-y-4 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="font-medium text-foreground">
            Creating a procedure
          </strong>{" "}
          — an authoring tool flexible enough to define precise,
          scoring-aware steps, without needing to think like a developer
        </li>
      </ul>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CaseStudyImage
          src="/images/maintainx/new-procedure-modal.png"
          alt="Naming and describing a new procedure"
          aspect="wide"
        />
        <CaseStudyImage
          src="/images/maintainx/procedure-settings.png"
          alt="Procedure settings: tags, teams in charge, recommended frequency"
          aspect="wide"
        />
      </div>

      <ul className="mt-6 list-disc space-y-4 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="font-medium text-foreground">
            Running a procedure
          </strong>{" "}
          — a guided, step-by-step field experience, simple enough to
          complete accurately without slowing anyone down
        </li>
      </ul>
      <CaseStudyImage
        src="/images/maintainx/procedure-hub-detail.png"
        alt="A public procedure page with a send-to-phone option"
        aspect="wide"
        className="mt-6 max-w-xl"
      />

      <h2 className="mt-16 text-2xl font-medium tracking-tight">
        The opportunity
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        This wasn&apos;t about making paper look like an app. It was about
        giving frontline teams — the people actually keeping equipment
        running and workplaces safe — a system precise enough for
        compliance, standardized enough to trust everywhere, and simple
        enough to actually get used every single day, gloves and all.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CaseStudyImage
          src="/images/maintainx/inspection-stats.webp"
          alt="Inspection completion stats: pass, flag, fail rates"
          aspect="photo"
        />
        <CaseStudyImage
          src="/images/maintainx/mtbf-dashboard.webp"
          alt="Mean time between failures dashboard"
          aspect="photo"
        />
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          ← Back to all work
        </Link>
      </div>
    </article>
  );
}
