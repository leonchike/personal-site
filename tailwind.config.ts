import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-elzavariable)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-gallient)", "ui-serif", "Georgia"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-dark": "var(--color-primary-dark)",
        "primary-white": "var(--color-primary-white)",
        "primary-white-70": "var(--color-primary-white-70)",
        "primary-white-90": "var(--color-primary-white-90)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "25%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn300: "fadeIn 300ms ease-out forwards",
        fadeIn750: "fadeIn 750ms ease-out forwards",
        fadeIn1000: "fadeIn 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
