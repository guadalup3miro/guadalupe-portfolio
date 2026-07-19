import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const aspectClass = {
  hero: "aspect-[16/10]",
  wide: "aspect-[16/9]",
  photo: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
} as const;

export default function CaseStudyImage({
  src,
  alt,
  aspect = "wide",
  className = "",
}: {
  src: string;
  alt: string;
  aspect?: keyof typeof aspectClass;
  className?: string;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-border bg-zinc-50 ${aspectClass[aspect]} ${className}`}
    >
      {exists && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      )}
    </div>
  );
}
