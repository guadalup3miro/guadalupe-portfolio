import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyHero from "@/components/case-study-hero";
import CaseStudyBlock from "@/components/case-study-block";

export const metadata: Metadata = {
  title: "Apaleo — Guadalupe Miró",
  description: "Deposit flows — turning complex deposit taxation into a workable product flow.",
};

export default function ApaleoPage() {
  return (
    <article className="w-full pb-24">
      <CaseStudyHero
        eyebrow="Apaleo"
        title="Complex deposit taxation, turned into a product flow people can actually use."
        role="Product Designer"
        timeline="Ongoing"
      />

      <CaseStudyBlock>
        <p>Full case study coming soon.</p>
      </CaseStudyBlock>

      <div className="mx-auto w-full max-w-[1088px] px-6 pt-8">
        <Link href="/" className="text-sm text-[#1A1A1A] hover:opacity-70">
          ← Back to all work
        </Link>
      </div>
    </article>
  );
}
