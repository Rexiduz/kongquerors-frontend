import { useEffect } from 'react'
import { useStore } from 'core/hooks'

import './App.less'

import Home from 'pages/home'

const App = () => {
  const [, action] = useStore()

  useEffect(() => {
    if (window.solana) {
      window.solana.on('disconnect', () => {
        action.setDefaultAccount(null)
      })
    }
  }, [action])

  return <Home />
}

export default App
