import { useCallback } from 'react'
import {
  Container,
  Card,
  BoardLeftContainer,
  BoardRightContainer,
  HeadBoard,
  LineRoot,
  FloatImg,
  HeadImg,
  Title,
  Description
} from './Roadmap.styled'
import Board from './Board'
import ImgHeadBoard from 'assets/images/roadmap-text.png'

import { BOARD, getFloatImgProps, getImgSize, getPosition } from './helper'
import { useScreen } from 'core/providers/ScreenContext'
import { useMediaQuery } from 'react-responsive'

import { roadmapRef } from 'core/providers/helper'

const RoadMap = () => {
  const { minimumScreen, xl, lg } = useScreen()

  const isDesktop = minimumScreen('md')
  const isXlDesktop = minimumScreen('xl')
  const isLargeDesktop = useMediaQuery({ minWidth: 2400 })

  const getResponsivePosition = (name) => {
    if (isLargeDesktop) return getPosition(name, 100)

    if (isXlDesktop) return getPosition(name, 95)

    if (isDesktop) return getPosition(name, 80)

    return getPosition(name, 100)
  }

  const getResponsiveSize = useCallback(
    (name) => {
      if (xl) return getImgSize(name, 'xl')

      if (lg) return getImgSize(name, 'lg')

      return getImgSize(name)
    },
    [lg, xl]
  )

  const getImgProps = (name) => {
    const zIndex = {
      bat: 10,
      katana: 22
    }[name]

    const layoutArgs = getResponsiveSize(name)
    const positionArgs = getResponsivePosition(name)

    return getFloatImgProps(name, zIndex)(...layoutArgs)(...positionArgs)
  }

  return (
    <Container>
      <FloatImg {...getImgProps('godofwar')} />
      <FloatImg {...getImgProps('axe')} />
      <FloatImg {...getImgProps('morningstar')} />
      <FloatImg {...getImgProps('thoraxe')} />
      <FloatImg {...getImgProps('thorhammer')} />
      <FloatImg {...getImgProps('bat')} />
      <FloatImg {...getImgProps('katana')} />
      <FloatImg {...getImgProps('kingsword')} />
      <Card ref={roadmapRef}>
        <HeadBoard className='board-title'>
          <HeadImg src={ImgHeadBoard} alt='road map' />
        </HeadBoard>
        <LineRoot className='line line-root' />
        <BoardLeftContainer className='sub-board board-left'>
          <Board bloods={BOARD.p11.bloods}>
            <Title>{BOARD.p11.title}</Title>
            <Description>{BOARD.p11.description}</Description>
          </Board>
          <Board bloods={BOARD.p12.bloods}>
            <Title>{BOARD.p12.title}</Title>
            <Description>{BOARD.p12.description}</Description>
          </Board>
          <Board bloods={BOARD.p13.bloods}>
            <Title>{BOARD.p13.title}</Title>
            <Description>{BOARD.p13.description}</Description>
          </Board>
          <Board bloods={BOARD.p14.bloods}>
            <Title>{BOARD.p14.title}</Title>
            <Description>{BOARD.p14.description}</Description>
          </Board>
        </BoardLeftContainer>
        <BoardRightContainer className='sub-board board-right'>
          <Board bloods={BOARD.p21.bloods}>
            <Title>{BOARD.p21.title}</Title>
            <Description>{BOARD.p21.description}</Description>
          </Board>
          <Board bloods={BOARD.p22.bloods}>
            <Title>{BOARD.p22.title}</Title>
            <Description>{BOARD.p22.description}</Description>
          </Board>
          <Board bloods={BOARD.p23.bloods}>
            <Title>{BOARD.p23.title}</Title>
            <Description>{BOARD.p23.description}</Description>
          </Board>
        </BoardRightContainer>
      </Card>
    </Container>
  )
}

export default RoadMap
