/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Fraunces, monospace",
      barlow: "Barlow, monospace",
    },
    extend: {
      colors: {
        "dark-cyan": "#0E8784",
        "dark-grey-blue": "#333D4B",
        "pale-orange": "#FDD6BA",
        "light-cream": "#FEFCF7",
        "grey-grey": "#83888F",
      },
      backgroundImage: {
        "hero-home-big": "url('/src/images/image-hero-coffeepress.jpg')",
      },
    },
  },
  plugins: [],
};
