import { useMemo } from 'react'

import { ParallaxProvider } from 'react-scroll-parallax'
import { Provider as ReduxProvider } from 'react-redux'
import { configureStore } from 'core/stores'

import ScreenContext from './ScreenContext'

const ComposeProvider = ({ children }) => {
  const providers = useMemo(
    () => [
      [ReduxProvider, { store: configureStore() }],
      ParallaxProvider,
      ScreenContext
    ],
    []
  )

  return providers.reduceRight((componentTree, cfg) => {
    const [Provider, props] = Array.isArray(cfg) ? cfg : [cfg, {}]
    return <Provider {...props}>{componentTree}</Provider>
  }, children)
}

export default ComposeProvider
