import type { ProjectTag } from "@/lib/projects";

// Homepage "Product UX-UI" list — one entry per row, in display order.
// Reorder the array to reorder the homepage. `accentColor` is the card's
// solid background (it also matches the mockup export's own background), kept here so the case
// study pages can reuse the same color later via `getHomeProject(slug)`.
export interface HomeProject {
  slug: string;
  company: string;
  area: string;
  years: string;
  title: string;
  // Draft copy — easy to rewrite here without touching the component.
  outcome: string;
  tags: ProjectTag[];
  accentColor: string;
  // 3:2 mockup export (e.g. 2000×1333). If the file is missing, the card renders
  // empty (accent color only) with the expected path shown inside it.
  image: string;
  // false = the row still renders, but shows "Case study coming soon"
  // instead of linking to a placeholder page.
  published: boolean;
}

export const homeProjects: HomeProject[] = [
  {
    slug: "ripio",
    company: "Ripio",
    area: "Crypto platform",
    years: "2018–2019",
    title: "Crypto for people who don't speak crypto.",
    outcome:
      "Led design end to end on a ground-up build of the wallet, trading, onboarding and credit flows for one of Argentina's largest crypto exchanges. Everything shipped in 6 months.",
    tags: ["Product Design", "UX/UI"],
    accentColor: "#825EFB",
    image: "/home/ripio.webp",
    published: true,
  },
  {
    slug: "maintainx",
    company: "MaintainX",
    area: "Procedures",
    years: "2020–2022",
    title: "Procedures a technician can build in minutes, not days",
    outcome:
      "First product designer hire — built the early design system and led the Sketch → Figma transition as the company scaled past 200 people.",
    tags: ["Product Design", "UX/UI"],
    accentColor: "#1887FC",
    image: "/home/maintainx.webp",
    published: true,
  },
  {
    slug: "natura",
    company: "Natura",
    area: "Digital catalog",
    years: "2019",
    title: "A sprawling beauty catalog, made easy to shop",
    outcome:
      "Turned a printed catalog shared by independent vendors into a digital one they could share with a QR code, built on a CMS so Natura's team could launch new campaigns on their own.",
    tags: ["Product Design", "UX/UI"],
    accentColor: "#F2E65E",
    image: "/home/natura.webp",
    published: true,
  },
  {
    slug: "apaleo",
    company: "Apaleo",
    area: "Payments & Fiscalization",
    years: "2023–Now",
    title: "Deposit taxation is a compliance maze. I turned it into a flow.",
    outcome:
      "Full design ownership across Payments and Fiscalization for a B2B hospitality platform.",
    tags: ["Product Design", "Finance/Compliance", "Product Thinking"],
    accentColor: "#FFBC69",
    image: "/home/apaleo.webp",
    // app/work/apaleo is still a "Full case study coming soon" stub.
    published: false,
  },
];

export function getHomeProject(slug: string): HomeProject | undefined {
  return homeProjects.find((project) => project.slug === slug);
}
