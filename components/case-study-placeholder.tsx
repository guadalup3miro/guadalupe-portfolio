// Placeholder-only image slot for a case study still in layout. Renders a
// literal empty box — dashed 1px #1A1A1A/30 border, faint fill — at a fixed
// aspect ratio, with a centered text label describing the shot that belongs
// there (subject, ratio, filename). No <Image>, no real asset: this is
// scaffolding, swapped for a <CaseStudyImage> once the art exists.
export default function CaseStudyPlaceholder({
  label,
  ratio = "16 / 9",
  className = "",
}: {
  label: string;
  // Any valid CSS aspect-ratio value, e.g. "16 / 9", "1 / 1", "9 / 16".
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`flex w-full items-center justify-center rounded-[10px] border border-dashed border-[#1A1A1A]/30 bg-[#1A1A1A]/[0.03] p-6 text-center ${className}`}
    >
      <span className="max-w-[85%] text-sm leading-[20px] font-normal text-[#1A1A1A]/55">
        {label}
      </span>
    </div>
  );
}
