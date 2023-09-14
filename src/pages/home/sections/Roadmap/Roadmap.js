import { useScreen } from 'core/providers/ScreenContext'

import RoadMapDesktop from './Roadmap.desktop'
import RoadMapMobile from './Roadmap.mobile'

const Roadmap = () => {
  const { maximumScreen } = useScreen()

  if (maximumScreen('md')) return <RoadMapMobile />

  return <RoadMapDesktop />
}

export default Roadmap
