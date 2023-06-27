const tokens = {
  "colors.base": {
    "value": "#1E1A1A",
    "variable": "var(--colors-base)"
  },
  "colors.bgBase": {
    "value": "#F8F9FA",
    "variable": "var(--colors-bg-base)"
  },
  "colors.white": {
    "value": "#FFFFFF",
    "variable": "var(--colors-white)"
  },
  "colors.primary": {
    "value": "#2B2B2B",
    "variable": "var(--colors-primary)"
  },
  "colors.secondary": {
    "value": "#777272",
    "variable": "var(--colors-secondary)"
  },
  "colors.tertiary": {
    "value": "#323232",
    "variable": "var(--colors-tertiary)"
  },
  "colors.quaternary": {
    "value": "#AEAEAE",
    "variable": "var(--colors-quaternary)"
  },
  "fonts.futura": {
    "value": "Futura",
    "variable": "var(--fonts-futura)"
  },
  "fontSizes.2xs": {
    "value": "0.5rem",
    "variable": "var(--font-sizes-2xs)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.125rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "1.875rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "2.25rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "3rem",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontSizes.6xl": {
    "value": "3.75rem",
    "variable": "var(--font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    "value": "4.5rem",
    "variable": "var(--font-sizes-7xl)"
  },
  "fontSizes.8xl": {
    "value": "6rem",
    "variable": "var(--font-sizes-8xl)"
  },
  "fontSizes.9xl": {
    "value": "8rem",
    "variable": "var(--font-sizes-9xl)"
  },
  "borders.primary": {
    "value": "#E8E8E8",
    "variable": "var(--borders-primary)"
  },
  "gradients.signUp": {
    "value": "linear-gradient(90deg, #8746E5 0%, #DB2777 100%)",
    "variable": "var(--gradients-sign-up)"
  },
  "sizes.maxWidth": {
    "value": "1440px",
    "variable": "var(--sizes-max-width)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.headerHeight": {
    "value": "80px",
    "variable": "var(--sizes-header-height)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "spacing.baseX": {
    "value": "100px",
    "variable": "var(--spacing-base-x)"
  },
  "spacing.baseY": {
    "value": "64px",
    "variable": "var(--spacing-base-y)"
  },
  "radii.xs": {
    "value": "0.125rem",
    "variable": "var(--radii-xs)"
  },
  "radii.sm": {
    "value": "0.25rem",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "0.375rem",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "0.5rem",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "0.75rem",
    "variable": "var(--radii-xl)"
  },
  "radii.2xl": {
    "value": "1rem",
    "variable": "var(--radii-2xl)"
  },
  "radii.3xl": {
    "value": "1.5rem",
    "variable": "var(--radii-3xl)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "letterSpacings.sm": {
    "value": "0.01em",
    "variable": "var(--letter-spacings-sm)"
  },
  "letterSpacings.base": {
    "value": "0.03em",
    "variable": "var(--letter-spacings-base)"
  },
  "letterSpacings.lg": {
    "value": "0.06em",
    "variable": "var(--letter-spacings-lg)"
  },
  "shadows.float": {
    "value": "0px 2px 4px 0px rgba(23, 13, 13, 0.04), 0px 1px 2px -1px rgba(23, 13, 13, 0.08), 0px 0px 0px 1px rgba(23, 13, 13, 0.08);",
    "variable": "var(--shadows-float)"
  },
  "shadows.floatHover": {
    "value": "0px 2px 4px 0px rgba(23, 13, 13, 0.04), 0px 1px 2px -1px rgba(23, 13, 13, 0.08), 0px 0px 0px 1px rgba(23, 13, 13, 0.08), 0px 2px 4px 0px rgba(23, 13, 13, 0.1)",
    "variable": "var(--shadows-float-hover)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "spacing.-baseX": {
    "value": "calc(var(--spacing-base-x) * -1)",
    "variable": "var(--spacing-base-x)"
  },
  "spacing.-baseY": {
    "value": "calc(var(--spacing-base-y) * -1)",
    "variable": "var(--spacing-base-y)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar