import styled from 'styled-components'
import { Container } from 'components/styled'

// import BgVideo from 'assets/videos/bg.mp4'
import { mediaQueryWidth } from 'core/styles/helpers'
import ReactPlayer from 'react-player'

const videoSrc = 'https://www.youtube.com/watch?v=RsqjKCaDZWg'

const Hero = () => {
  return (
    <Container>
      <ReactPlayer
        url={videoSrc}
        muted
        loop
        playing
        width={'100%'}
        height={'100%'}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <Shadow />
      <LeftBordered />
      <RightBordered />
      <BottomShadow />
    </Container>
  )
}

export default Hero

const Shadow = styled.div`
  width: 110vw;
  height: 100vh;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: inset 0px -30px 100px 50px rgba(0, 0, 0, 0.46);
`

const LeftBordered = styled.div`
  --height: 147px;
  --width: 50vw;
  --color: #f10800;

  ${mediaQueryWidth('md')} {
    --height: 70px;
    --color: #e70f00;
  }

  ${mediaQueryWidth('xs')} {
    --height: 28px;
    --color: #f90300;
  }

  width: 0;
  height: 0;
  border-style: solid;
  border-width: var(--height) 0 0 var(--width);
  border-color: transparent transparent transparent var(--color);
  z-index: 1;

  position: absolute;
  bottom: 0;
  left: 0;
  right: unset;
`

const RightBordered = styled(LeftBordered)`
  border-width: 0 0 var(--height) var(--width);
  border-color: transparent transparent var(--color) transparent;
  right: 0;
  left: unset;
`

const BottomShadow = styled.div`
  --height: 147px;

  ${mediaQueryWidth('md')} {
    --height: 70px;
  }

  ${mediaQueryWidth('xs')} {
    --height: 28px;
  }

  width: 100%;
  height: var(--height);
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.63) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transform: rotate(-180deg);
  bottom: 0;
`

// const Video = styled.video`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   position: absolute;
//   z-index: 0;
// `
