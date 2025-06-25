/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Synkr': {
          '50':  '#f5f8ff',
          '100': '#e9efff',
          '200': '#ccd9ff',
          '300': '#a7bcff',
          '400': '#7c9bff',
          '500': '#517aff',   // Primary
          '600': '#345dff',   // Strong Primary
          '700': '#2b4dd4',   // Accent
          '800': '#233db0',
          '900': '#1b308c',
          '950': '#101b4d',   // Deep Shadow/Night Mode
        },
      },
    },
  },
  plugins: [],
}
