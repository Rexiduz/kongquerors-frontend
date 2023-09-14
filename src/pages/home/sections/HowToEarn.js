import { useRef, useMemo } from 'react'
import { useHomePageScroll } from '../Home'

import styled, { css } from 'styled-components'
import BgImg from 'assets/images/desert.svg'
import { BoardContainer as StyledBoard } from './Roadmap/Roadmap.styled'
import Title1 from 'assets/images/howtoearn_1.svg'
import Title2 from 'assets/images/howtoearn_2.svg'
import Player1 from 'assets/images/player1.png'
import Player2 from 'assets/images/player2.png'
import { layout } from 'styled-system'
import { HealthBar, Box, Text } from 'components'
import { shuffle } from 'lodash'

import BloodP1_1 from 'assets/images/blood-phase-1-1.png'
import BloodP1_2 from 'assets/images/blood-phase-1-2.png'
import BloodP1_3 from 'assets/images/blood-phase-1-3.png'

import BloodP2_1 from 'assets/images/blood-phase-2-1.png'
import BloodP2_2 from 'assets/images/blood-phase-2-2.png'
import BloodP2_3 from 'assets/images/blood-phase-2-3.png'

import BloodP3_1 from 'assets/images/blood-phase-3-1.png'
import BloodP3_2 from 'assets/images/blood-phase-3-2.png'
import BloodP3_3 from 'assets/images/blood-phase-3-3.png'

import BloodP4_1 from 'assets/images/blood-phase-4-1.png'
import BloodP4_2 from 'assets/images/blood-phase-4-2.png'
import BloodP4_3 from 'assets/images/blood-phase-4-3.png'

import BloodP5_1 from 'assets/images/blood-phase-5-1.png'
import BloodP5_2 from 'assets/images/blood-phase-5-2.png'
import BloodP5_4 from 'assets/images/blood-phase-5-4.png'

import CounterBG from 'assets/images/bg-counter.png'

import { mediaQueryWidth } from 'core/styles/helpers'

const txt = {
  p1: {
    text: 'Mint 5 $KONGQ tokens per day until the game launch',
    bloods: [
      {
        img: BloodP1_1,
        style: {
          top: 0,
          right: 0,
          transform: 'translateY(-8px)',
          width: 150
        }
      },
      {
        img: BloodP1_2,
        style: {
          left: 0,
          bottom: 0,
          transform: 'translate(-3px, 41px)'
        }
      },
      {
        img: BloodP1_3,
        style: {
          right: 0,
          bottom: 0,
          transform: 'translate(4px, 28px)'
        }
      }
    ]
  },
  p2: {
    text: 'Verified holders get access to exclusive discord channel with NFT alpha from WHALES!',
    bloods: [
      {
        img: BloodP2_1,
        style: {
          top: 0,
          left: 0,
          transform: 'translateY(-6px)',
          width: 110
        }
      },
      {
        img: BloodP2_2,
        style: {
          right: 0,
          top: 0,
          transform: 'translate(3px, -5px)',
          width: 100
        }
      },
      {
        img: BloodP2_3,
        style: {
          right: 0,
          bottom: 0,
          transform: 'translate(5px, 14px)'
        }
      }
    ]
  },
  p3: {
    text: 'Exclusive whitelist access for other NFT projects',
    bloods: [
      {
        img: BloodP3_1,
        style: {
          top: 0,
          left: 25,
          transform: 'translate(0, -4px)'
        }
      },
      {
        img: BloodP3_2,
        style: {
          top: 0,
          right: 0,
          transform: 'translate(4px, -4px)'
        }
      },
      {
        img: BloodP3_3,
        style: {
          bottom: 0,
          transform: 'translate(0px, 40px)'
        }
      }
    ]
  },
  p4: {
    text: 'Breeding Baby Kongquerors and selling them on the marketplace',
    bloods: [
      {
        img: BloodP4_1,
        style: {
          top: 0,
          transform: 'translate(0px, -3px)'
        }
      },
      {
        img: BloodP4_2,
        style: {
          top: 0,
          right: 0,
          transform: 'translate(3px, -3px)'
        }
      },
      {
        img: BloodP4_3,
        style: {
          left: 0,
          bottom: 0,
          transform: 'translate(0px, 16px)'
        }
      }
    ]
  },
  p5: {
    text: 'Earning $KONGQ tokens by playing the game which can be traded on exchanges',
    bloods: [
      {
        img: BloodP5_1,
        style: {
          top: 0,
          left: 0,
          transform: 'translate(0px, -9px)'
        }
      },
      {
        img: BloodP5_2,
        style: {
          right: 0,
          top: 0,
          transform: 'translate(3px, -3px)'
        }
      },
      {
        img: BloodP5_4,
        style: {
          bottom: 0,
          transform: 'translate(0px, 6px)'
        }
      }
    ]
  }
}

const HowToEarn = () => {
  const containerRef = useRef()

  const health = useMemo(() => {
    return [20, 30, 40, 50, 60, 70, 80]
  }, [])

  return (
    <Container ref={containerRef}>
      <FightBar>
        <Img src={Player1} size={130} />
        <PowerBarContainer>
          <PlayerHealthContainer ml={20}>
            <Text mb='4px'>PLAYER 1</Text>
            <HealthBar to={shuffle(health)[0]} />
          </PlayerHealthContainer>
          <Counter>{85}</Counter>
          <PlayerHealthContainer mr={20} textAlign='right'>
            <Text mb='4px'>PLAYER 2</Text>
            <HealthBar direction='rtl' to={shuffle(health)[0]} />
          </PlayerHealthContainer>
        </PowerBarContainer>
        <Img src={Player2} size={130} />
      </FightBar>
      <Content>
        <Img src={Title1} />
        <Img src={Title2} />
        <BoardContainer>
          <Board>
            <div>{txt.p1.text}</div>
            {txt.p1.bloods.map((blood) => {
              return (
                <Box style={{ ...blood.style, position: 'absolute' }}>
                  <img src={blood.img} alt='blood' width={blood.style.width} />
                </Box>
              )
            })}
          </Board>
          <Board>
            <div>
              {txt.p2.text}
              {txt.p2.bloods.map((blood) => {
                return (
                  <Box style={{ ...blood.style, position: 'absolute' }}>
                    <img
                      src={blood.img}
                      alt='blood'
                      width={blood.style.width}
                    />
                  </Box>
                )
              })}
            </div>
          </Board>
          <Board>
            <div>
              {txt.p3.text}
              {txt.p3.bloods.map((blood) => {
                return (
                  <Box style={{ ...blood.style, position: 'absolute' }}>
                    <img
                      src={blood.img}
                      alt='blood'
                      width={blood.style.width}
                    />
                  </Box>
                )
              })}
            </div>
          </Board>
          <Board>
            <div>
              {txt.p4.text}
              {txt.p4.bloods.map((blood) => {
                return (
                  <Box style={{ ...blood.style, position: 'absolute' }}>
                    <img
                      src={blood.img}
                      alt='blood'
                      width={blood.style.width}
                    />
                  </Box>
                )
              })}
            </div>
          </Board>
          <Board>
            <div>
              {txt.p5.text}
              {txt.p5.bloods.map((blood) => {
                return (
                  <Box style={{ ...blood.style, position: 'absolute' }}>
                    <img
                      src={blood.img}
                      alt='blood'
                      width={blood.style.width}
                    />
                  </Box>
                )
              })}
            </div>
          </Board>
        </BoardContainer>
      </Content>
    </Container>
  )
}

export default HowToEarn

const abs_center = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  width: 100vw;
  min-height: 1027px;
  background: black;
  position: relative;
  z-index: 1;
  padding-top: 100px;

  ${mediaQueryWidth('md')} {
    display: none;
  }

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 110%;
    height: 100%;
    z-index: -1;
    box-shadow: inset -8px 20px 70px 30px #000000;

    background-image: url(${BgImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

const Board = styled(StyledBoard)`
  min-height: 300px;
  text-align: center;
  display: flex;
  align-items: center;
  background: black;
  width: 250px;
  margin: 10px;
  font-weight: 600;
`

const BoardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`

const Img = styled.img`
  ${layout}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > *:nth-child(2) {
    margin-top: 24px;
  }

  > *:nth-child(3) {
    margin-top: 30px;
  }

  ${Img} {
    max-width: 90%;
  }
`

const Counter = styled.div`
  background-image: url(${CounterBG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  width: 334px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(10px);
  color: #fff000;
  font-weight: 600;
  font-size: 60px;
`

const PowerPoint = styled.div`
  --border-w-y: 4px;
  --border-w-x: 8px;

  ${abs_center};
  color: #fff000;
  font-weight: 600;
  font-size: 40px;
  width: 100px;
  padding: 2px 10px;
  background: black;

  border: var(--border-w-y) solid #b2aca9;
  border-left-width: var(--border-w-x);
  border-right-width: var(--border-w-x);

  display: flex;
  justify-content: center;
  margin-top: 8px;

  /* font-size: 18px; */
  /* margin-top: 2px; */
  /* @media (min-width: 900px) {
    font-size: 24px;
  }

  @media (min-width: 1200px) {
    margin-top: 5px;
    font-size: 40px;
  } */
`

const PowerBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 130px * 2);
  height: 130px;

  ${Img} {
    width: 100%;
    object-fit: contain;
  }

  @media (min-width: 1260px) {
    ${Img} {
      object-fit: cover;
    }
  }
`

const PlayerHealthContainer = styled(Box)`
  width: 100%;
  color: #ebdf00;
  font-weight: 700;
`

const FightBar = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 100px;
  padding: 0 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
