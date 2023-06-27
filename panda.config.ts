import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/components/**/*.{tsx,jsx}', './src/app/**/*.{tsx,jsx}'],

  // Files to exclude
  exclude: [],

  // Define global styles
  globalCss: {
    body: {
      color: 'base',
      bg: 'bgBase',
      letterSpacing: 'base',
    },
    a: {
      _hover: {
        opacity: 0.8,
      },
    },
  },

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        base: { value: '#1E1A1A' },
        bgBase: { value: '#F8F9FA' },
        white: { value: '#FFFFFF' },
        primary: { value: '#2B2B2B' },
        secondary: { value: '#777272' },
      },
      fonts: {
        futura: {
          value: 'Futura',
        },
      },
      fontSizes: {
        '2xs': { value: '0.5rem' },
        xs: { value: '0.75rem' },
        sm: { value: '0.875rem' },
        md: { value: '1rem' },
        lg: { value: '1.125rem' },
        xl: { value: '1.25rem' },
        '2xl': { value: '1.5rem' },
        '3xl': { value: '1.875rem' },
        '4xl': { value: '2.25rem' },
        '5xl': { value: '3rem' },
        '6xl': { value: '3.75rem' },
        '7xl': { value: '4.5rem' },
        '8xl': { value: '6rem' },
        '9xl': { value: '8rem' },
      },
      borders: {
        primary: { value: '#E8E8E8' },
      },
      gradients: {
        signUp: { value: 'linear-gradient(90deg, #8746E5 0%, #DB2777 100%)' },
      },
      sizes: {
        maxWidth: { value: '1440px' }, // max width for this app
        full: { value: '100%' },
        headerHeight: { value: '80px' },
      },
      spacing: {
        baseX: { value: '100px' }, // base paddingX
        baseY: { value: '64px' }, // base paddingY
      },
      radii: {
        xs: { value: '0.125rem' },
        sm: { value: '0.25rem' },
        md: { value: '0.375rem' },
        lg: { value: '0.5rem' },
        xl: { value: '0.75rem' },
        '2xl': { value: '1rem' },
        '3xl': { value: '1.5rem' },
        full: { value: '9999px' },
      },
      letterSpacings: {
        base: { value: '0.03em' },
      },
      shadows: {
        float: {
          value:
            '0px 2px 4px 0px rgba(23, 13, 13, 0.04), 0px 1px 2px -1px rgba(23, 13, 13, 0.08), 0px 0px 0px 1px rgba(23, 13, 13, 0.08);',
        },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
