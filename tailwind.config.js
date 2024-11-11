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
      boxShadow: {
        cyan: '0 0px 10px rgba(0, 255, 255, 0.5),0 0px 10px rgba(0, 255, 255, 0.5),0 0px 10px rgba(0, 25, 255, 0.5)', // Custom cyan shadow
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}