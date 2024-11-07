/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': 'rgba(49, 245, 26, 0.98)', // Add your custom RGBA color here
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}