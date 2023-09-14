import { useMemo } from 'react'
import styled from 'styled-components'
import { Box, Text, Icon } from 'components'

import { mediaQueryWidth } from 'core/styles/helpers'

import { DISCORD, TWITTER, INSTAGRAM } from 'constants/externalLink'

import Discord from 'assets/icons/discord.svg'
import Twitter from 'assets/icons/twitter.svg'
import Instagram from 'assets/icons/instagram.svg'

const Footer = () => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  return (
    <Container>
      <StyledText>{`KONGQUERORS ${currentYear}`}</StyledText>

      <Box mt={30}>
        <Img src={Discord} alt='Discord' onClick={() => window.open(DISCORD)} />
        <Img src={Twitter} alt='Twitter' onClick={() => window.open(TWITTER)} />
        <Img
          src={Instagram}
          alt='Instagram'
          onClick={() => window.open(INSTAGRAM)}
          style={{ marginRight: 0 }}
        />
      </Box>
    </Container>
  )
}

export default Footer

const Container = styled(Box)`
  background: black;
  color: white;
  padding: 53px 0;
  text-align: center;

  ${mediaQueryWidth('sm')} {
    padding: 30px;
  }
`

const StyledText = styled(Text)`
  color: white;
  font-weight: 700;
  text-transform: uppercase;
`

const Img = styled.img`
  cursor: pointer;
  margin-right: 30px;
`
