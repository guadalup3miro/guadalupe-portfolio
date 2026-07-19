export type ProjectTag =
  | "Product Design"
  | "UX/UI"
  | "Branding"
  | "Editorial"
  | "Illustration";

export const projectTags: ProjectTag[] = [
  "Product Design",
  "UX/UI",
  "Branding",
  "Editorial",
  "Illustration",
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
    slug: "revista-gluck",
    title: "Revista Gluck",
    summary: "Magazine editorial design",
    tags: ["Editorial", "Branding"],
    kind: "gallery",
    aspect: "tall",
  },
];
