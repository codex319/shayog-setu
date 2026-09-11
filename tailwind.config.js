/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        // used by the ported problem/challenge components
        editorial: ["Fraunces", "Georgia", "serif"],
        hindi: ["Noto Sans Devanagari", "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#12181B",
      },
      boxShadow: {
        panel: "0 1px 2px rgba(18,24,27,0.06), 0 8px 24px -12px rgba(18,24,27,0.15)",
        // v4-style aliases used by the ported problem/challenge components
        "2xs": "0 1px 1px rgba(18,24,27,0.04)",
        xs: "0 1px 2px rgba(18,24,27,0.06)",
      },
      backdropBlur: {
        xs: "2px",
      },
      scale: {
        103: "1.03",
      },
    },
  },
  plugins: [],
};
