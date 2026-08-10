import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tejasbyte Technologies",
    short_name: "Tejasbyte",
    description:
      "AI-powered software, web apps, mobile, and cloud engineering for startups and enterprises worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F1629",
    theme_color: "#5B30E8",
    orientation: "portrait",
    categories: ["business", "productivity", "technology"],
    icons: [
      { src: "/logos/favicon.png",       sizes: "32x32",   type: "image/png" },
      { src: "/logos/socialmedia-icon.png", sizes: "192x192", type: "image/png" },
      { src: "/logos/socialmedia-icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
