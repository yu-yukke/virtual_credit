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
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#fafafa',
            foreground: '#2d2d2e',
            default: '#2d2d2e',
            divider: '#e8e8e8',
            primary: '#4F33BD',
            secondary: '#4a4a4a',
            tertiary: '#6c6c75',
            danger: '#f36b6b',
          },
        },
      },
    }),
  ],
}
