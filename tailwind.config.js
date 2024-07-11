/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
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
        dark2: "rgb(31 42 55)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
        "grey-0": "#fff",
        "grey-50": "#f9fafb",
        "grey-100": "#f3f4f6",
        "grey-200": "#e5e7eb",
        "grey-300": "#d1d5db",
        "grey-400": "#9ca3af",
        "grey-500": "#6b7280",
        "grey-600": "#4b5563",
        "grey-700": "#374151",
        "grey-800": "#1f2937",
        "grey-900": "#111827",

        // Blues
        "blue-100": "#e0f2fe",
        "blue-700": "#0369a1",

        // Greens
        "green-100": "#dcfce7",
        "green-700": "#15803d",

        // Yellows
        "yellow-100": "#fef9c3",
        "yellow-700": "#a16207",

        // Silvers
        "silver-100": "#e5e7eb",
        "silver-700": "#374151",

        // Indigos
        "indigo-100": "#e0e7ff",
        "indigo-700": "#4338ca",

        // Reds
        "red-100": "#fee2e2",
        "red-700": "#b91c1c",
        "red-800": "#991b1b",
      },
      fontFamily: {
        // sans: ['Poppins', 'sans-serif'],
        sans: ["Mulish", "sans-serif"],
        mono: ["Rokkitt", "monospace"],
      },
      spacing: {
        180: "32rem",
      },
      boxShadow: {
        // Shadows
        sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
        md: "0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06)",
        lg: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
      },
      backdropColor: {
        // Backdrop
        default: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: ["flowbite/plugin", require("@tailwindcss/aspect-ratio")],
};
