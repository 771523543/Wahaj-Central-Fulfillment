import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "وهج | WAHAJ",
    short_name: "وهج",
    description: "بخور ومخمريات وعطور ومجموعات وهدايا",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f7f2e8",
    theme_color: "#1f2a20",
    lang: "ar",
    dir: "rtl",

  };
}
