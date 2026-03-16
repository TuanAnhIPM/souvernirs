import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#f9fdf9",
          100: "#eef6ee",
          200: "#ddecdc",
          300: "#cfe0cb",
        },
        coffee: {
          700: "#5f4739",
          800: "#3f2f25",
          900: "#2a2019",
        },
        leaf: {
          300: "#d3ebd7",
          500: "#63ae6e",
          700: "#3f8450",
        },
        gold: {
          300: "#d7bf7a",
          400: "#c9ab5f",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(36, 25, 17, 0.08)",
        lift: "0 28px 80px rgba(36, 25, 17, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(43,29,19,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(43,29,19,0.06) 1px, transparent 1px)",
      },
      letterSpacing: {
        luxe: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;