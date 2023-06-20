const tokens = {
  "colors.base": {
    "value": "#2B2B2B",
    "variable": "var(--colors-base)"
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
    "value": "#9CA38F",
    "variable": "var(--colors-secondary)"
  },
  "fonts.base": {
    "value": "Yu Gothic Medium, 游ゴシック Medium, YuGothic, 游ゴシック体, ヒラギノ角ゴ Pro W3, Noto Sans JP",
    "variable": "var(--fonts-base)"
  },
  "fonts.gillSans": {
    "value": "Gill Sans",
    "variable": "var(--fonts-gill-sans)"
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
    "value": "1.3125rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "2.652rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "4rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "letterSpacings.base": {
    "value": "0.05rem",
    "variable": "var(--letter-spacings-base)"
  },
  "letterSpacings.wider": {
    "value": "0.075rem",
    "variable": "var(--letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    "value": "0.1rem",
    "variable": "var(--letter-spacings-widest)"
  },
  "borders.primary": {
    "value": "#EAEAEA",
    "variable": "var(--borders-primary)"
  },
  "gradients.body": {
    "value": "linear-gradient(rgb(244, 244, 244) 0%, rgb(255, 255, 255) 30%)",
    "variable": "var(--gradients-body)"
  },
  "shadows.header": {
    "value": "0px 5px 30px 0px rgba(0, 0, 0, 0.03)",
    "variable": "var(--shadows-header)"
  },
  "radii.sm": {
    "value": "0.125rem",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "0.375rem",
    "variable": "var(--radii-md)"
  },
  "sizes.maxWidth": {
    "value": "1400px",
    "variable": "var(--sizes-max-width)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.headerHeight": {
    "value": "99px",
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