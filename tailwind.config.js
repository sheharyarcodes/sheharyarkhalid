/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        move: {
          to: {
            strokeDashoffset: "1000",
          },
        },
        wave: {
          "0%, 60%, 100%": {
            transform: "rotate(0deg)",
          },
          "10%, 30%": {
            transform: "rotate(14deg)",
          },
          "20%": {
            transform: "rotate(-8deg)",
          },
          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
