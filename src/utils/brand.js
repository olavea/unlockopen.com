import color from "color"

export const COLOR_PRIMARY = "#11506d"
export const COLOR_SECONDARY = "#b00056"
export const COLOR_TERTIARY = "#afc51d"
export const COLOR_QUARTERLY = "#4daadb"
export const COLOR_BACKGROUND = "#ffffff"

export const COLOR_LOGO = [
  COLOR_TERTIARY,
  COLOR_QUARTERLY,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
]

export const WORDMARK_FONT_FAMILY = '"Merriweather Sans"'
export const WORDMARK_FONT_WEIGHT_UNLOCK = 300
export const WORDMARK_FONT_COLOR_UNLOCK = "#000"
export const WORDMARK_FONT_WEIGHT_OPEN = 700
export const WORDMARK_FONT_COLOR_OPEN = "#000"

export const FONT_FAMILY = [WORDMARK_FONT_FAMILY, "sans-serif"]
export const FONT_WEIGHT = [
  WORDMARK_FONT_WEIGHT_UNLOCK,
  `${WORDMARK_FONT_WEIGHT_UNLOCK}i`,
  WORDMARK_FONT_WEIGHT_OPEN,
  `${WORDMARK_FONT_WEIGHT_OPEN}i`,
]

const _scale = s => {
  var o = 1
  while (s--) o = o / 2
  return o
}

export const scale = s => {
  if (s < 1) return 1
  return 1 - _scale(s)
}

export const invertScale = s => {
  if (s < 1) return 1
  return _scale(s)
}
export const lighten = (c, ratio) =>
  color(c)
    .mix(color(COLOR_BACKGROUND), scale(ratio))
    .string()
export const alpha = (c, ratio) =>
  color(c)
    .alpha(invertScale(ratio))
    .string()
