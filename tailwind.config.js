/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: "#BED2F3",
        beige: "#F6F2E4",
        gris: "#27272B",
        purp: "#4F30E8",
        rosa: "#E2AFD5",
      },
      fontFamily: {
        vcr: "VCR",
        earl: "Earls Revenge",
      },
      width: {
        90: "22rem",
        98: "28rem",
        100: "32rem",
        128: "42rem",
      },
      height: {
        100: "32rem",
        128: "42rem",
      },
      zIndex: {
        0.5: "0.5",
        1: "1",
        2: "2",
      },
    },
  },
  plugins: [],
};
