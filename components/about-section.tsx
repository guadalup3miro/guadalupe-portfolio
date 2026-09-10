import Link from "next/link";

// Layout reference: iaragrins.com/about — two bold uppercase intro
// paragraphs, an oversized italic "Work experience" heading, and a company /
// years / role / context list. Guada's revision pass: paragraphs dropped to
// Inter regular (not semibold), left/right aligned instead of both left;
// social links, edition stamp, and the resume-pill greeting block removed
// entirely; the big serif "Hey again" greeting removed; "Work experience"
// blown up to 152px/141 leading/-8% tracking with no divider line; every
// line in the experience grid is solid #1A1A1A (no gray/opacity); the
// closing resume link is now an oval pill matching SectionTabs' active-tab
// treatment instead of an underlined text link.
const experience = [
  {
    company: "Apaleo",
    years: "2023 — Present",
    role: "Senior Product Designer",
    context: "Payments & Fiscalization · Remote",
  },
  {
    company: "Freelance",
    years: "2022 — Present",
    role: "Brand & Product Consultant",
    context: "Alongside full-time roles below",
  },
  {
    company: "Pura Mente",
    years: "2022 — 2023",
    role: "Senior Product Designer",
    context: "Meditation & community platform",
  },
  {
    company: "MaintainX",
    years: "2020 — 2022",
    role: "Senior Product Designer",
    context: "First design hire · San Francisco",
  },
  {
    company: "PedidosYa",
    years: "2019 — 2020",
    role: "Product Designer, Growth",
    context: "Delivery Hero · Buenos Aires",
  },
  {
    company: "Aerolab",
    years: "2017 — 2019",
    role: "UX/UI Designer",
    context: "Digital product agency · Buenos Aires",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-[#F6F5EF] pt-[180px] pb-24 text-[#1A1A1A] sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Intro: two Inter-regular uppercase paragraphs, stacked one below
            the other — the second one indented toward the right edge via
            ml-auto, but still reading as normal left-aligned text within
            its own block. No metadata, no social links, no serif greeting
            underneath anymore. */}
        <div className="flex flex-col gap-16 sm:gap-24">
          <p className="max-w-[728px] text-[32px] font-normal uppercase leading-[1.2] tracking-tight">
            Hi there! With 10+ years of experience in visual design and
            design systems, I&apos;m glad you found your way here — I
            started in graphic design and fell in love with product &amp;
            systems. I specialize in elevating products through strong
            branding and craft.
          </p>

          <p className="ml-auto max-w-[728px] text-right text-[32px] font-normal uppercase leading-[1.2] tracking-tight">
            I&apos;m currently designing at{" "}
            <a
              href="https://apaleo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-[font-style] duration-300 hover:italic"
            >
              Apaleo
            </a>
            , where I hold
            decision-making autonomy across payments and fiscalization — and
            running freelance practice on brand and 0-to-1
            product work.
          </p>
        </div>

        {/* Work experience */}
        <div className="mt-20 sm:mt-28">
          <h2 className="font-display text-[72px] italic leading-[0.95] tracking-[-0.08em] sm:text-[152px] sm:leading-[141px]">
            work
            <br />
            experience
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {experience.map(({ company, years, role, context }) => (
              <div key={company}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold text-[#1A1A1A]">{company}</p>
                  <p className="whitespace-nowrap text-xs text-[#1A1A1A]">
                    {years}
                  </p>
                </div>
                <p className="mt-1.5 text-sm text-[#1A1A1A]">{role}</p>
                <p className="mt-1 text-xs text-[#1A1A1A]">{context}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex items-center gap-6 sm:mt-24">
          <p className="text-xs uppercase tracking-wide text-[#1A1A1A]">
            Want the full story?
          </p>
          <Link
            href="/resume.pdf"
            className="rounded-[50%] border border-[#1A1A1A] px-7 py-2.5 text-xs font-medium uppercase tracking-wide text-[#1A1A1A] transition-opacity hover:opacity-70"
          >
            Download resume
          </Link>
        </div>
      </div>
    </section>
  );
}
