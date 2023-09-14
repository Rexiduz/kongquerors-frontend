import { Box } from 'components'
import { Container } from 'components/styled'

import { range } from 'lodash'
import { useRef } from 'react'
import styled from 'styled-components'
import { useHomePageScroll } from '../Home'

import { mediaQueryWidth } from 'core/styles/helpers'

let apes1 = range(1, 10).map((i) => require(`assets/images/ape1_${i}.png`))
let apes2 = range(1, 10).map((i) => require(`assets/images/ape2_${i}.png`))

const Img = styled.img`
  width: var(--img_width);
  height: var(--img_height);
`

const Wrapper = styled(Container)`
  --img_width: 226px;
  --img_height: 227px;

  ${mediaQueryWidth('sm')} {
    --img_width: 130px;
    --img_height: 130px;
  }

  width: calc(100vw + calc(var(--img_width) / 2));
  height: calc(100vh + 100px);
  min-height: calc(var(--img_height) * 3);

  ${mediaQueryWidth('md')} {
    height: calc(10vh + 100px);
  }

  padding: 20px 0 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${Box} {
    width: 100%;
    max-width: 2000px;
    display: flex;
    justify-content: center;
  }

  ${Box}:last-child {
    margin-right: calc(var(--img_width) / 2);
  }

  ${Img} {
    margin: 5px;
  }

  :after {
    content: '';
    display: block;
    height: 50%;
    width: inherit;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.4) 20%,
      rgba(126, 126, 126, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    pointer-events: none;
  }
`

const Apes = () => {
  const containerRef = useRef()
  const { realPercent } = useHomePageScroll(containerRef)

  const render = (list) => list.map((path) => <Img key={path} src={path} />)

  const gutter = `calc(${100 - realPercent}px)`

  return (
    <Wrapper ref={containerRef}>
      <Box style={{ marginRight: gutter }}>{render(apes1)}</Box>
      <Box style={{ marginLeft: gutter }}>{render(apes2)}</Box>
    </Wrapper>
  )
}

export default Apes
