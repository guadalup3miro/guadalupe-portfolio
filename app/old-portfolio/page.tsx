import type { Metadata } from "next";
import PdfViewerBlock from "@/components/pdf-viewer-block";

export const metadata: Metadata = {
  title: "Old Portfolio — Guadalupe Miró",
  description: "Archived 2020 portfolio PDFs.",
};

const pdfs = [
  {
    label: "Visual Designer Portfolio — 2020",
    href: "/pdfs/old-portfolio-visual-designer-2020.pdf",
  },
  {
    label: "UX/UI Designer Portfolio — 2020",
    href: "/pdfs/old-portfolio-ux-ui-designer-2020.pdf",
  },
];

export default function OldPortfolioPage() {
  return (
    <section className="w-full bg-[#F6F5EF] pt-[180px] pb-24 text-[#1A1A1A] sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-wide">
          Old portfolio pdf
        </p>
        <h1 className="mt-4 font-display text-[48px] italic leading-[0.95] tracking-tight sm:text-[56px]">
          2020 archive
        </h1>

        <div className="mt-16 flex flex-col gap-20 sm:mt-20 sm:gap-24">
          {pdfs.map(({ label, href }) => (
            <PdfViewerBlock key={href} label={label} href={href} />
          ))}
        </div>
      </div>
    </section>
  );
}
