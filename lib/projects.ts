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
  aspect: "tall" | "square" | "wide";
}

export const projects: Project[] = [
  {
    slug: "ripio",
    title: "Ripio",
    summary: "Crypto exchange — wallet and trading experience",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    aspect: "tall",
  },
  {
    slug: "natura",
    title: "Catálogo Natura",
    summary: "Product catalog redesign",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    aspect: "square",
  },
  {
    slug: "maintainx",
    title: "MaintainX",
    summary: "Procedure creation flow",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    aspect: "wide",
  },
  {
    slug: "apaleo",
    title: "Apaleo",
    summary: "Payment flow experiment",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    aspect: "square",
  },
  {
    slug: "pura-mente",
    title: "Pura Mente",
    summary: "Meditation app design system",
    tags: ["Product Design", "UX/UI", "Branding"],
    kind: "case-study",
    aspect: "tall",
  },
  {
    slug: "caminos-de-la-villa",
    title: "Caminos de la Villa",
    summary: "Web app",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    aspect: "wide",
  },
  {
    slug: "intercoop",
    title: "Intercoop",
    summary: "Editorial and brand identity",
    tags: ["Branding", "Editorial"],
    kind: "gallery",
    aspect: "square",
  },
  {
    slug: "festival-fanaticos",
    title: "Festival Fanáticos",
    summary: "Event branding",
    tags: ["Branding"],
    kind: "gallery",
    aspect: "wide",
  },
  {
    slug: "bienal-buenos-aires",
    title: "Bienal Buenos Aires",
    summary: "Branding and editorial design",
    tags: ["Branding", "Editorial"],
    kind: "gallery",
    aspect: "tall",
  },
  {
    slug: "revista-gluck",
    title: "Revista Gluck",
    summary: "Magazine editorial design",
    tags: ["Editorial"],
    kind: "gallery",
    aspect: "square",
  },
  {
    slug: "carl-jung",
    title: "Carl Jung",
    summary: "Editorial design project",
    tags: ["Editorial"],
    kind: "gallery",
    aspect: "wide",
  },
  {
    slug: "hedwig-and-the-angry-inch",
    title: "Hedwig and the Angry Inch",
    summary: "Collage piece",
    tags: ["Collage"],
    kind: "gallery",
    aspect: "tall",
  },
  {
    slug: "coco-rosie",
    title: "Coco Rosie",
    summary: "Collage piece",
    tags: ["Collage"],
    kind: "gallery",
    aspect: "square",
  },
  {
    slug: "wes-anderson",
    title: "Wes Anderson",
    summary: "Personal collage project",
    tags: ["Collage"],
    kind: "gallery",
    aspect: "wide",
  },
];
