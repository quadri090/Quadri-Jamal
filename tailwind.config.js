/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-org':'#ff9804'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    fontWeight: {
      'night': '1000'
    }
  },
  plugins: [],
}
}
