// An original two-tone "pointing glove" cursor — cream fill, dark outline,
// built from a cluster of rounded fingertip bumps + palm + thumb + cuff so
// it reads as a chunky cartoon glove (the classic pointing-hand cursor
// language, e.g. gt-alpina.com's site cursor) rather than a flat
// single-color silhouette. Colors are fixed (not currentColor) since the
// two-tone contrast is the whole point.
export default function PointingHand({
  className = "h-9 w-9",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g
        transform="rotate(-20 20 22)"
        fill="#F6F5EF"
        stroke="#111111"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* cuff */}
        <rect x="11" y="29" width="18" height="7" rx="3.5" />
        {/* palm */}
        <rect x="10" y="15" width="20" height="17" rx="8.5" />
        {/* thumb */}
        <ellipse
          cx="10"
          cy="25"
          rx="5.5"
          ry="7.5"
          transform="rotate(-30 10 25)"
        />
        {/* three knuckle bumps */}
        <circle cx="14" cy="13" r="5.5" />
        <circle cx="20" cy="11" r="6" />
        <circle cx="26" cy="13" r="5.5" />
      </g>
    </svg>
  );
}
