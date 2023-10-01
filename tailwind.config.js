/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "bs": '3px 0px 15px -1px rgba(0,0,0,0.1)'
      },
      colors:{
        "cPurple": "#E9EFFF",
        "cGreenOpacity": "#F3FAFC",
        "cGreenSolid": "#037092"
      }
    },
  },
  plugins: [],
}