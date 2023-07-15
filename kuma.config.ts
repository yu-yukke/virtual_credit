import { createTheme } from '@kuma-ui/core';

const theme = createTheme({});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export type Theme = UserTheme;
}

export default theme;
