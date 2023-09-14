import styled from 'styled-components'

import Title1 from 'assets/images/howtoearn_1.svg'
import Title2 from 'assets/images/howtoearn_2.svg'

import { Icon, Text } from 'components'

import { mediaQueryWidth } from 'core/styles/helpers'

const HowToEarnMobile = () => {
  return (
    <Container>
      <img src={Title1} alt='How To Earn' width='70%' />
      <img src={Title2} alt='From Kongquerors' width='90%' />
      <Content>
        <StyledText mt='0px'>
          Mint 5 $KONGQ tokens per day until the game launch
        </StyledText>
        <Icon name='polygon' />
        <StyledText>
          Verified holders get access to exclusive discord channel with NFT
          alpha from WHALES!
        </StyledText>
        <Icon name='polygon' />
        <StyledText>
          Exclusive whitelist access for other NFT projects
        </StyledText>
        <Icon name='polygon' />
        <StyledText>
          Breeding Baby Kongquerors and selling them on the marketplace
        </StyledText>
        <Icon name='polygon' />
        <StyledText>
          Earning $KONGQ tokens by playing the game which can be traded on
          exchanges
        </StyledText>
        <Icon name='polygon' />
      </Content>
    </Container>
  )
}

export default HowToEarnMobile

const Container = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;

  ${mediaQueryWidth('md')} {
    display: flex;
  }
`

const Content = styled(Container)`
  background: #000000;
  border-top: 2px solid #fff500;
  border-bottom: 2px solid #fff500;
  width: 100%;
  padding: 36px 80px;
  margin-top: 34px;
`

const StyledText = styled(Text)`
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  margin-bottom: 12px;
  margin-top: 12px;
`
