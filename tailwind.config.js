/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      '3xs': '320px',
      '2xs': '400px',
      'xs': '480px',
      ...defaultTheme.screens
    }
  },
  plugins: [
    flowbitePlugin
  ],
}
