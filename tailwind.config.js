/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
          DEFAULT: "hsl(180, 66%, 49%)", // custom cyan color
          light: "hsl(180, 66%, 69%)", // custom cyanLight color
        },
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        darkBlue: "rgb(55 88 249)",
        dark2:"rgb(31 42 55)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
      },
      fontFamily: {
        // sans: ['Poppins', 'sans-serif'],
        sans: ["Mulish", "sans-serif"],
        mono: ["Rokkitt", "monospace"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
