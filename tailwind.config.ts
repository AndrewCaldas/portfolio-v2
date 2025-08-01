import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        soft: ["var(--font-jost)", "serif"],
        elegant: ["var(--font-bitcount)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
