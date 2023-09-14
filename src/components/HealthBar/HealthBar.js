import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import { useOnScreen } from 'core/hooks'

const HealthBar = ({ to = 0, direction = 'ltr' }) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  const [progress, setProgress] = useState(100)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (isVisible) {
      if (!animated) {
        setProgress(to)
        setAnimated(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])

  return (
    <Container ref={ref} direction={direction}>
      <BarContainer progress={progress} direction={direction} />
    </Container>
  )
}

export default HealthBar

const Container = styled.div`
  border: 2px solid grey;
  width: 100%;
  box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  direction: ${({ direction }) => {
    return direction
  }};
  position: relative;
`

const BarContainer = styled.div`
  --direction: ${({ direction }) =>
    direction === 'ltr' ? 'to right' : 'to left'};

  width: ${({ progress }) => `${progress}%`};
  height: 24px;
  box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  transition: 120s ease-out;
  transition-delay: 0.3s;
  overflow: hidden;
  z-index: 10;

  -webkit-mask: linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0);

  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(var(--direction), red, yellow, green);
  }
`
