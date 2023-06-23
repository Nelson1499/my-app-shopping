/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gradientColors: {
        "purple-blue": ["purple", "blue"],
      },
    },
  },
  variants: {},
  plugins: [],
};
