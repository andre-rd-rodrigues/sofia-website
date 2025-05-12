import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--color-background)",
        "background-alt": "var(--color-background-alt)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        "proxima-nova": "var(--font-proxima-nova)",
        kumlien: "var(--font-kumlien)",
      },
    },
  },
  plugins: [],
};
export default config;
