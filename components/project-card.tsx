import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const kindLabel: Record<Project["kind"], string> = {
  "case-study": "Case study",
  gallery: "Gallery",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group mb-6 block break-inside-avoid overflow-hidden rounded-lg border border-border bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-50">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium">{project.title}</h3>
        <p className="mt-0.5 truncate text-sm text-muted">{project.summary}</p>
        <span className="mt-2 inline-block rounded-full border border-border px-2 py-0.5 text-xs tracking-wide text-muted uppercase">
          {kindLabel[project.kind]}
        </span>
      </div>
    </Link>
  );
}
