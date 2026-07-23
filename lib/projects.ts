export type ProjectTag =
  | "Product Design"
  | "UX/UI"
  | "Branding"
  | "Editorial"
  | "Collage";

export const projectTags: ProjectTag[] = [
  "Product Design",
  "UX/UI",
  "Branding",
  "Editorial",
  "Collage",
];

export type ProjectKind = "case-study" | "gallery";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: ProjectTag[];
  kind: ProjectKind;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    slug: "ripio",
    title: "Ripio",
    summary: "Crypto exchange — wallet and trading experience",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    thumbnail: "/images/thumbnails/ripio-thumbnail.png",
  },
  {
    slug: "natura",
    title: "Catálogo Natura",
    summary: "Product catalog redesign",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    thumbnail: "/images/thumbnails/natura-thumbnail.png",
  },
  {
    slug: "maintainx",
    title: "MaintainX",
    summary: "Procedure creation flow",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    thumbnail: "/images/thumbnails/maintainx-thumbnail.png",
  },
  {
    slug: "apaleo",
    title: "Apaleo",
    summary: "Payment flow experiment",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
  },
  {
    slug: "pura-mente",
    title: "Pura Mente",
    summary: "Meditation app design system",
    tags: ["Product Design", "UX/UI", "Branding"],
    kind: "case-study",
  },
  {
    slug: "caminos-de-la-villa",
    title: "Caminos de la Villa",
    summary: "Web app",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
  },
  {
    slug: "intercoop",
    title: "Intercoop",
    summary: "Editorial and brand identity",
    tags: ["Branding", "Editorial"],
    kind: "gallery",
  },
  {
    slug: "festival-fanaticos",
    title: "Festival Fanáticos",
    summary: "Event branding",
    tags: ["Branding"],
    kind: "gallery",
  },
  {
    slug: "bienal-buenos-aires",
    title: "Bienal Buenos Aires",
    summary: "Branding and editorial design",
    tags: ["Branding", "Editorial"],
    kind: "gallery",
  },
  {
    slug: "revista-gluck",
    title: "Revista Gluck",
    summary: "Magazine editorial design",
    tags: ["Editorial"],
    kind: "gallery",
  },
  {
    slug: "carl-jung",
    title: "Carl Jung",
    summary: "Editorial design project",
    tags: ["Editorial"],
    kind: "gallery",
  },
  {
    slug: "hedwig-and-the-angry-inch",
    title: "Hedwig and the Angry Inch",
    summary: "Collage piece",
    tags: ["Collage"],
    kind: "gallery",
  },
  {
    slug: "coco-rosie",
    title: "Coco Rosie",
    summary: "Collage piece",
    tags: ["Collage"],
    kind: "gallery",
  },
  {
    slug: "wes-anderson",
    title: "Wes Anderson",
    summary: "Personal collage project",
    tags: ["Collage"],
    kind: "gallery",
  },
];
