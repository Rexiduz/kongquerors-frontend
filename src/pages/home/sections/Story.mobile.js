import styled from 'styled-components'

import { Box } from 'components'

import KongLogo from 'assets/images/konglogo.png'
import BackForBlood from 'assets/images/backforblood.png'

import KongStory1 from 'assets/images/story-kong-right_1.png'
import KongStory2 from 'assets/images/story-kong-left_2.png'
import KongStory3 from 'assets/images/story-kong-right_3.png'

import { mediaQueryWidth } from 'core/styles/helpers'

const StoryMobile = () => {
  return (
    <Container>
      <TitleImage src={KongLogo} alt='Kong Logo' />
      <TitleImage src={BackForBlood} alt='Back For Blood Logo' />
      <Row mt={50}>
        <ContentContainer>
          <Content>
            Due to intense rivalry in the metaverse, a spark has awakened an
            ancient species that is to be feared.
          </Content>
        </ContentContainer>
        <KongContainerRight>
          <KongImage src={KongStory1} alt='Kong Story 1' />
        </KongContainerRight>
      </Row>
      <Row mt={50}>
        <ContentContainer justifyContent='flex-end'>
          <KongContainerLeft>
            <KongImage src={KongStory2} alt='Kong Story 1' />
          </KongContainerLeft>
          <Content textAlign='right'>
            Feared for their mastery and might... Feared for their wisdom. They
            are the ones above all - the first species to ever exist. The last,
            they will be.
          </Content>
        </ContentContainer>
      </Row>
      <Row mt={50}>
        <ContentContainer>
          <Content>
            <span>Behold: The Kongquerors</span>
            <br />
            They are back and hungry for their birthright: To Rule the
            Metaverse. They know no sympathies, and will obliterate anyone in
            their way; All we can do is advise you to not to mess with the
            Kongquerors. But instead, to <span>join them</span>
          </Content>
        </ContentContainer>
        <KongContainerRight
          style={{ transform: 'translateY(-15%)', width: '140px' }}
        >
          <KongImage src={KongStory3} alt='Kong Story 1' />
        </KongContainerRight>
      </Row>
    </Container>
  )
}

export default StoryMobile

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  display: none;

  ${mediaQueryWidth('md')} {
    display: flex;
  }
`

const TitleImage = styled.img`
  max-width: 70%;
`

const Row = styled(Box)`
  position: relative;
  width: 100%;
`

const ContentContainer = styled(Box)`
  background: #000000;
  border-top: 2px solid #fff000;
  border-bottom: 2px solid #fff000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px 20px;
  display: flex;
`

const Content = styled(Box)`
  color: #ffffff;
  font-size: 16px;
  line-height: 20.8px;
  width: calc(100% - 120px);
  white-space: pre-line;

  span {
    font-weight: 600;
    font-style: italic;
  }
`

const KongContainer = styled(Box)`
  position: absolute;
  top: 0;
  width: 120px;
  transform: translateY(-20%);
  z-index: 10;
`

const KongContainerLeft = styled(KongContainer)`
  left: 0;
`

const KongContainerRight = styled(KongContainer)`
  right: 0;
`

const KongImage = styled.img`
  width: 100%;
`
