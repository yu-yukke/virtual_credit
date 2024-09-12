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
    extend: {
      boxShadow: {
        header:
          '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)',
        headerActive:
          '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)',
        headerNavButtonActive:
          '0px 1px 2px -1px rgba(41, 44, 49, 0.06), 0px 0px 0px 1px rgba(15, 16, 18, 0.06), 0px 2px 4px 0px rgba(73, 79, 90, 0.04)',
      },
    },
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
