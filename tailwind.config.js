/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Fraunces, monospace",
      barlow: "Barlow, monospace",
    },
    fontSize: {
      h1: "72px",
      body: "16px",
      title: "150px",
      h4: "24px",
    },
    lineHeight: {
      big: "72px",
      body: "26px",
      title: "72px",
      h4: "32px",
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
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
