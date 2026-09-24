// Data for the /work/[slug] landing pages of the graphic-design (visual)
// projects -- see components/visual-project-page.tsx for the template that
// renders this. Content, colors, and images were pulled from
// source-assets/Portfolio_Guadalupe_Miro_Visual_designer_2020.pdf (each
// project's own pages exported to images-extracted/, then re-exported as
// public/images/work/<slug>/*, in the exact page order they appear in the
// deck). Copy, metadata, and years are a first-pass draft -- flagged below
// wherever something is inferred rather than known.

export interface VisualProjectImage {
  src: string;
  width: number;
  height: number;
  // Optional: render this image at its own true aspect ratio (width/height)
  // instead of the row's usual crop box -- for a source that's an unusual
  // shape (e.g. a wide standalone graphic) and shouldn't be cropped at all.
  noCrop?: boolean;
  // Optional: pad this item with vertical breathing room above and below --
  // for a gallerySeamless project (see hedwig/racket/pfizer/uno-en-uno/
  // festival-muralistas) where the default is every item flush against the
  // next, and one particular image needs to stand apart from that rhythm
  // instead.
  spaced?: boolean;
}

// A Vimeo embed that can sit inline in a project's photo sequence (see
// components/video-embed.tsx). No `type` tag needed to tell it apart from
// VisualProjectImage -- isVideoItem below discriminates on the presence of
// `vimeoId`, so existing image entries across every project's `images`
// array don't need touching.
export interface VisualProjectVideo {
  vimeoId: string;
  // Vimeo "background" mode: no chrome at all, autoplay + loop + muted,
  // not clickable/pausable (Vimeo's own ?background=1 param). Default
  // (false/omitted) is a normal player -- visible controls, no autoplay,
  // can be paused and heard. See components/video-embed.tsx.
  background?: boolean;
  // Opt-in ±10s hover overlay controls, driven by the @vimeo/player SDK
  // (needed either way since background mode has no native controls to
  // click). Off by default -- only pogo-tv uses it today.
  hoverSeekControls?: boolean;
  // Opt-in rounded corners (16px), matching galleryNaturalGrid's
  // thumbnails. Off by default.
  rounded?: boolean;
}

export type VisualProjectMediaItem = VisualProjectImage | VisualProjectVideo;

export function isVideoItem(item: VisualProjectMediaItem): item is VisualProjectVideo {
  return "vimeoId" in item;
}

export interface VisualProjectMeta {
  label: string;
  value: string;
}

export interface VisualProject {
  slug: string;
  // Background color for the whole page (behind the metadata/description
  // section and the gallery gutters -- the hero and gallery images carry
  // their own baked-in backgrounds from the original artwork).
  bgColor: string;
  // Every project uses exactly two colors: bgColor above, and this one for
  // everything else -- title, body copy, labels, and (see header.tsx /
  // footer.tsx) the site header and footer while on this project's page.
  // mutedTextColor is kept as a separate field for call sites that expect
  // one, but is always set equal to textColor -- no third, softer shade.
  textColor: string;
  mutedTextColor: string;
  title: string;
  metadata: VisualProjectMeta[];
  description: string;
  hero: VisualProjectImage;
  // Optional: skip rendering the hero banner entirely -- page starts
  // straight at the "← Back" / title section instead.
  hideHero?: boolean;
  // Optional: a Vimeo embed as its own fixed section, directly below the
  // description/metadata and above the images gallery (distinct from a
  // VisualProjectVideo placed inline inside `images` -- see
  // hedwig-and-the-angry-inch for that approach vs. pogo-tv for this one).
  video?: VisualProjectVideo;
  // The project's full page sequence. By default this is original PDF order
  // (the hero image above is a pick from within this same list -- it also
  // appears again here at its natural position, cover is cover, this is the
  // full set); a project can reorder its own array when a different opening
  // reads better (see intercoop below), it just has to still contain every
  // page exactly once. Can also hold VisualProjectVideo entries (Vimeo
  // embeds) interleaved at any position -- see hedwig-and-the-angry-inch.
  images: VisualProjectMediaItem[];
  // Optional explicit prefix of gallery row sizes, e.g. [1, 3] = one
  // full-width image, then the next 3 side by side -- anything left over
  // after the prefix falls back to the default full/pair alternation.
  galleryGroups?: number[];
  // Optional: every image renders full width, stacked with zero gap between
  // them (no pairing, no gutters) -- a continuous scroll of images.
  gallerySeamless?: boolean;
  // Optional: `images` renders as a simple responsive grid (2 or 3 columns
  // desktop per galleryNaturalGridCols, 1 mobile always, generous gap) with
  // every image at its own natural aspect ratio -- no cropping, no
  // object-cover, width:100%/height:auto. For a project whose stills
  // shouldn't be forced into a shared crop box at all (see pogo-tv).
  // Mutually exclusive with galleryGroups/gallerySeamless -- ignored if
  // either of those is also set.
  galleryNaturalGrid?: boolean;
  // Desktop column count for galleryNaturalGrid. Defaults to 2 when omitted.
  galleryNaturalGridCols?: 2 | 3;
}

export const visualProjects: Record<string, VisualProject> = {
  "revista-gluck": {
    slug: "revista-gluck",
    bgColor: "#DCF1EE",
    textColor: "#0F3733",
    mutedTextColor: "#0F3733",
    title: "Gluck Magazine",
    metadata: [
      { label: "Services", value: "Editorial design, art direction" },
      { label: "Industry", value: "Culture / magazine" },
      { label: "Client", value: "Gluck Magazine" },
      { label: "Year", value: "2013" },
    ],
    description:
      "Gluck is a periodical magazine covering reviews and critical articles on up-and-coming artists, with national art events as a recurring source of inspiration. Each issue got its own cover color story — cream, yellow, pink — while the interior grid, agenda section, and profile features (Blanca Miró, Mundo Sael) stayed consistent underneath.",
    hero: {
      src: "/images/work/revista-gluck/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    gallerySeamless: true,
    images: [
      { src: "/images/work/revista-gluck/002.jpg", width: 2200, height: 1375 },
      { src: "/images/work/revista-gluck/003.jpg", width: 2200, height: 1375 },
      { src: "/images/work/revista-gluck/004.jpg", width: 2200, height: 1375 },
      { src: "/images/work/revista-gluck/005.jpg", width: 2200, height: 1375 },
      { src: "/images/work/revista-gluck/006.jpg", width: 2200, height: 1375 },
      { src: "/images/work/revista-gluck/007.jpg", width: 2200, height: 1375 },
      { src: "/images/work/revista-gluck/008.jpg", width: 2200, height: 1375 },
      { src: "/images/work/revista-gluck/009.jpg", width: 2200, height: 1375 },
      { src: "/images/work/revista-gluck/010.jpg", width: 2200, height: 1375 },
    ],
  },

  "carl-jung": {
    slug: "carl-jung",
    bgColor: "#E73A1A",
    textColor: "#FFF4EC",
    mutedTextColor: "#FFF4EC",
    title: "Carl G. Jung — Sensores Inconscientes",
    metadata: [
      { label: "Services", value: "Editorial design, illustration" },
      { label: "Industry", value: "Academic / publishing" },
      { label: "Client", value: "College project" },
      { label: "Year", value: "2014" },
    ],
    // Real project text, straight from the deck's own intro page (011,
    // which had been mistakenly left out of the range entirely).
    description:
      "The aim was to create a special publication about Carl Gustav Jung, Swiss psychiatrist and psychoanalyst who founded analytical psychology. Among the central concepts of analytical psychology is individuation — the lifelong psychological process of differentiation of the self out of each individual's conscious and unconscious elements. Jung considered it to be the main task of human development. He created some of the best known psychological concepts, including synchronicity, archetypal phenomena, the collective unconscious, the psychological complex, and extraversion and introversion.",
    hero: {
      src: "/images/work/carl-jung/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // Explicit groups: default full/pair alternation for the first 12
    // images (011 no longer exists on disk, so the range now starts at
    // 012), then the last two (024, 025) each full width instead of
    // paired together.
    galleryGroups: [1, 2, 1, 2, 1, 2, 1, 2, 1, 1],
    images: [
      { src: "/images/work/carl-jung/012.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/013.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/014.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/015.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/016.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/017.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/018.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/019.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/020.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/021.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/022.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/023.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/024.jpg", width: 2200, height: 1375 },
      { src: "/images/work/carl-jung/025.jpg", width: 2200, height: 1375 },
    ],
  },

  "intercoop": {
    slug: "intercoop",
    bgColor: "#F6DDD9",
    // The exact vibrant red sampled from the "inter coop." logo mark --
    // used for everything on the page (title, body, labels, header,
    // footer). Every project uses exactly two colors: bgColor + this one.
    textColor: "#F20102",
    mutedTextColor: "#F20102",
    title: "Intercoop",
    metadata: [
      { label: "Services", value: "Branding, editorial, web" },
      { label: "Industry", value: "Editorial cooperative" },
      { label: "Client", value: "Intercoop" },
      { label: "Year", value: "2015" },
    ],
    description:
      "A brand identity redesign for Intercoop, an editorial cooperative based in Buenos Aires — built so clients could touch and feel the essence of the brand through its own communication elements. “An autonomous association of people united voluntarily to meet their common economic, social, and cultural needs — a jointly owned, democratically controlled business.” Each part of the cooperative acts independently, but together they bring one layered, playful personality.",
    hero: {
      src: "/images/work/intercoop/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // Reordered per Guada's notes: open with 026 (the wordmark), then the
    // "INTERCOOP BRANDING" mark (041), then 042-053, then 027-040 (moved to
    // sit right before the close), and close with the three book-cover
    // mockups side by side (054-056) as the final flourish. Every page in
    // the folder now appears exactly once across this list.
    // One continuous scroll, no gaps between images.
    gallerySeamless: true,
    images: [
      { src: "/images/work/intercoop/026.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/041.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/042.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/043.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/044.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/045.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/046.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/047.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/048.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/049.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/050.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/051.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/052.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/053.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/027.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/028.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/029.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/030.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/031.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/032.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/034.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/035.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/036.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/037.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/038.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/039.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/040.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/054.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/055.jpg", width: 2200, height: 1375 },
      { src: "/images/work/intercoop/056.jpg", width: 2200, height: 1375 },
    ],
  },

  "bienal-buenos-aires": {
    slug: "bienal-buenos-aires",
    bgColor: "#F6F5EF",
    textColor: "#171717",
    mutedTextColor: "#171717",
    title: "Bienal Arte Joven Buenos Aires",
    metadata: [
      { label: "Services", value: "Posters, postcards, flyers, merchandising, brochure, public ads" },
      { label: "Industry", value: "Culture / city government" },
      { label: "Client", value: "Buenos Aires Ciudad" },
      { label: "Year", value: "2015" },
    ],
    description:
      "Identity and editorial for the city's youth art biennial — call for entries, exhibition signage, festival programming, and merchandise, each stage of the event given its own color from a shared rotating palette so visitors could tell at a glance where they were.",
    hero: {
      src: "/images/work/bienal-buenos-aires/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // 057 dropped (near-blank divider). The next 4 read as "explorations":
    // 058 alone, 059+060 side by side, 061 alone, then 062 and 063 each
    // alone -- the rest (064 on) keeps the default full/pair alternation.
    galleryGroups: [1, 2, 1, 1, 1],
    images: [
      { src: "/images/work/bienal-buenos-aires/058.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/059.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/060.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/061.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/062.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/063.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/064.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/065.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/066.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/067.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/068.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/069.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/070.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/071.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/072.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/073.jpg", width: 2200, height: 1375 },
      { src: "/images/work/bienal-buenos-aires/074.jpg", width: 2200, height: 1375 },
    ],
  },

  "mecha-meets-unreal": {
    slug: "mecha-meets-unreal",
    bgColor: "#F3EDE3",
    textColor: "#241C14",
    mutedTextColor: "#241C14",
    title: "Mecha Meets Unreal",
    metadata: [
      { label: "Services", value: "Branding, signage, print" },
      { label: "Industry", value: "Hospitality / food" },
      { label: "Client", value: "Mecha — Meet & Grill" },
      { label: "Year", value: "2016" },
    ],
    description:
      "Identity for Mecha, a meet & grill restaurant — wordmark, signage, menus, and print collateral built around a simple woodcut-style mark and a kraft-paper material palette that reads warm rather than corporate.",
    hero: {
      src: "/images/work/mecha-meets-unreal/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    images: [
      { src: "/images/work/mecha-meets-unreal/075.jpg", width: 2200, height: 1375 },
      { src: "/images/work/mecha-meets-unreal/076.jpg", width: 2200, height: 1375 },
      { src: "/images/work/mecha-meets-unreal/077.jpg", width: 2200, height: 1375 },
      { src: "/images/work/mecha-meets-unreal/078.jpg", width: 2200, height: 1375 },
      { src: "/images/work/mecha-meets-unreal/079.jpg", width: 2200, height: 1375 },
    ],
  },

  "pavilion": {
    slug: "pavilion",
    // Pure white bg + a deep, legible lilac (darkened from Guada's swatch
    // for AA contrast against white — the swatch itself was too light to
    // read as body text).
    bgColor: "#FFFFFF",
    textColor: "#7D6470",
    mutedTextColor: "#7D6470",
    title: "Pavilion Recoleta",
    metadata: [
      { label: "Services", value: "Branding, stationery, editorial" },
      { label: "Industry", value: "Real estate" },
      { label: "Client", value: "Pavilion Recoleta" },
      { label: "Year", value: "2016" },
    ],
    description:
      "Branding for a residential development in Recoleta — stationery, a location map, and a brochure built around marble textures and a dusty rose accent, aiming for considered rather than corporate.",
    hero: {
      src: "/images/work/pavilion/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // 089 was missing (its export was corrupted like intercoop's 033 --
    // only the top strip decoded) -- salvaged the same way, cropped to the
    // intact region, rather than dropping it. Explicit groups so the
    // business cards (087) stand alone and the two outdoor/magazine
    // mockups (088, 089) sit side by side instead of the default rhythm
    // pairing 087 with 088.
    galleryGroups: [1, 2, 1, 2, 1, 1, 2],
    images: [
      { src: "/images/work/pavilion/080.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pavilion/081.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pavilion/082.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pavilion/083.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pavilion/084.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pavilion/085.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pavilion/086.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pavilion/087.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pavilion/088.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pavilion/089.jpg", width: 2200, height: 247 },
    ],
  },

  "racket": {
    slug: "racket",
    // Pure white — matches the white already baked into the source images
    // exactly, so the seamless gallery has no visible seam against the
    // page background.
    bgColor: "#FFFFFF",
    textColor: "#000000",
    mutedTextColor: "#000000",
    title: "Racket Club",
    metadata: [
      { label: "Services", value: "Branding, web design" },
      { label: "Industry", value: "Sports & leisure" },
      { label: "Client", value: "Racket Club" },
      { label: "Year", value: "2017" },
    ],
    description:
      "Branding and a booking website for a paddle and tennis club — a confident wordmark paired with court photography and a dark, editorial site that makes reserving a court feel like part of the brand.",
    hero: {
      src: "/images/work/racket/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // One continuous scroll, no gaps between images.
    gallerySeamless: true,
    images: [
      { src: "/images/work/racket/090.jpg", width: 2200, height: 1375 },
      { src: "/images/work/racket/091.jpg", width: 2200, height: 1375 },
      { src: "/images/work/racket/092.jpg", width: 2200, height: 1375 },
      { src: "/images/work/racket/093.jpg", width: 2200, height: 1375 },
      { src: "/images/work/racket/094.jpg", width: 2200, height: 1375 },
      { src: "/images/work/racket/095.jpg", width: 2200, height: 1375 },
    ],
  },

  "pfizer": {
    slug: "pfizer",
    // Pure white — matches the white baked into the source images, no seam.
    bgColor: "#FFFFFF",
    textColor: "#000000",
    mutedTextColor: "#000000",
    title: "Pfizer Sustainability Report",
    metadata: [
      { label: "Services", value: "Editorial design, data visualization" },
      { label: "Industry", value: "Pharma / sustainability" },
      { label: "Client", value: "Pfizer" },
      { label: "Year", value: "2017" },
    ],
    description:
      "Editorial design for Pfizer's annual sustainability report — a system of color-coded sections (governance, environment, people, community) built to make a dense report skimmable without flattening the data.",
    hero: {
      src: "/images/work/pfizer/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // One continuous scroll, no gaps between images.
    gallerySeamless: true,
    images: [
      { src: "/images/work/pfizer/096.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pfizer/097.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pfizer/098.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pfizer/099.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pfizer/100.jpg", width: 2200, height: 1375 },
      { src: "/images/work/pfizer/101.jpg", width: 2200, height: 1375 },
    ],
  },

  "uno-en-uno": {
    slug: "uno-en-uno",
    // Pure white — matches the white baked into the source images, no seam.
    bgColor: "#FFFFFF",
    textColor: "#000000",
    mutedTextColor: "#000000",
    title: "Uno en Uno",
    metadata: [
      { label: "Services", value: "Web design, branding" },
      { label: "Industry", value: "Architecture" },
      { label: "Client", value: "Uno en Uno Estudio" },
      { label: "Year", value: "2017" },
    ],
    description:
      "Website design for an architecture studio — a dark, image-forward site built to let the studio's own built work, like the MOHO building, do the talking.",
    hero: {
      src: "/images/work/uno-en-uno/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // One continuous scroll, no gutters/gaps between images — matches the
    // dark, edge-to-edge feel of the site itself.
    gallerySeamless: true,
    images: [
      { src: "/images/work/uno-en-uno/103.jpg", width: 2200, height: 1375 },
      { src: "/images/work/uno-en-uno/104.jpg", width: 2200, height: 1375 },
      { src: "/images/work/uno-en-uno/105.jpg", width: 2200, height: 1375 },
    ],
  },

  "hedwig-and-the-angry-inch": {
    slug: "hedwig-and-the-angry-inch",
    // Exact navy sampled from the source images (107/108). Back to the
    // site-wide two-color rule: bg + this one blush pink for everything
    // else (title, body, dividers, labels, header, footer) -- no separate
    // third shade.
    bgColor: "#000232",
    textColor: "#FEB7B8",
    mutedTextColor: "#FEB7B8",
    title: "Hedwig and the Angry Inch",
    metadata: [
      { label: "Services", value: "Collage illustration, motion story board" },
      { label: "Industry", value: "Film" },
      { label: "Client", value: "Self-initiated" },
      { label: "Year", value: "2018" },
    ],
    description:
      "A reimagined title sequence for Hedwig and the Angry Inch — collage illustrations and a motion story board, hand-built type and a particle field introducing the film, followed by a set of cast and crew credit cards for the full ensemble.",
    hero: {
      src: "/images/work/hedwig-and-the-angry-inch/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // Video goes first — right after the description, before any photos.
    // One continuous scroll, no gaps between items.
    gallerySeamless: true,
    images: [
      { vimeoId: "101677526" },
      { src: "/images/work/hedwig-and-the-angry-inch/107.jpg", width: 2200, height: 1375 },
      { src: "/images/work/hedwig-and-the-angry-inch/108.jpg", width: 2200, height: 1375 },
      { src: "/images/work/hedwig-and-the-angry-inch/109.jpg", width: 2200, height: 1375 },
      { src: "/images/work/hedwig-and-the-angry-inch/110.jpg", width: 2200, height: 1375 },
      { src: "/images/work/hedwig-and-the-angry-inch/111.jpg", width: 2200, height: 1375 },
    ],
  },

  "festival-muralistas": {
    slug: "festival-muralistas",
    bgColor: "#FFF73F",
    textColor: "#C24EAA",
    mutedTextColor: "#C24EAA",
    title: "Festival de Muralistas Urbanos",
    metadata: [
      { label: "Services", value: "Poster design" },
      { label: "Industry", value: "Street art / culture" },
      { label: "Client", value: "School project" },
      { label: "Year", value: "2015" },
    ],
    description:
      "A poster series for a street art festival taking place in the bare streets of the port of Buenos Aires, surrounded by recycled containers and riverbank walls — spectators walk among the artists, eat from local vendors, and watch world-class graffiti artists turn blank canvas into massive collaborative murals.",
    hero: {
      src: "/images/work/festival-muralistas/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // One continuous scroll, no gaps between images.
    gallerySeamless: true,
    images: [
      { src: "/images/work/festival-muralistas/112.jpg", width: 2200, height: 1375 },
      { src: "/images/work/festival-muralistas/113.jpg", width: 2200, height: 1375 },
      { src: "/images/work/festival-muralistas/114.jpg", width: 2200, height: 1375 },
      // Original 116 (a blank divider page from the PDF) dropped -- this
      // 116.png is a new graphic Guada made herself, not from the PDF,
      // placed between the chairs photo (114) and the "fanáticos
      // espontáneos" foldout (115) per her note. noCrop: true so its own
      // ~2:1 shape renders full width without being forced into the 16:10
      // box; spaced: true breaks the seamless flush rhythm just for this
      // one image so it doesn't sit glued to its neighbors.
      { src: "/images/work/festival-muralistas/116.png", width: 1774, height: 887, noCrop: true, spaced: true },
      { src: "/images/work/festival-muralistas/115.jpg", width: 2200, height: 1375 },
      { src: "/images/work/festival-muralistas/117.jpg", width: 2200, height: 1375 },
    ],
  },

  "coco-rosie": {
    slug: "coco-rosie",
    bgColor: "#27323E",
    textColor: "#D2FFD5",
    mutedTextColor: "#D2FFD5",
    title: "CocoRosie",
    metadata: [
      { label: "Services", value: "Illustration, vinyl design" },
      { label: "Industry", value: "Music" },
      { label: "Client", value: "CocoRosie — Noah's Ark" },
      { label: "Year", value: "2016" },
    ],
    description:
      "Collage illustration and layout design for experimental freak-folk band CocoRosie's Noah's Ark — a fusion of ‘soft surrealism,’ hip hop, and electronica that called for an equally strange, hand-drawn cover.",
    hero: {
      src: "/images/work/coco-rosie/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // One continuous scroll, no gaps between images.
    gallerySeamless: true,
    images: [
      { src: "/images/work/coco-rosie/118.jpg", width: 2200, height: 1375 },
      { src: "/images/work/coco-rosie/119.jpg", width: 2200, height: 1375 },
      { src: "/images/work/coco-rosie/120.jpg", width: 2200, height: 1375 },
    ],
  },

  "wes-anderson": {
    slug: "wes-anderson",
    bgColor: "#FBEEE6",
    textColor: "#2A1F1A",
    mutedTextColor: "#2A1F1A",
    title: "Wes Anderson",
    metadata: [
      { label: "Services", value: "Illustration, collage" },
      { label: "Industry", value: "Personal project" },
      { label: "Client", value: "Self-initiated" },
      { label: "Year", value: "2016" },
    ],
    description:
      "Collage illustrations around Wes Anderson's The Life Aquatic, The Royal Tenenbaums, and The Darjeeling Limited, made for a director film series. Handmade aesthetic, signature curios, and saturated color — quirky, bold, and a little nostalgic, the same way his movie cosmos is identifiable in every frame.",
    hero: {
      src: "/images/work/wes-anderson/hero.png",
      width: 2200,
      height: 1375,
    },
    hideHero: true,
    // One continuous scroll, no gaps between images.
    gallerySeamless: true,
    images: [
      { src: "/images/work/wes-anderson/121.jpg", width: 2200, height: 1375 },
      { src: "/images/work/wes-anderson/122.jpg", width: 2200, height: 1375 },
      { src: "/images/work/wes-anderson/123.jpg", width: 2200, height: 1375 },
      { src: "/images/work/wes-anderson/124.jpg", width: 2200, height: 1375 },
      { src: "/images/work/wes-anderson/125.jpg", width: 2200, height: 1375 },
      { src: "/images/work/wes-anderson/126.jpg", width: 2200, height: 1375 },
    ],
  },

  "pogo-tv": {
    slug: "pogo-tv",
    bgColor: "#FFFED1",
    textColor: "#3600A1",
    mutedTextColor: "#3600A1",
    title: "Pogo TV",
    metadata: [
      { label: "Services", value: "Motion identity, on-air branding" },
      { label: "Industry", value: "Broadcast / TV" },
      { label: "Client", value: "Pogo TV" },
      { label: "Year", value: "2018" },
    ],
    description:
      "A motion identity system for Pogo TV — show bumpers, lower thirds, and on-air idents built around tape-deck nostalgia and confetti-bright color blocking. Type-driven cards for play/pause moments, program marquees, and the J.POP special, designed to read as clearly in a single frame as in motion.",
    hero: {
      src: "/images/work/pogo-tv/hero.png",
      width: 1683,
      height: 935,
    },
    hideHero: true,
    // No hero banner for this project -- page goes straight from the
    // header into title/metadata/description, then the video.
    // Fixed video section (not inline in `images`, unlike Hedwig) --
    // renders directly below the description/metadata, above the still
    // grid. background: true = Vimeo's chrome-free background mode (silent
    // autoplay loop, no controls, not clickable) per Guada's note. Drop it
    // to go back to variant A (normal chrome, no autoplay, pausable/audible).
    video: { vimeoId: "1227887904", background: true, hoverSeekControls: true, rounded: true },
    // Plain responsive grid, natural aspect ratio per still -- no crop.
    // 3 columns desktop (24 images = 8 rows), 1 mobile.
    galleryNaturalGrid: true,
    galleryNaturalGridCols: 3,
    // Filenames + order as Guada renamed/reordered them in the folder --
    // pogo-01..24, sorted numerically, unchanged from that.
    images: [
      { src: "/images/work/pogo-tv/pogo-01.jpg", width: 1683, height: 935 },
      { src: "/images/work/pogo-tv/pogo-02.jpg", width: 1660, height: 947 },
      { src: "/images/work/pogo-tv/pogo-03.jpg", width: 1683, height: 935 },
      { src: "/images/work/pogo-tv/pogo-04.jpg", width: 1681, height: 936 },
      { src: "/images/work/pogo-tv/pogo-05.jpg", width: 1672, height: 940 },
      { src: "/images/work/pogo-tv/pogo-06.jpg", width: 1686, height: 933 },
      { src: "/images/work/pogo-tv/pogo-07.jpg", width: 1678, height: 937 },
      { src: "/images/work/pogo-tv/pogo-08.jpg", width: 1685, height: 934 },
      { src: "/images/work/pogo-tv/pogo-09.jpg", width: 1676, height: 938 },
      { src: "/images/work/pogo-tv/pogo-10.jpg", width: 1678, height: 937 },
      { src: "/images/work/pogo-tv/pogo-11.jpg", width: 1672, height: 941 },
      { src: "/images/work/pogo-tv/pogo-12.jpg", width: 1677, height: 938 },
      { src: "/images/work/pogo-tv/pogo-13.jpg", width: 2000, height: 1128 },
      { src: "/images/work/pogo-tv/pogo-14.jpg", width: 2000, height: 1115 },
      { src: "/images/work/pogo-tv/pogo-15.jpg", width: 2000, height: 1122 },
      { src: "/images/work/pogo-tv/pogo-16.jpg", width: 2000, height: 1113 },
      { src: "/images/work/pogo-tv/pogo-17.jpg", width: 2000, height: 1099 },
      { src: "/images/work/pogo-tv/pogo-18.jpg", width: 2000, height: 1118 },
      { src: "/images/work/pogo-tv/pogo-19.jpg", width: 2000, height: 1113 },
      { src: "/images/work/pogo-tv/pogo-20.jpg", width: 2000, height: 1117 },
      { src: "/images/work/pogo-tv/pogo-21.jpg", width: 2000, height: 1125 },
      { src: "/images/work/pogo-tv/pogo-22.jpg", width: 2000, height: 1105 },
      { src: "/images/work/pogo-tv/pogo-23.jpg", width: 2000, height: 1116 },
      { src: "/images/work/pogo-tv/pogo-24.jpg", width: 2000, height: 1114 },
    ],
  },

  "car-photography": {
    slug: "car-photography",
    bgColor: "#1B1B1B",
    textColor: "#F0EDE7",
    mutedTextColor: "#F0EDE7",
    title: "Car Photography",
    metadata: [
      { label: "Services", value: "Photography" },
      { label: "Industry", value: "Personal project" },
      { label: "Client", value: "Self-initiated" },
      { label: "Year", value: "—" },
    ],
    description:
      "A personal photography series chasing light, chrome, and old cars.",
    // This project isn't in the old portfolio PDF either -- the only asset
    // available right now is the /graphic-design grid thumbnail, reused as
    // the hero. Needs real photos from Guada to fill out the rest of the
    // page.
    hero: {
      src: "/images/work/car-photography/hero.png",
      width: 1078,
      height: 1753,
    },
    hideHero: true,
    images: [
      { src: "/images/work/car-photography/001.jpg", width: 1280, height: 1829 },
      { src: "/images/work/car-photography/002.jpg", width: 400, height: 400 },
      { src: "/images/work/car-photography/003.jpg", width: 1280, height: 1280 },
      { src: "/images/work/car-photography/004.jpg", width: 1280, height: 1280 },
      { src: "/images/work/car-photography/005.jpg", width: 1280, height: 1280 },
    ],
  },

};

export function getVisualProject(slug: string): VisualProject | undefined {
  return visualProjects[slug];
}
