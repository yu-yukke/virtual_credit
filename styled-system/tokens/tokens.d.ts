export type Token = "colors.base" | "colors.white" | "colors.primary" | "colors.secondary" | "fonts.base" | "fonts.gillSans" | "fontSizes.xs" | "fontSizes.sm" | "fontSizes.md" | "fontSizes.lg" | "fontSizes.xl" | "fontSizes.2xl" | "fontSizes.3xl" | "fontSizes.4xl" | "letterSpacings.base" | "letterSpacings.wider" | "letterSpacings.widest" | "borders.primary" | "gradients.body" | "shadows.header" | "radii.sm" | "radii.md" | "sizes.maxWidth" | "sizes.full" | "sizes.headerHeight" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "spacing.baseX" | "spacing.baseY" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "spacing.-baseX" | "spacing.-baseY"

export type ColorToken = "base" | "white" | "primary" | "secondary"

export type FontToken = "base" | "gillSans"

export type FontSizeToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"

export type LetterSpacingToken = "base" | "wider" | "widest"

export type BorderToken = "primary"

export type GradientToken = "body"

export type ShadowToken = "header"

export type RadiusToken = "sm" | "md"

export type SizeToken = "maxWidth" | "full" | "headerHeight" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type SpacingToken = "baseX" | "baseY" | "-baseX" | "-baseY"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type Tokens = {
		colors: ColorToken
		fonts: FontToken
		fontSizes: FontSizeToken
		letterSpacings: LetterSpacingToken
		borders: BorderToken
		gradients: GradientToken
		shadows: ShadowToken
		radii: RadiusToken
		sizes: SizeToken
		spacing: SpacingToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"