import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#E8F6FF",
          100: "#BAE3FF",
          200: "#8CD0FE",
          300: "#5DBEFE",
          400: "#2FABFE",
          500: "#0199FE",
          600: "#017DD0",
          700: "#0161A2",
          800: "#014573",
          900: "#002A45",
          950: "#000E17",
        },
        secondary: {
            50: "#FFFAE8",
            100: "#FFEFB9",
            200: "#FFE48B",
            300: "#FFD95D",
            400: "#FFCE2E",
            500: "#FFC300",
            600: "#D1A000",
            700: "#A27C00",
            800: "#745900",
            900: "#463500",
            950: "#171200",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-bounce": (value) => {
            return {
              animationName: "bounce",
              animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
              animationDuration: "1s",
              animationIterationCount: "infinite",
              "@keyframes bounce": {
                "0%, 100%": {
                  transform: `translateY(${value})`,
                  animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                },
                "50%": {
                  transform: "translateY(0)",
                  animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                },
              },
            };
          },
        },
        { values: theme("spacing") }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-duration": (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme("transitionDuration") }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),
  ],
};
export default config;
