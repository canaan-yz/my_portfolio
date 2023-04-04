// cause of vite pre compiler, this file have to change .js to .cjs suffix.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', '--apple-system', 'Helvetica', 'Arial', 'sans-serif'],
      },
      gridTemplateRows: {
        // https://tailwindcss.com/docs/grid-template-rows
        '10': 'repeat(10, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        'cv-layout': 'minmax(0, 1fr) minmax(0, 10fr) minmax(0, 1fr)',
      },
      gridTemplateColumns: {
        'cv-layout': 'minmax(0, 2fr) minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}