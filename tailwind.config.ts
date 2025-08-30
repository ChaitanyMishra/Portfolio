import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0e1129",
        violet: "#5c2b9a",
        cyan: "#00bcd4",
        accent: "#7f5af0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;