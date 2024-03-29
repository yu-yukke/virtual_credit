import { createTheme } from '@kuma-ui/core';

const theme = createTheme({
  colors: {
    primary: '#2D2D2E',
    secondary: '#6C6C75',
    tertiary: '#C1C1C2',
    alert: '#F36B6B',
    borderPrimary: '#E8E8E8',
    bgPrimary: '#FAFAFA',
    bgSecondary: '#F8F8F8',
    bgAlert: '#FFF3F3',
  },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  // eslint-disable-next-line
  export interface Theme extends UserTheme {}
}

export default theme;
