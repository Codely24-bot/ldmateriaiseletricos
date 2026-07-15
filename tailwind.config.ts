import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          night: "#07111f",
          ocean: "#0a6dff",
          cobalt: "#1137ff",
          sky: "#48b3ff",
          yellow: "#ffd54a",
          red: "#f24e3d",
          slate: "#0c1727",
          line: "rgba(112, 152, 255, 0.18)",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Segoe UI", "sans-serif"],
        display: ["Outfit", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px rgba(10, 109, 255, 0.22)",
        card: "0 12px 40px rgba(2, 10, 28, 0.42)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(73, 117, 255, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(73, 117, 255, 0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
