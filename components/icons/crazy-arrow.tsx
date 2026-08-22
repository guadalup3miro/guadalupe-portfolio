// Wavy line leading into a target dot — the chosen cursor mark for
// /graphic-design hover cards. Two-tone (dark outline + cream fill) so it
// pops against the coral hover panel.
export default function CrazyArrow({
  className = "h-9 w-9",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden="true">
      <path
        d="M4 22C10 6 18 6 22 16C26 26 34 26 36 16"
        fill="none"
        stroke="#111111"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 22C10 6 18 6 22 16C26 26 34 26 36 16"
        fill="none"
        stroke="#F6F5EF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="14" r="9" fill="#111111" />
      <circle cx="46" cy="14" r="6.4" fill="#F6F5EF" />
      <path
        d="M42 14L50 14M46 10L46 18"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
