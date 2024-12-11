/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          900: '#1c1c1e', // Dark background color
          800: '#2c2c2e', // Dark text box color
        },
      },
    },
  },
  plugins: [],
};