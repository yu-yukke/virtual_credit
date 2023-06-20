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
    html: {
      fontSize: 'md',
    },
    body: {
      color: 'base',
      bgGradient: 'body',
      letterSpacing: 'base',
      fontFamily: 'base',
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
        base: { value: '#2B2B2B' },
        white: { value: '#FFFFFF' },
        primary: { value: '#2B2B2B' },
        secondary: { value: '#9CA38F' },
      },
      fonts: {
        base: {
          value: [
            'Yu Gothic Medium',
            '游ゴシック Medium',
            'YuGothic',
            '游ゴシック体',
            'ヒラギノ角ゴ Pro W3',
            'Noto Sans JP',
          ],
        },
        gillSans: {
          value: 'Gill Sans',
        },
      },
      fontSizes: {
        xs: { value: '0.75rem' },
        sm: { value: '0.875rem' },
        md: { value: '1rem' },
        lg: { value: '1.125rem' },
        xl: { value: '1.3125rem' },
        '2xl': { value: '1.5rem' },
        '3xl': { value: '2.652rem' },
        '4xl': { value: '4rem' },
      },
      letterSpacings: {
        base: { value: '0.05rem' },
        wider: { value: '0.075rem' },
        widest: { value: '0.1rem' },
      },
      borders: {
        primary: { value: '#EAEAEA' },
      },
      gradients: {
        body: {
          value:
            'linear-gradient(rgb(244, 244, 244) 0%, rgb(255, 255, 255) 30%)',
        },
      },
      shadows: {
        header: { value: '0px 5px 30px 0px rgba(0, 0, 0, 0.03)' },
      },
      radii: {
        sm: { value: '0.125rem' },
        md: { value: '0.375rem' },
      },
      sizes: {
        maxWidth: { value: '1400px' }, // max width for this app
        full: { value: '100%' },
        headerHeight: { value: '99px' },
      },
      spacing: {
        baseX: { value: '100px' }, // base paddingX
        baseY: { value: '64px' }, // base paddingY
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
