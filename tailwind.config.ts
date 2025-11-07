import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          foreground: "#F4F3FF"
        },
        accent: {
          DEFAULT: "#22D3EE",
          foreground: "#041420"
        },
        background: "#05030F",
        surface: "#0C0A1A"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.35)"
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at center, rgba(34,211,238,0.15), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
