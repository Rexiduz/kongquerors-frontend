import { useState, useEffect, useContext, useMemo } from 'react'

import { HomePageContext } from '../Home'
import BackForBlood from 'assets/images/backforblood.png'
import KongLogo from 'assets/images/konglogo.png'

import styled from 'styled-components'
import { space, layout } from 'styled-system'

import { getBreakPoints, mediaQueryWidth } from 'core/styles/helpers'
import { useMediaQuery } from 'react-responsive'

import { storyRef } from 'core/providers/helper'
import { clsx } from 'core/utils'

const items = [
  ...new Array(2).fill({
    color: 'red',
    desc: 'Due to intense rivalry in the metaverse, a spark has awakened an ancient species that is to be feared.',
    imgs: [
      require('assets/images/story-kong-left_1.png'),
      require('assets/images/story-kong-right_1.png')
    ],
    anime: {
      src: require('assets/images/story-effect-1.gif'),
      zIndex: 20
    }
  }),
  {
    color: 'green',
    desc: 'Due to intense rivalry in the metaverse, a spark has awakened an ancient species that is to be feared.\n\nFeared for their mastery and might... Feared for their wisdom. They are the ones above all - the first species to ever exist. The last, they will be. ',
    imgs: [
      require('assets/images/story-kong-left_2.png'),
      require('assets/images/story-kong-right_2.png')
    ],
    anime: {
      src: require('assets/images/story-effect-2.gif'),
      zIndex: 1
    }
  },
  {
    color: 'blue',
    desc: 'Due to intense rivalry in the metaverse, a spark has awakened an ancient species that is to be feared. \n\nFeared for their mastery and might... Feared for their wisdom. They are the ones above all - the first species to ever exist. The last, they will be. \n\nBehold: The Kongquerors.  They are back and hungry for their birthright: To Rule the Metaverse.  They know no sympathies, and will obliterate anyone in their way; All we can do is advise you to not to mess with the Kongquerors. But instead, to join them ⚔️',
    imgs: [
      require('assets/images/story-kong-left_3.png'),
      require('assets/images/story-kong-right_3.png')
    ],
    anime: {
      src: require('assets/images/story-effect-3.gif'),
      zIndex: 20
    }
  }
]

const lastIndex = items.length - 1
const addStyles = (style, getStyles) => ({
  style: { ...style, ...getStyles(style) }
})

const Carousel = () => {
  const [{ scroll }] = useContext(HomePageContext)
  const [screenHeight, setScreenHeight] = useState(
    window.innerHeight * items.length
  )
  const [index, setIndex] = useState(0)
  const [boundary, setBoundary] = useState({ active: false, direction: null })
  const [finalIndex, setFinalIndex] = useState(0)

  const isLowerLgScreen = useMediaQuery({
    query: `(max-width: ${getBreakPoints('lg')}px)`
  })

  useEffect(() => {
    const listener = () => {
      setScreenHeight(window.innerHeight * items.length)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  useEffect(() => {
    const target = storyRef.current || document.body
    const position = target.getBoundingClientRect()

    const pos = position.bottom / window.innerHeight

    const rounded = Math.trunc(pos)

    setBoundary(() => {
      const active = [0, items.length].includes(rounded)

      return {
        active,
        direction: active ? (rounded < 1 ? 'down' : 'up') : null
      }
    })
    setIndex(() => {
      const _index = items.length - rounded

      setFinalIndex(_index)
      return _index < 0 ? 0 : _index > lastIndex ? lastIndex : _index
    })
  }, [scroll])

  const isDisplayed = useMemo(() => {
    return finalIndex >= 0 && finalIndex <= lastIndex
  }, [finalIndex])

  const styles = useMemo(
    () =>
      boundary.active
        ? {
            position: 'absolute',
            ...(boundary.direction === 'up' && {
              top: '50vh',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }),
            ...(boundary.direction === 'down' && {
              bottom: '50vh',
              left: '50%',
              transform: 'translate(-50%, 50%)'
            })
          }
        : {
            position: isDisplayed ? 'fixed' : 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          },
    [boundary.active, boundary.direction, isDisplayed]
  )

  const sideImgStyles = useMemo(
    () => ({
      position: styles.position,
      ...(styles.top && { top: styles.top, transform: 'translateY(-50%)' }),
      ...(styles.bottom && {
        bottom: styles.bottom,
        transform: 'translateY(50%)'
      })
    }),
    [styles.bottom, styles.position, styles.top]
  )

  const isTargetIndicator = (idx) => {
    const _idx = idx + 1
    return !idx ? index <= 1 : index === _idx
  }

  const getSideImgProps = (side, contentIndex) => {
    const src = items[contentIndex]?.imgs?.[Number(side === 'right')]
    return {
      src,
      style: {
        ...sideImgStyles,
        ...(side === 'left' && { left: 0 }),
        ...(side === 'right' && { right: 0 })
      },
      className: clsx(`slice-index-${contentIndex}`)
    }
  }

  const leftImgProps = getSideImgProps('left', index)
  const rightImgProps = getSideImgProps('right', index)

  const { zIndex: animIndex, src: animSrc } = items[index]?.anime
  const imgOffset = isLowerLgScreen ? 120 : 50

  return (
    <Wrapper ref={storyRef} height={screenHeight}>
      <SideImg {...leftImgProps} />
      <SideImg {...rightImgProps} />
      <AnimImg
        {...{
          src: animSrc,
          ...addStyles(leftImgProps.style, ({ left }) => {
            const stringLeft = typeof left === 'number' ? `${left}px` : left
            const customLeft = `calc(${stringLeft} - ${imgOffset}px)`

            return {
              zIndex: animIndex,
              left,
              ...(index === 2 && {
                left: customLeft
              })
            }
          })
        }}
      />
      <AnimImg
        {...{
          src: animSrc,
          ...addStyles(rightImgProps.style, ({ transform, right }) => {
            const customTransform = transform
              ? transform + ' scaleX(-1)'
              : transform
            const stringRight = typeof right === 'number' ? `${right}px` : right
            const customRight = `calc(${stringRight} - ${imgOffset}px)`

            return {
              transform: customTransform,
              zIndex: animIndex,
              right,
              ...(index === 2 && { right: customRight })
            }
          })
        }}
      />
      <Container style={styles}>
        <Section>
          <Img src={KongLogo} />
          <Img src={BackForBlood} />
          <Desc>{items[index].desc}</Desc>
        </Section>
        <Indicator>
          {[...new Array(items.length - 1)].map((_, idx) => {
            return <Dot key={idx} filled={isTargetIndicator(idx)} />
          })}
        </Indicator>
      </Container>
    </Wrapper>
  )
}

export default Carousel

const Wrapper = styled.div`
  position: relative;
  ${space}
  ${layout}

  ${mediaQueryWidth('md')} {
    display: none;
  }
`

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  pointer-events: none;
  z-index: 10;
`

const Section = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 25vh;
`

const Img = styled.img`
  ${layout}
  object-fit: contain;
  width: 665px;

  ${mediaQueryWidth('lg')} {
    width: 565px;
  }
`

const SideImg = styled.img`
  user-select: none;
  pointer-events: none;
  height: 80vh;
  z-index: 5;

  &.slice-index-3 {
    height: 85vh;
  }

  ${mediaQueryWidth('lg')} {
    width: 250px;
    height: unset;

    &.slice-index-3 {
      width: 300px;
      height: unset;
    }
  }
`

const AnimImg = styled(SideImg)`
  width: unset;
`

const Desc = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  white-space: pre-line;
  max-width: 552px;
  margin-top: 80px;
  ${space}
`

const Dot = styled.div`
  --size: 15px;
  width: var(--size);
  height: var(--size);
  background-color: ${({ filled }) => (filled ? '#FFF500' : '#000')};
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
`

const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`
