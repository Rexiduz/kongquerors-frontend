const breakpoints = {
  xs: ['32rem', 512], // ~512px
  sm: ['48rem', 768], // ~768px
  md: ['64rem', 1024], // ~1024px
  lg: ['80rem', 1280], // ~1280px
  xl: ['90rem', 1440], // ~1440px
  xl2: ['105rem', 1680], // ~1680px
  xl3: ['120rem', 1920] // ~1920px
}

export const getBreakPoints = (type = 'md', withUnit) => {
  return breakpoints?.[type]?.[withUnit ? 0 : 1]
}

export const mediaQueryWidth = (bp = 'lg') => {
  return `@media (max-width: ${breakpoints[bp][0]})`
}

export const mediaQueryHeight = (size = '600px') => {
  return `@media (max-height: ${size})`
}

export const mediaQuery = (bp = 'lg', size = '600px') => {
  return `@media (max-width: ${breakpoints[bp][0]}) and (max-height: ${size})`
}

export const vh = (size) => {
  return `calc(var(--vh, 1vh) * ${size})`
}
