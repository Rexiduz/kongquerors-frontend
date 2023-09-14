import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import Hexagon from 'components/Hexagon'
import { Container } from 'components/styled'
import styled from 'styled-components'
import { color } from 'styled-system'

import CityFrame from 'assets/images/city_frame.svg'
import DivisionTitle from 'assets/images/division_text.svg'
import ImgTopLeft from 'assets/images/division_topleft.png'
import ImgTopRight from 'assets/images/division_topright.png'
import ImgMidLeft from 'assets/images/division_middleleft.png'
import ImgMidRight from 'assets/images/division_middleright.png'
import ImgBottomRight from 'assets/images/division_bottomright.png'
import ImgBottomLeft from 'assets/images/division_bottomleft.png'
import { clsx } from 'core/utils'
import { getBreakPoints, mediaQueryWidth } from 'core/styles/helpers'

const configs = {
  tl: {
    color: '#3FB3E3',
    title: 'General Kongquerors',
    description:
      'holds a mighty weapon as well as a shield - giving them the advantage to protect themselves from their enemies.',
    avatar: require('assets/images/divisions/kong-general.gif')
  },
  tr: {
    color: '#FDD615',
    title: 'Legendary Kongquerors',
    description:
      'are the Kongquerors with unique individual abilities. With only 10 Legendary Kongquerors, they are the rarest, giving them powerful advantages that makes them ruthless in battle.',
    avatar: require('assets/images/divisions/kong-legendary.gif')
  },
  ml: {
    color: '#40D462',
    title: 'Major Kongquerors',
    description:
      'are all about attacking their enemies every chance they get. These Kongquerors hold a weapon and are fearless of death.',
    avatar: require('assets/images/divisions/kong-major.gif')
  },
  mr: {
    color: '#9E60F7',
    title: 'Captain Kongquerors',
    description:
      'hold only a shield and has an important role as the defenders of the Kongquerors. Despite having no weapon, they fight effectively with their tactics.',
    avatar: require('assets/images/divisions/kong-captain.gif')
  },
  br: {
    color: '#ffffff',
    title: 'Casual Kongquerors',
    description:
      'are the chiller lot. However, don’t underestimate the power of their strike in battle and their intellect.',
    avatar: require('assets/images/divisions/kong-casual.gif')
  },
  bl: {
    color: '#FF3F6B',
    title: 'Gangster Kongquerors',
    description:
      'are the reckless rebels. They always look for trouble and they will show no sympathy in battle. You will notice their tattoos, which divides them into gangs.',
    avatar: require('assets/images/divisions/kong-gangster.gif')
  }
}

const getConfigs = (pos) => {
  return {
    color: '#FDD615',
    title: 'Legendary Kongquerors',
    description:
      'are the Kongquerors with unique individual abilities. With only 10 Legendary Kongquerors, they are the rarest, giving them powerful advantages that makes them ruthless in battle.',
    ...configs[pos]
  }
}

const Divisions = () => {
  const [config, setConfig] = useState(getConfigs())
  const [selectedCorner, setSelectedCorner] = useState()
  const [focusedCorner, setFocusedCorner] = useState()

  const isLowerXsScreen = useMediaQuery({
    query: `(max-width: ${getBreakPoints('xs') + 'px'})`
  })

  const isLowerSmScreen = useMediaQuery({
    query: `(max-width: ${getBreakPoints('sm') + 'px'})`
  })
  const isLowerLgScreen = useMediaQuery({
    query: `(max-width: ${getBreakPoints('lg') + 'px'})`
  })

  const handleClick = (pos) => () => {
    setFocusedCorner(pos)
    setConfig(getConfigs(pos))
    setSelectedCorner(pos)
  }

  const isSelected = (pos) =>
    selectedCorner === pos && focusedCorner ? pos : undefined

  const handleLeave = () => {
    setConfig(getConfigs())
    setFocusedCorner()
  }

  const { title, description, color } = config
  const { avatar = configs['tl'].avatar } = getConfigs(selectedCorner)

  const hexSize = isLowerXsScreen
    ? 200
    : isLowerSmScreen
    ? 250
    : isLowerLgScreen
    ? 300
    : 350
  const circleSize = isLowerXsScreen ? 80 : isLowerSmScreen ? 90 : 118
  const avatarSize = isLowerLgScreen ? `${hexSize - 40}px` : '30vw'

  const getCornerProps = (pos) => {
    return {
      size: circleSize,
      selected: isSelected(pos),
      onMouseOver: handleClick(pos),
      onMouseLeave: handleLeave
    }
  }

  return (
    <Wrapper>
      <UnderlineImg src={DivisionTitle} />
      <Caption>
        <SubTitle color={color}>{title}</SubTitle>
        <Description>{description}</Description>
      </Caption>
      <Avatar
        src={avatar}
        className={clsx(focusedCorner && 'focused')}
        size={avatarSize}
      />
      <HexagonContainer>
        <Hexagon size={hexSize} />
        <TopLeftCorner src={ImgTopLeft} {...getCornerProps('tl')} />
        <TopRightCorner src={ImgTopRight} {...getCornerProps('tr')} />
        <BottomLeftCorner src={ImgBottomLeft} {...getCornerProps('bl')} />
        <BottomRightCorner src={ImgBottomRight} {...getCornerProps('br')} />
        <CenterLeftCorner src={ImgMidLeft} {...getCornerProps('ml')} />
        <CenterRightCorner src={ImgMidRight} {...getCornerProps('mr')} />
      </HexagonContainer>
    </Wrapper>
  )
}

export default Divisions

const BREAKPOINT_SIZE = 'md'

const Avatar = styled.div`
  --size: ${({ size }) => size};
  --pad_right: calc(var(--pad) / 2);
  --atime: 0.1s;
  --atime_delay: 0.3s;

  width: var(--size);
  height: var(--size);

  background-image: ${({ src }) => `url(${src})`};
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  position: absolute;
  top: calc(60% + 40px);
  right: calc(var(--size) * -1 - var(--pad_right));
  margin-right: var(--pad_right);
  transform: translateY(-50%);
  z-index: 1;

  opacity: 0;
  transition: all var(--atime) ease-in-out var(--atime_delay);

  &.focused {
    right: 0;
    opacity: 1;
  }

  ${mediaQueryWidth(BREAKPOINT_SIZE)} {
    margin-right: unset;
    right: unset;

    top: var(--hex-top);
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const UnderlineImg = styled.div`
  margin-left: var(--pad);

  height: 47px;
  width: 744px;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  position: relative;

  :after {
    content: '';
    display: block;
    position: absolute;
    width: 45%;
    height: 7px;
    background: red;
    bottom: -21px;
    left: 0;
  }

  ${mediaQueryWidth(BREAKPOINT_SIZE)} {
    width: 80%;
    background-position: center;
    margin-left: unset;
    margin: 0 auto;

    :after {
      display: none;
    }
  }

  ${mediaQueryWidth('md')} {
    width: 95%;
  }

  ${mediaQueryWidth('xs')} {
    width: 90%;
  }
`

const Text = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
`

const SubTitle = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  margin: calc(25px + 21px + 7px) 0 19px 0;

  ${color}
`

const Description = styled(Text)`
  color: #fff;
  font-weight: 700;
  max-width: 377px;

  line-height: 25px;
`

const HexagonContainer = styled.div`
  --size: ${({ size }) => `${size}px`};
  position: absolute;
  top: var(--hex-top);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`

const Circle = styled.div`
  --size: ${({ size }) => `${size}px`};
  --final-size: var(--size);

  width: var(--final-size);
  height: var(--final-size);
  border-radius: 50%;
  border: 2px solid ${({ selected }) => getConfigs(selected).color};
  position: absolute;
  cursor: pointer;

  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 48%;
  background-color: black;

  &:hover {
    box-shadow: 0px 0px 16px ${({ selected }) => getConfigs(selected).color};
    --final-size: calc(var(--size) * 1.5);
  }

  ${mediaQueryWidth('xl')} {
    &:hover {
      --final-size: calc(var(--size) * 1.3);
    }
  }
`

const TopLeftCorner = styled(Circle)`
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
`

const TopRightCorner = styled(Circle)`
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`

const BottomLeftCorner = styled(Circle)`
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
`

const BottomRightCorner = styled(Circle)`
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
`

const CenterLeftCorner = styled(Circle)`
  top: 50%;
  left: -50%;
  transform: translate(-50%, -50%);
`

const CenterRightCorner = styled(Circle)`
  top: 50%;
  right: -50%;
  transform: translate(50%, -50%);
`

const Caption = styled.div`
  margin-left: var(--pad);

  ${mediaQueryWidth(BREAKPOINT_SIZE)} {
    ${SubTitle} {
      margin: unset;
    }

    ${Description} {
      max-width: unset;
    }

    border: 2px solid var(--border-color);
    border-left: unset;
    border-right: unset;
    margin: unset;
    margin-top: 40px;
    padding: 27px 0;
    background: black;
    text-align: center;

    ${SubTitle}, ${Description} {
      max-width: 70%;
      margin: 0 auto;
    }

    ${SubTitle} {
      margin-bottom: 12px;
    }
  }
`

const Wrapper = styled(Container)`
  --pad: 90px;
  --border-color: #fff500;
  --hex-top: 60%;

  background-image: url(${CityFrame});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 950px;
  box-shadow: inset 0px -30px 40px 2px rgba(0, 0, 0, 1);
  padding-top: 160px;

  ::before {
    content: '';
    display: block;
    width: inherit;
    height: 40%;
    position: absolute;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 10%,
      rgba(126, 126, 126, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    pointer-events: none;
  }

  ${mediaQueryWidth(BREAKPOINT_SIZE)} {
    --hex-top: 70%;

    padding-top: 50px;
  }

  ${mediaQueryWidth('sm')} {
    --hex-top: 60%;
  }

  ${mediaQueryWidth('xs')} {
    --hex-top: 70%;
  }
`
