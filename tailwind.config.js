/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3D55CC',
        'darkest': '#141A33',
        'dark': '#505673',
        'medium': '#878CA8',
        'light': '#DADEF2',
        'lightest': '#F5F6FA',
      },
    }
  },
}

