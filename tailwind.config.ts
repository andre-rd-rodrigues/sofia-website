import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        bgBlue: "#ECF4FA",
        blue: "#011954",
        darkBlue: "#031440",
        yellow: "#B19460",
        cyan: "#00BFC8",
        dark: "#2f333a",
        orange: "#FD7959"
      }
    }
  },
  plugins: []
};
export default config;
