import Link from "next/link";
import type { Project } from "@/lib/projects";

const aspectClass: Record<Project["aspect"], string> = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[5/4]",
};

const kindLabel: Record<Project["kind"], string> = {
  "case-study": "Case study",
  gallery: "Gallery",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group mb-6 block break-inside-avoid"
    >
      <div
        className={`${aspectClass[project.aspect]} overflow-hidden rounded-md border border-border bg-zinc-50 transition-colors group-hover:bg-zinc-100`}
      />
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium">{project.title}</h3>
          <p className="mt-0.5 text-sm text-muted">{project.summary}</p>
        </div>
        <span className="mt-0.5 shrink-0 text-xs tracking-wide text-muted uppercase">
          {kindLabel[project.kind]}
        </span>
      </div>
    </Link>
  );
}
