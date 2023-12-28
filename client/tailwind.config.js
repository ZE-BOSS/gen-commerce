/** @type {import('tailwindcss').Config} */

const colorData = {
  'black': '#000',
  'dark-theme': '#131212',
  'primary-theme': '#D3250E',
  'secondary-theme': '#5D4A48',
  'tertiary-theme': '#ACBAC6',
  'light-theme': '#F4F5F5',
  'white': '#FFF'
}

export default {
  darkMode: ['className', 'class', '[data-mode="dark"]'],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: colorData,
      textColor: colorData,
      borderColor: colorData,
      ringColor: colorData,
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}