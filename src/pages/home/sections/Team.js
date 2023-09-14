import { useMemo } from 'react'
import styled from 'styled-components'
import { Box, Text } from 'components'

import MeetTheTeam from 'assets/images/meet-the-team.png'
import Meet from 'assets/images/meet.png'
import TheTeam from 'assets/images/the-team.png'
import OmegaKong from 'assets/images/kong-omega.png'
import KutieKong from 'assets/images/kong-kutie.png'
import ChefKong from 'assets/images/kong-chef.png'
import BladeKong from 'assets/images/kong-blade.png'
import AlphaKong from 'assets/images/kong-alpha.png'

import { mediaQueryWidth } from 'core/styles/helpers'

import { teamRef } from 'core/providers/helper'

const Team = () => {
  const teams = useMemo(() => {
    return [
      {
        display: OmegaKong,
        title: 'Omega Kongquerors',
        position: 'Team Lead & Blockchain Dev'
      },
      {
        display: KutieKong,
        title: 'Kutie Kongquerors',
        position: 'Designer'
      },
      {
        display: ChefKong,
        title: 'Chef Kongquerors',
        position: 'Designer'
      },
      {
        display: BladeKong,
        title: 'Blade Kongquerors',
        position: 'Community Manager'
      },
      {
        display: AlphaKong,
        title: 'Alpha Kongquerors',
        position: 'Community Manager'
      }
    ]
  }, [])

  const title = useMemo(() => {
    return (
      <>
        <DesktopTitle>
          <img src={MeetTheTeam} alt='Meet The Team' />
        </DesktopTitle>
        <MobileTitle>
          <img src={Meet} alt='Meet' />
          <img src={TheTeam} alt='The Team' />
        </MobileTitle>
      </>
    )
  }, [])

  return (
    <Container ref={teamRef}>
      {title}
      <ListContainer>
        {teams.map((team, index) => {
          return (
            <CardContainer key={index}>
              <Image src={team.display} />
              <Title>{team.title}</Title>
              <Position>{team.position}</Position>
            </CardContainer>
          )
        })}
      </ListContainer>
    </Container>
  )
}

export default Team

const Container = styled(Box)`
  width: 100%;
  margin-top: 156px;
`

const ListContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 52px;

  ${mediaQueryWidth('md')} {
    justify-content: center;
  }
`

const CardContainer = styled(Box)`
  color: white;
  width: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mediaQueryWidth('md')} {
    width: 30%;
    margin: 0 5px 20px;
  }

  ${mediaQueryWidth('sm')} {
    width: 45%;
  }
`

const Title = styled(Text)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 18.2px;

  ${mediaQueryWidth('sm')} {
    font-size: 12px;
  }
`

const Position = styled(Text)`
  font-weight: 600;
  font-size: 12px;
  line-height: 15.6px;

  ${mediaQueryWidth('sm')} {
    font-size: 10px;
  }
`

const Image = styled.img`
  width: 100%;
`

const DesktopTitle = styled.div`
  ${mediaQueryWidth('md')} {
    text-align: center;
    display: none;
  }

  img {
    width: 600px;

    ${mediaQueryWidth('sm')} {
      width: 400px;
    }
  }
`

const MobileTitle = styled.div`
  display: none;
  text-align: center;

  ${mediaQueryWidth('md')} {
    display: block;
  }
`
