import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "وهج | WAHAJ",
    short_name: "وهج",
    description: "عطور وبخور ومخمريات ومجموعات هدايا بلمسة عربية معاصرة",

    start_url: "/",
    scope: "/",

    display: "standalone",
    orientation: "portrait",

    background_color: "#f7f2e8",
    theme_color: "#1f2a20",

    lang: "ar",
    dir: "rtl",

    icons: [
      {
        src: "/images/wahaj-logo.webp",
        sizes: "192x192",
        type: "image/webp",
        purpose: "any",
      },
      {
        src: "/images/wahaj-logo.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any maskable",
      },
    ],
  }
}