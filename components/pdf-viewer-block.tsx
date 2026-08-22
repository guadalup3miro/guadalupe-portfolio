"use client";

import { useState } from "react";

export default function PdfViewerBlock({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-wide">
          {label}
        </p>
        <a
          href={href}
          className="whitespace-nowrap text-xs font-medium uppercase tracking-wide underline transition-opacity hover:opacity-70"
        >
          Download
        </a>
      </div>

      {loaded ? (
        <iframe
          src={href}
          title={label}
          className="mt-4 h-[85vh] w-full border border-[#1A1A1A]/20"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="mt-4 flex h-[240px] w-full items-center justify-center border border-[#1A1A1A]/20 text-xs font-medium uppercase tracking-wide transition-opacity hover:opacity-70"
        >
          Click to load preview
        </button>
      )}
    </div>
  );
}
