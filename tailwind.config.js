/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: "true",
      padding: "16px",
      screens: {
        "2xl": "1200px",
      },
    },
    colors: {
      black: "#0F0F0F",
      white: "#FFFFFF",
      primary: {
        500: "#513973",
      },
      gray: {
        custom: "#F1F0F0",
        400: "#F1ECEC",
        500: "#888080",
        600: "#9F9F9F",
        700: "#474646",
        800: "#CDC6C6",
      },
      yellow: {
        500: "#FDCA25",
        600: "#D08B32",
      },
      Gradient: {
        one: "#513973",
        two: "#996CD9",
      },
      danger: "#F65061",
      warning: "#FD8B2B",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
