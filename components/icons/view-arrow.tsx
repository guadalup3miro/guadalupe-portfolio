// Simple straight "view project" arrow — thick rounded stroke, plain
// horizontal line into an arrowhead. Single-color (currentColor) so it
// drops into text-white on the card hover overlay.
export default function ViewArrow({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 56" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 28H92M92 28L66 4M92 28L66 52"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
