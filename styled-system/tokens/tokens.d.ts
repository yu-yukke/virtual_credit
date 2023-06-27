/* eslint-disable */
export type Token =
  | 'colors.base'
  | 'colors.bgBase'
  | 'colors.white'
  | 'colors.primary'
  | 'colors.secondary'
  | 'colors.tertiary'
  | 'colors.quaternary'
  | 'fonts.futura'
  | 'fontSizes.2xs'
  | 'fontSizes.xs'
  | 'fontSizes.sm'
  | 'fontSizes.md'
  | 'fontSizes.lg'
  | 'fontSizes.xl'
  | 'fontSizes.2xl'
  | 'fontSizes.3xl'
  | 'fontSizes.4xl'
  | 'fontSizes.5xl'
  | 'fontSizes.6xl'
  | 'fontSizes.7xl'
  | 'fontSizes.8xl'
  | 'fontSizes.9xl'
  | 'borders.primary'
  | 'gradients.signUp'
  | 'sizes.maxWidth'
  | 'sizes.full'
  | 'sizes.headerHeight'
  | 'sizes.breakpoint-sm'
  | 'sizes.breakpoint-md'
  | 'sizes.breakpoint-lg'
  | 'sizes.breakpoint-xl'
  | 'sizes.breakpoint-2xl'
  | 'spacing.baseX'
  | 'spacing.baseY'
  | 'radii.xs'
  | 'radii.sm'
  | 'radii.md'
  | 'radii.lg'
  | 'radii.xl'
  | 'radii.2xl'
  | 'radii.3xl'
  | 'radii.full'
  | 'letterSpacings.base'
  | 'shadows.float'
  | 'breakpoints.sm'
  | 'breakpoints.md'
  | 'breakpoints.lg'
  | 'breakpoints.xl'
  | 'breakpoints.2xl'
  | 'spacing.-baseX'
  | 'spacing.-baseY';

export type ColorToken =
  | 'base'
  | 'bgBase'
  | 'white'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary';

export type FontToken = 'futura';

export type FontSizeToken =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export type BorderToken = 'primary';

export type GradientToken = 'signUp';

export type SizeToken =
  | 'maxWidth'
  | 'full'
  | 'headerHeight'
  | 'breakpoint-sm'
  | 'breakpoint-md'
  | 'breakpoint-lg'
  | 'breakpoint-xl'
  | 'breakpoint-2xl';

export type SpacingToken = 'baseX' | 'baseY' | '-baseX' | '-baseY';

export type RadiusToken =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'full';

export type LetterSpacingToken = 'base';

export type ShadowToken = 'float';

export type BreakpointToken = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Tokens = {
  colors: ColorToken;
  fonts: FontToken;
  fontSizes: FontSizeToken;
  borders: BorderToken;
  gradients: GradientToken;
  sizes: SizeToken;
  spacing: SpacingToken;
  radii: RadiusToken;
  letterSpacings: LetterSpacingToken;
  shadows: ShadowToken;
  breakpoints: BreakpointToken;
} & { [token: string]: never };

export type TokenCategory =
  | 'zIndex'
  | 'opacity'
  | 'colors'
  | 'fonts'
  | 'fontSizes'
  | 'fontWeights'
  | 'lineHeights'
  | 'letterSpacings'
  | 'sizes'
  | 'shadows'
  | 'spacing'
  | 'radii'
  | 'borders'
  | 'durations'
  | 'easings'
  | 'animations'
  | 'blurs'
  | 'gradients'
  | 'breakpoints'
  | 'assets';
