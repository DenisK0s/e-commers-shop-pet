import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "4rem",
        lg: "8rem",
        xl: "10rem",
        "2xl": "16rem",
        "button-primary": "0.625rem 1.625rem",
      },
    },
    extend: {
      padding: {
        "button-primary": "0.625rem 1.625rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppings: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        hero: [
          "6rem",
          {
            lineHeight: "6rem",
            letterSpacing: "-0.12em",
            fontWeight: "500",
          },
        ],
        heading1: [
          "5rem",
          {
            lineHeight: "5.25rem",
            letterSpacing: "-0.1875em",
            fontWeight: "500",
          },
        ],
        heading2: [
          "4.5rem",
          {
            lineHeight: "4.75rem",
            letterSpacing: "-0.125em",
            fontWeight: "500",
          },
        ],
        heading3: [
          "3.375rem",
          {
            lineHeight: "3.625rem",
            letterSpacing: "-0.0625rem",
            fontWeight: "500",
          },
        ],
        heading4: [
          "2.5rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-0.025rem",
            fontWeight: "500",
          },
        ],
        heading5: [
          "2.125rem",
          {
            lineHeight: "2.375rem",
            letterSpacing: "-0.0375rem",
            fontWeight: "500",
          },
        ],
        heading6: [
          "1.75rem",
          {
            lineHeight: "2.125rem",
            letterSpacing: "-0.0375rem",
            fontWeight: "500",
          },
        ],
        heading7: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "500",
          },
        ],
        xxl: [
          "1.625rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        xl: [
          "1.375rem",
          {
            lineHeight: "2.125rem",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "2rem",
          },
        ],
        md: [
          "1.125rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.625rem",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.375rem",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        "button-xl": [
          "1.625rem",
          {
            lineHeight: "2.375rem",
            fontWeight: "500",
          },
        ],
        "button-lg": [
          "1.375rem",
          {
            lineHeight: "2.125rem",
            fontWeight: "500",
          },
        ],
        "button-md": [
          "1.375rem",
          {
            lineHeight: "2.125rem",
            fontWeight: "500",
          },
        ],
        "button-sm": [
          "1rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "-0.025rem",
            fontWeight: "500",
          },
        ],
        "button-xs": [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
      },
      colors: {
        primary: "#000000",
        secondary: {
          blue: "#377DFF",
          green: "#38CB89",
          orange: "#FFAB00",
          red: "#FF5630",
        },
        neutral: {
          dark: "#141718",
          "super-dark-gray": "#232627",
          "medium-dark-gray": "#343839",
          "dark-gray": "#6C7275",
          gray: "#E8ECEF",
          "light-gray": "#F3F5F7",
          "super-light-gray": "#FEFEFE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
