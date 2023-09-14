import {
  HeadBoard,
  BoardMobileContainer,
  ContainerMobile,
  FloatImg,
  HeadImg,
  Title,
  Description
} from './Roadmap.styled'
import Board from './Board'
import ImgHeadBoard from 'assets/images/roadmap-text.png'

import { BOARD, getFloatImgProps, getImgSize, getPosition } from './helper'

import { roadmapRef } from 'core/providers/helper'

const getImgProps = (name) => {
  const zIndex = {
    bat: 10,
    katana: 22
  }[name]

  const layoutArgs = getImgSize(name, 'xs')
  const positionArgs = getPosition(name, 50)

  return getFloatImgProps(name, zIndex)(...layoutArgs)(...positionArgs)
}

const RoadMap = () => {
  return (
    <ContainerMobile ref={roadmapRef}>
      <FloatImg {...getImgProps('axe')} />
      <FloatImg {...getImgProps('morningstar_flip')} />
      <FloatImg {...getImgProps('thoraxe_flip')} />
      <FloatImg {...getImgProps('bat')} />
      <FloatImg {...getImgProps('thorhammer')} />
      <FloatImg {...getImgProps('godofwar')} />
      <FloatImg {...getImgProps('staff')} />
      <FloatImg {...getImgProps('katana')} />
      <FloatImg {...getImgProps('kingsword')} />
      <BoardMobileContainer>
        <HeadBoard className='board-title'>
          <HeadImg src={ImgHeadBoard} alt='road map' />
        </HeadBoard>
        <Board bloods={BOARD.p11.bloods}>
          <Title>{BOARD.p11.title}</Title>
          <Description>{BOARD.p11.description}</Description>
        </Board>
        <Board bloods={BOARD.p21.bloods}>
          <Title>{BOARD.p21.title}</Title>
          <Description>{BOARD.p21.description}</Description>
        </Board>
        <Board bloods={BOARD.p12.bloods}>
          <Title>{BOARD.p12.title}</Title>
          <Description>{BOARD.p12.description}</Description>
        </Board>
        <Board bloods={BOARD.p22.bloods}>
          <Title>{BOARD.p22.title}</Title>
          <Description>{BOARD.p22.description}</Description>
        </Board>
        <Board bloods={BOARD.p13.bloods}>
          <Title>{BOARD.p13.title}</Title>
          <Description>{BOARD.p13.description}</Description>
        </Board>
        <Board bloods={BOARD.p23.bloods}>
          <Title>{BOARD.p23.title}</Title>
          <Description>{BOARD.p23.description}</Description>
        </Board>
        <Board bloods={BOARD.p14.bloods}>
          <Title>{BOARD.p14.title}</Title>
          <Description>{BOARD.p14.description}</Description>
        </Board>
      </BoardMobileContainer>
    </ContainerMobile>
  )
}

export default RoadMap
