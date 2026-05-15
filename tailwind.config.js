/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.2,0.8,0.2,1) both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
