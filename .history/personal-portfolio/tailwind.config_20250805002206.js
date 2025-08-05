/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      theme: {
  extend: {
    animation: {
      shine: "shine 1.5s forwards",
    },
    keyframes: {
      shine: {
        "0%": { backgroundPosition: "-200% 0" },
        "100%": { backgroundPosition: "200% 0" },
      },
    },
  
},

    },
  },
  plugins: [],
}
