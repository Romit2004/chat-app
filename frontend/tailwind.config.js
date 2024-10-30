/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 35px rgba(14, 165, 233, 0.3)',
        '4xl': '0 0 35px rgba(66, 245, 69, 0.3)'
      },
      backgroundColor: {
        'dark' : '#1D232A'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}