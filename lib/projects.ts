export type ProjectTag =
  | "Product Design"
  | "UX/UI"
  | "Branding"
  | "Editorial"
  | "Collage"
  | "Finance/Compliance"
  | "Product Thinking";

export const projectTags: ProjectTag[] = [
  "Product Design",
  "UX/UI",
  "Branding",
  "Editorial",
  "Collage",
  "Finance/Compliance",
  "Product Thinking",
];

export type ProjectKind = "case-study" | "gallery";

export interface Project {
  slug: string;
  title: string;
  // Punchy, hype headline shown on the homepage card. Draft copy — meant
  // to be reviewed/rewritten by Guada, not final.
  hype: string;
  summary: string;
  tags: ProjectTag[];
  kind: ProjectKind;
  thumbnail?: string;
  // Tailwind aspect-ratio class for the homepage card. Falls back to the
  // cycling pattern in ProjectCard when omitted.
  cardAspect?: string;
  // Optional Tailwind margin override to pull a card up/down out of the
  // normal grid row, for asymmetric rows (e.g. a shorter middle card
  // pulled up to match the gap on the cards beside it).
  cardOffsetClass?: string;
  // Smaller/experimental pieces (visual experiments, GIFs, stills) that
  // show as a card but don't link to a project page.
  standalone?: boolean;
  // For animated GIF thumbnails that should just keep playing — skips the
  // hover zoom so it's not fighting the GIF's own motion.
  noHoverZoom?: boolean;
}

export const projects: Project[] = [
  {
    slug: "apaleo",
    title: "Apaleo",
    hype: "Deposit Flows — Turning complex deposit taxation into a workable product flow",
    summary: "Payment flow experiment",
    tags: ["Product Design", "Finance/Compliance", "Product Thinking"],
    kind: "case-study",
    thumbnail: "/images/thumbnails/apaleo-thumbnail.png",
  },
  {
    slug: "maintainx",
    title: "MaintainX",
    hype: "Making maintenance procedures easy to build",
    summary: "Procedure creation flow",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    thumbnail: "/images/thumbnails/maintainx-thumbnail.png",
  },
  {
    slug: "ripio",
    title: "Ripio",
    hype: "Making crypto accessible for everyone",
    summary: "Crypto exchange — wallet and trading experience",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    thumbnail: "/images/thumbnails/ripio-thumbnail.png",
  },
  {
    slug: "natura",
    title: "Catálogo Natura",
    hype: "Turning a sprawling catalog into something sellable",
    summary: "Product catalog redesign",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
    thumbnail: "/images/thumbnails/natura-thumbnail.png",
  },
  {
    slug: "pura-mente",
    title: "Pura Mente",
    hype: "A design system built for stillness",
    summary: "Meditation app design system",
    tags: ["Product Design", "UX/UI", "Branding"],
    kind: "case-study",
  },
  {
    slug: "caminos-de-la-villa",
    title: "Caminos de la Villa",
    hype: "Building a web app from the ground up",
    summary: "Web app",
    tags: ["Product Design", "UX/UI"],
    kind: "case-study",
  },
  {
    slug: "revista-gluck",
    title: "Gluck Magazine",
    hype: "Editorial design with a voice of its own",
    summary: "Magazine editorial design",
    tags: ["Editorial"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/gluck.jpg",
  },
  {
    slug: "mision-veleta",
    title: "Misión Veleta",
    hype: "Pick a wish, take on a mission",
    summary: "Visual experiment — badge design / GIF",
    tags: ["Collage"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/mision-veleta.gif",
    standalone: true,
    noHoverZoom: true,
  },
  {
    slug: "intercoop",
    title: "Intercoop",
    hype: "Giving a cooperative a voice and a face",
    summary: "Editorial and brand identity",
    tags: ["Branding", "Editorial"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/intercoop.jpg",
  },
  {
    slug: "hedwig-and-the-angry-inch",
    title: "Hedwig and the Angry Inch",
    hype: "Collage illustration and motion titles for the film",
    summary: "Collage illustration & motion storyboard for the movie's title sequence",
    tags: ["Collage"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/hedwig.jpg",
  },
  {
    slug: "bienal-buenos-aires",
    title: "Bienal Arte Joven Buenos Aires",
    hype: "Identity and editorial for a city-wide biennial",
    summary: "Branding — posters, postcards, flyers, merchandising",
    tags: ["Branding", "Editorial"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/bienal-buenos-aires.jpg",
  },
  {
    slug: "festival-muralistas",
    title: "Festival de Muralistas Urbanos",
    hype: "Branding a street art festival worth showing up for",
    summary: "Street art festival — poster, illustration & event branding",
    tags: ["Branding"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/festival-muralistas.jpg",
  },
  {
    slug: "pogo-tv",
    title: "Pogo TV",
    hype: "Branding a TV channel that moves",
    summary: "TV branding — motion identity",
    tags: ["Branding"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/pogo-tv.jpg",
  },
  {
    slug: "ecstatic-dance",
    title: "Ecstatic Dance",
    hype: "A poster for a night of dancing and cacao",
    summary: "Collage poster / GIF for an ecstatic dance & cacao ceremony",
    tags: ["Collage"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/ecstatic-dance.jpg",
    standalone: true,
  },
  {
    slug: "carl-jung",
    title: "Carl G. Jung — Sensores Inconscientes",
    hype: "An experimental editorial on the unconscious",
    summary: "Experimental editorial college project inspired by Jungian ideas of the unconscious",
    tags: ["Editorial"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/carl-jung.jpg",
  },
  {
    slug: "racket",
    title: "Racket Club",
    hype: "Branding and a website for a club people show up for",
    summary: "Sports club branding + website",
    tags: ["Branding", "UX/UI"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/racket.jpg",
  },
  {
    slug: "uno-en-uno",
    title: "Uno en Uno",
    hype: "A website as considered as the architecture itself",
    summary: "Web design for an architecture studio",
    tags: ["Branding", "UX/UI"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/uno-en-uno.jpg",
  },
  {
    slug: "coco-rosie",
    title: "CocoRosie",
    hype: "Soft surrealism meets hip hop and electronica",
    summary: "Collage illustration and vinyl layout for the band CocoRosie",
    tags: ["Collage"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/coco-rosie.jpg",
  },
  {
    slug: "wes-anderson",
    title: "Wes Anderson",
    hype: "A collage love letter to Wes Anderson's world",
    summary: "Personal collage project",
    tags: ["Collage"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/wes-anderson.jpg",
  },
  {
    slug: "wake-up-dance",
    title: "DJ Eridu — Wake Up Dance",
    hype: "A poster that wakes the party up",
    summary: "Event poster — GIF / visual",
    tags: ["Collage"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/wake-up-dance.jpg",
    standalone: true,
  },
  {
    slug: "mecha-meets-unreal",
    title: "Mecha Meets Unreal",
    hype: "Taking a brand somewhere stranger",
    summary: "Digital / experimental branding exploration",
    tags: ["Branding"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/mecha.jpg",
  },
  {
    slug: "car-photography",
    title: "Car Photography",
    hype: "Chasing light and chrome",
    summary: "Photography / experimental",
    tags: ["Collage"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/car-photography.jpg",
  },
  {
    slug: "pink-green-illustration",
    title: "Pink & Green Illustration",
    hype: "A standalone visual experiment",
    summary: "Standalone illustration",
    tags: ["Collage"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/pink-green.jpg",
    standalone: true,
  },
  {
    slug: "pavilion",
    title: "Pavilion Recoleta",
    hype: "Branding a building people want to live in",
    summary: "Real estate branding — identity, stationery, magazine ads",
    tags: ["Branding"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/pavilion.jpg",
  },
  {
    slug: "white-blue-illustration",
    title: "White & Blue",
    hype: "A quiet experimental still",
    summary: "Experimental visual / still",
    tags: ["Collage"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/white-blue.jpg",
    standalone: true,
  },
  {
    slug: "pfizer",
    title: "Pfizer Sustainability Report",
    hype: "Making a sustainability report people actually read",
    summary: "Editorial design for an annual sustainability report",
    tags: ["Editorial"],
    kind: "gallery",
    thumbnail: "/images/graphic-design/pfizer.jpg",
  },
];
