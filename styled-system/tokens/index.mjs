const tokens = {
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
  "fontSizes.base": {
    "value": "14px",
    "variable": "var(--font-sizes-base)"
  },
  "letterSpacings.base": {
    "value": "0.05rem",
    "variable": "var(--letter-spacings-base)"
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
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar