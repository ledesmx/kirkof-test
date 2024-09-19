/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        'balck': '#000000',
        'white': '#ffffff',
        'dark': '#171717',
        'dark-hover': '#1f1e1e',
        'datk-clicked': '#242424',
        'yellow': '#ffcc00',
        'yellow-hover': '#ddd321',
        'yellow-clicked': '#ffd737',
        'badge-red': '#fdcbcb',
        'badge-salmon': '#fdddcb',
        'badge-yellow': '#fdf8c8',
        'error': '#dc2828',
        'success': '#3bc922',
        'gray': '#747474',
        'gray-light': '#a9a9a9',
        'cream': '#f4f4f4'
      },
    },
  },
  plugins: [],
}

