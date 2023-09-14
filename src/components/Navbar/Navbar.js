import {
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
  useEffect
} from 'react'
import styled from 'styled-components'

import { Icon, Box } from 'components'
import BaseText from 'components/Text/Text'

import { truncateAddress, connectWallet, insertAddress } from 'core/utils'
import { useStore } from 'core/hooks'

import { mediaQueryWidth } from 'core/styles/helpers'

import { DISCORD, TWITTER, INSTAGRAM, WHITEPAPER } from 'constants/externalLink'

import { Drawer } from 'antd'

import { storyRef, roadmapRef, faqRef, teamRef } from 'core/providers/helper'

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [{ defaultAccount }, action] = useStore()
  const [drawerOpen, setDrawerOpen] = useState(false)

  useLayoutEffect(() => {
    const listener = (() => {
      let prevScrollTop = 0

      return (e) => {
        const scrollTop = e.target?.scrollTop
        const isScrollUp = scrollTop < prevScrollTop || prevScrollTop < 0

        setVisible(isScrollUp)
        prevScrollTop = scrollTop
      }
    })()

    window.addEventListener('scroll', listener, true)

    return () => {
      window.removeEventListener('scroll', listener, true)
    }
  }, [])

  const connect = useCallback((onlyIfTrusted) => {
    connectWallet(onlyIfTrusted).then((account) => {
      action.setDefaultAccount(account)
      insertAddress(account).catch(console.log)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleConnectButtonClick = useCallback(() => {
    connect()
  }, [connect])

  useEffect(() => {
    setTimeout(() => {
      connect(true)
    }, 1000)
  }, [connect])

  const buttonText = useMemo(() => {
    if (defaultAccount) {
      return truncateAddress(defaultAccount)
    }
    return 'CONNECT WALLET'
  }, [defaultAccount])

  const handleClick = useCallback((ref) => {
    ref.current.scrollIntoView()
  }, [])

  const menus = useMemo(() => {
    return (
      <>
        <Menu onClick={() => window.open(DISCORD)}>
          <Icon name='discord' />
        </Menu>
        <Menu onClick={() => window.open(TWITTER)}>
          <Icon name='twitter' />
        </Menu>
        <Menu onClick={() => window.open(INSTAGRAM)}>
          <Icon name='instagram' />
        </Menu>
        <Menu onClick={() => window.open(WHITEPAPER)}>
          <Text>Whitepaper</Text>
        </Menu>
        <Menu onClick={() => handleClick(storyRef)}>
          <Text>Story</Text>
        </Menu>
        <Menu onClick={() => handleClick(roadmapRef)}>
          <Text>Roadmap</Text>
        </Menu>
        <Menu onClick={() => handleClick(faqRef)}>
          <Text>FAQ</Text>
        </Menu>
        <Menu onClick={() => handleClick(teamRef)}>
          <Text>Team</Text>
        </Menu>
        <Menu>
          <ConnectWalletButton onClick={handleConnectButtonClick}>
            {buttonText}
          </ConnectWalletButton>
        </Menu>
      </>
    )
  }, [buttonText, handleClick, handleConnectButtonClick])

  return (
    <StyledNav visible={visible}>
      <LogoContainer>
        <Icon name='logoKong' />
        <Icon name='logoBlood' style={{ marginLeft: '-20px' }} />
      </LogoContainer>
      <MenuContainer>{menus}</MenuContainer>
      <HamburgerContainer>
        <Icon name='hamburger' onClick={() => setDrawerOpen(true)} />
      </HamburgerContainer>
      <StyledDrawer
        title={null}
        placement='top'
        visible={drawerOpen}
        height='100vh'
      >
        <Box width='100%' textAlign='right'>
          <Icon name='close' size={30} onClick={() => setDrawerOpen(false)} />
        </Box>
        <DrawerText
          onClick={() => {
            setDrawerOpen(false)
            window.open(WHITEPAPER)
          }}
        >
          Whitepaper
        </DrawerText>
        <DrawerText
          onClick={() => {
            setDrawerOpen(false)
            handleClick(roadmapRef)
          }}
        >
          Roadmap
        </DrawerText>
        <DrawerText
          onClick={() => {
            setDrawerOpen(false)
            handleClick(faqRef)
          }}
        >
          FAQ
        </DrawerText>
        <DrawerText
          onClick={() => {
            setDrawerOpen(false)
            handleClick(teamRef)
          }}
        >
          Team
        </DrawerText>
        <DrawerText
          onClick={() => {
            setDrawerOpen(false)
            window.open(DISCORD)
          }}
        >
          Discord
        </DrawerText>
        <DrawerText
          onClick={() => {
            setDrawerOpen(false)
            window.open(TWITTER)
          }}
        >
          Twitter
        </DrawerText>
        <DrawerText
          onClick={() => {
            setDrawerOpen(false)
            window.open(INSTAGRAM)
          }}
        >
          Instagram
        </DrawerText>
        <DrawerText
          mb={49}
          color='#FFF500 !important'
          onClick={() => {
            setDrawerOpen(false)
            handleConnectButtonClick()
          }}
        >
          {buttonText}
        </DrawerText>
      </StyledDrawer>
    </StyledNav>
  )
}

export default Navbar

const StyledNav = styled.nav`
  width: 100%;
  display: flex;

  position: fixed;
  transition: top 0.5s;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 999;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.63) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  top: ${({ visible }) => {
    return visible ? '0px' : '-147px'
  }};

  ${mediaQueryWidth('xs')} {
    justify-content: flex-end;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  ${mediaQueryWidth('xs')} {
    display: none;
  }
`

const MenuContainer = styled.div`
  display: flex;
  padding-top: 40px;
  align-items: center;

  ${mediaQueryWidth('lg')} {
    display: none;
  }
`

const HamburgerContainer = styled.div`
  --padding: 40px;

  display: none;
  padding: var(--padding);

  ${mediaQueryWidth('lg')} {
    display: flex;
  }

  ${mediaQueryWidth('xs')} {
    --padding: 20px;
  }
`

const Menu = styled.div`
  margin-right: 38px;
  height: fit-content;
  cursor: pointer;
`

const Text = styled.div`
  color: white;
  font-weight: 700;
  line-height: 18.2px;

  &:hover {
    color: #fff500;
  }
`

const ConnectWalletButton = styled.div`
  background: #000000;
  border: 2px solid #fff200;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #fff100;
  padding: 8px 12px;
  text-shadow: 1px 1px 0px #000000;

  &:hover {
    background: #ff0000;
  }
`

const StyledDrawer = styled(Drawer)`
  .ant-drawer-header {
    display: none;
  }

  .ant-drawer-body {
    background: red;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > * {
    cursor: pointer;
  }
`

const DrawerText = styled(BaseText)`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 49px;

  :hover {
    color: #fff200;
  }
`
