const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}
