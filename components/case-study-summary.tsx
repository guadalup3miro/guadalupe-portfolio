// The "Project summary" block — Team / Duration / Deliverables / Project
// Type / Applied methodologies — reused across case studies. Heading sits
// at the same 40px Inter-regular size as the hero title (this is a real
// section title, not a small uppercase label). Fields are 12px labels over
// 16px values with an explicit fixed 22px line-height. Same 1088px safe
// area as the rest of the page, solid #1A1A1A throughout.
export default function CaseStudySummary({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="mx-auto w-full max-w-[1088px] px-6 py-24">
      <h2 className="text-[40px] font-normal leading-tight text-[#1A1A1A]">
        Project summary
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {items.map(({ label, value }) => (
          <div key={label}>
            <p className="text-xs font-normal text-[#1A1A1A]">{label}</p>
            <p className="mt-2 text-base leading-[22px] font-normal text-[#1A1A1A]">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
