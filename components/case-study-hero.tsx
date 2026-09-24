// Every case study opens the same way: eyebrow (project name, Inter Regular
// 16) → title (Inter Regular 40, auto line-height) → info pills 56px below
// (each pill = an ALL CAPS 14px label over a 16px value). Sits in the
// page's 1088px safe area — only CaseStudyImage's `bleed` shots break out
// of it. Text is solid #1A1A1A throughout; there are no grays in this
// design system.
export default function CaseStudyHero({
  title,
  eyebrow,
  role,
  timeline,
  agency,
  about,
}: {
  title: string;
  eyebrow: string;
  role: string;
  timeline: string;
  agency?: string;
  about?: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[660px] px-6 pt-24">
      <p className="text-base font-normal text-[#1A1A1A]">{eyebrow}</p>
      <h1 className="mt-2 max-w-2xl text-[40px] font-normal leading-tight text-[#1A1A1A]">
        {title}
      </h1>
      {about && <div className="mt-4 max-w-[504px]">{about}</div>}

      <dl className="mt-14 flex flex-wrap gap-x-16 gap-y-6">
        <div>
          <dt className="text-sm font-normal uppercase text-[#1A1A1A]">Role</dt>
          <dd className="mt-1 text-base font-normal text-[#1A1A1A]">{role}</dd>
        </div>
        <div>
          <dt className="text-sm font-normal uppercase text-[#1A1A1A]">Timeline</dt>
          <dd className="mt-1 text-base font-normal text-[#1A1A1A]">{timeline}</dd>
        </div>
        {agency && (
          <div>
            <dt className="text-sm font-normal uppercase text-[#1A1A1A]">Agency</dt>
            <dd className="mt-1 text-base font-normal text-[#1A1A1A]">{agency}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
