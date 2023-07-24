/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        58: "14.5rem /* 232px */",
      },
      borderWidth: {
        5: "5px",
      },
      borderColor: {
        input: "#8A94A4",
      },
      colors: {
        copy: {
          main: "#121212",
          secondary: "#464646",
          body: "#2c2c2c",
          inactive: "#5f5f5f",
        },
        background: {
          default: "#f8f9fa",
          subtle: "#eeeeee",
          inactive: "#dadada",
        },
      },
    },
  },
  plugins: [],
};
