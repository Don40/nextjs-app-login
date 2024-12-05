/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        move: "moveBg 10s linear infinite", // Custom animation for background movement
        moveDesktop: "moveBgDesktop 15s linear infinite", // For desktop
        moveBg: "moveBg 10s linear infinite", // Animation class
        blink: "blink 1.5s infinite", // Blink animation
      },
      keyframes: {
        moveBg: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        moveBgDesktop: {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      colors: {
        navbarBgColor: "#092e9c",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        montserrat: ["var(--font-montserrat)"],
        grotesque: ["var(--font-darker-grotesque)"],
        playfair:["var(--font-playfair-display)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
