/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        },
      },
    },
  },
  plugins: [],
};
