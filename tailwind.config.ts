import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#BD4F27",
        "secondary": "#1D2128",
        "tetiary": "#FAFAFA",
        "black": "#333333",
        "dark": "#111116",
        "brown": "#737373",
        "gray": "#D9D9D9",
        "slate": "#FAFAFA",
        "red": "#FF3939",
      },
      boxShadow: {
        "input-active" : "0px 0px 12px 0px #633CFF40"
      }
    },
  },
  plugins: [],
};

export default config;