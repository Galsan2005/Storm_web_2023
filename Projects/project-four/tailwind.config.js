/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        'eye': 'url("/view.png")',
        'close': 'url("/hide.png")'
      }
    },
  },
  plugins: [],
}

