// A hand-drawn, slightly bouncy arrow — used in place of a plain "→" on
// the /graphic-design hover cards. Uses currentColor so it picks up
// whatever text color class is set on it (e.g. text-coral).
export default function SquiggleArrow({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 16C7 6 12 22 17 13C22 4 27 20 32 12C34.5 8 37 9.5 39.5 11"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 6.5L39.5 11L35.5 18.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
