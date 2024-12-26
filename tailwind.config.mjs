/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E8EDF3",
        primary: "#33A6BA",
        dark: "#313E4F",
        gray: "#989EA7",
        grayLight: "#E8EDF3",
        red: "#FF7B92",
      },
      fontSize: {
        title: [
          "64px",
          {
            lineHeight: "64px",
            fontWeight: "300",
          },
        ],
      },
      dropShadow: {
        "3xl": [
          "0 4px 6px rgba(0, 0, 0, 0.05)",
          "0 10px 15px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
