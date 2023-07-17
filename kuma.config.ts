import { createTheme } from '@kuma-ui/core';

const theme = createTheme({
  colors: {
    text: {
      primary: '#2B2B2B',
      secondary: '#777272',
      tertiary: '#323232',
      quaternary: '#AEAEAE',
    },
    border: {
      primary: '#E8E8E8',
    },
  },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  // eslint-disable-next-line
  export interface Theme extends UserTheme {}
}

export default theme;
