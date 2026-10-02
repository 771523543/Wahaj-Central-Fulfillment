import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "وهج | WAHAJ",

    short_name: "وهج",

    description:
      "بخور ومخمريات وعطور ومجموعات وهدايا",

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
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  };
}