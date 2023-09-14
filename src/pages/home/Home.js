import { useState, createContext, useRef, useContext, useEffect } from 'react'
import styled from 'styled-components'

import { Navbar, Box } from 'components'
import {
  Cover,
  Carousel,
  Apes,
  FAQ,
  Team,
  Footer,
  Divisions,
  RoadMap,
  HowToEarn,
  StoryMobile,
  HowToEarnMobile
} from './sections'

import Shadow from 'assets/images/rect-fade.svg'

import { mediaQueryWidth } from 'core/styles/helpers'

export const HomePageContext = createContext()

export const useHomePageScroll = (ref, options) => {
  const [{ scroll }] = useContext(HomePageContext)
  const [percent, setPercentage] = useState(0)

  useEffect(() => {
    const target = ref?.current || document.body
    const { useWindow = false, bouncing = false } = options || {}
    const position = target.getBoundingClientRect()
    const divider = useWindow ? window.innerHeight : position.height

    const percentage = bouncing
      ? (Math.abs(position.y) / divider) * 100
      : (position.y / divider) * 100

    setPercentage(percentage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, scroll, JSON.stringify(options)])

  const finalPercent = percent > 100 ? 100 : percent < 0 ? 0 : percent
  return {
    percent: finalPercent,
    realPercent: percent
  }
}

const Home = (props) => {
  const [scroll, setScroll] = useState(0)
  const [section, setSection] = useState(0)
  const [scrollable, setScrollable] = useState(true)
  const containerRef = useRef()

  return (
    <HomePageContext.Provider
      value={[
        { scroll, section, scrollable },
        {
          setSection,
          setScrollable: (bool) => {
            setScrollable(bool)
          }
        }
      ]}
    >
      <Container
        scrollable={scrollable}
        ref={containerRef}
        onScroll={setScroll}
        // showScrollbar
      >
        <Navbar />
        <GradientSection>
          <Cover />
          <StoryAndApesSection>
            <Carousel />
            <StoryMobile />
            <Apes />
          </StoryAndApesSection>
        </GradientSection>
        <Divisions />
        <HowToEarn />
        <HowToEarnMobile />
        <RoadMap />
        <FaqAndTeamSection>
          <FAQ />
          <Team />
        </FaqAndTeamSection>
        <Footer />
      </Container>
    </HomePageContext.Provider>
  )
}

export default Home

const GradientSection = styled.div`
  background: linear-gradient(
    180deg,
    #ff0000 -3.23%,
    #bf2e00 83.33%,
    rgba(54, 19, 11, 0.24) 98.39%
  );
  padding-bottom: 120px;
`

const Container = styled.div`
  width: 100vw;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: ${({ scrollable }) => (scrollable ? 'scroll' : 'hidden')};
  scroll-behavior: smooth;

  scroll-snap-type: y mandatory;
  scrollbar-width: none;

  background: black;
  > * {
    margin: auto;
  }

  ::-webkit-scrollbar {
    display: ${({ showScrollbar }) => (showScrollbar ? 'unset' : 'none')};
  }
`

const FaqAndTeamSection = styled(Box)`
  --padding-horizontal: 120px;

  background: linear-gradient(180deg, #000000 0%, #ff0000 100%);
  padding: 158px var(--padding-horizontal);

  ${mediaQueryWidth('lg')} {
    --padding-horizontal: 68px;
  }

  ${mediaQueryWidth('sm')} {
    --padding-horizontal: 30px;
  }
`

const StoryAndApesSection = styled(Box)`
  background-image: url(${Shadow});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
