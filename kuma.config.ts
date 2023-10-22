import { createTheme } from '@kuma-ui/core';

const theme = createTheme({
  colors: {
    primary: '#2D2D2E',
    secondary: '#6C6C75',
    borderPrimary: '#E8E8E8',
    bgPrimary: '#FAFAFA',
  },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  // eslint-disable-next-line
  export interface Theme extends UserTheme {}
}

export default theme;
