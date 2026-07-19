import type { ProjectTag } from "@/lib/projects";

export default function TagFilter({
  tags,
  active,
  onChange,
}: {
  tags: ProjectTag[];
  active: ProjectTag | "All";
  onChange: (tag: ProjectTag | "All") => void;
}) {
  const options: (ProjectTag | "All")[] = ["All", ...tags];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
