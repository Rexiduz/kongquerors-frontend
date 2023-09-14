import { useState, useEffect, useContext, useCallback } from 'react'
import { useMediaQuery, Context as ResponsiveContext } from 'react-responsive'

import { getBreakPoints } from 'core/styles/helpers'

const SIZE_POINT_BY_BREAKPOINT = {
  xs: 1,
  sm: 3,
  md: 5,
  lg: 7,
  xl: 11,
  xl2: 13,
  xl3: 17
}

const ScreenContext = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState()
  const [sizePoint, setSizePoint] = useState(0)

  // 1
  const xs = useMediaQuery({
    maxWidth: getBreakPoints('xs')
  })

  // 3
  const sm = useMediaQuery({
    minWidth: getBreakPoints('xs') + 1,
    maxWidth: getBreakPoints('sm')
  })

  // 5
  const md = useMediaQuery({
    minWidth: getBreakPoints('sm') + 1,
    maxWidth: getBreakPoints('md')
  })

  // 7
  const lg = useMediaQuery({
    minWidth: getBreakPoints('md') + 1,
    maxWidth: getBreakPoints('lg')
  })

  // 11
  const xl = useMediaQuery({
    minWidth: getBreakPoints('lg') + 1,
    maxWidth: getBreakPoints('xl')
  })

  // 13
  const xl2 = useMediaQuery({
    minWidth: getBreakPoints('xl') + 1,
    maxWidth: getBreakPoints('xl2')
  })

  // 17
  const xl3 = useMediaQuery({
    minWidth: getBreakPoints('xl2') + 1
  })

  // Update vh
  useEffect(() => {
    const updateScreenHeight = () => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    window.addEventListener('resize', updateScreenHeight)
    updateScreenHeight()

    return () => {
      window.removeEventListener('resize', updateScreenHeight)
    }
  }, [])

  useEffect(() => {
    let currentScreen = 'xs'
    let sizePoint = SIZE_POINT_BY_BREAKPOINT.xs

    if (sm) {
      currentScreen = 'sm'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.sm
    }

    if (md) {
      currentScreen = 'md'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.md
    }

    if (lg) {
      currentScreen = 'lg'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.lg
    }

    if (xl) {
      currentScreen = 'xl'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.xl
    }

    if (xl2) {
      currentScreen = 'xl2'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.xl2
    }

    if (xl3) {
      currentScreen = 'xl3'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.xl3
    }

    setCurrentScreen(currentScreen)
    setSizePoint(sizePoint)
  }, [lg, md, sm, xl, xl2, xl3])

  const minimumScreen = useCallback(
    (type = 'md') => {
      return SIZE_POINT_BY_BREAKPOINT?.[type] <= sizePoint
    },
    [sizePoint]
  )

  const maximumScreen = useCallback(
    (type = 'md') => {
      return SIZE_POINT_BY_BREAKPOINT?.[type] >= sizePoint
    },
    [sizePoint]
  )

  return (
    <ResponsiveContext.Provider
      displayName='ScreenContext'
      value={{
        xs,
        sm,
        md,
        lg,
        xl,
        xl2,
        xl3,
        currentScreen,
        minimumScreen,
        maximumScreen
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  )
}

const useScreen = () => {
  return useContext(ResponsiveContext)
}

export { ScreenContext as default, useScreen }
