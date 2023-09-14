import { ReactComponent as LogoKong } from 'assets/icons/logo-kong.svg'
import { ReactComponent as LogoBlood } from 'assets/icons/logo-backforblood.svg'
import { ReactComponent as Discord } from 'assets/icons/discord.svg'
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg'
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg'
import { ReactComponent as Roadmap } from 'assets/icons/roadmap.svg'
import { ReactComponent as PolygonOn } from 'assets/icons/polygon-active.svg'
import { ReactComponent as PolygonOff } from 'assets/icons/polygon-inactive.svg'
import { ReactComponent as MeetTheTeam } from 'assets/icons/meet-the-team.svg'
import { ReactComponent as ExpandArrow } from 'assets/icons/expand-arrow.svg'
import { ReactComponent as FAQ } from 'assets/icons/faq.svg'
import { ReactComponent as Hamburger } from 'assets/icons/hamburger.svg'
import { ReactComponent as Polygon } from 'assets/icons/polygon-normal.svg'
import { ReactComponent as Close } from 'assets/icons/close.svg'

const assets = () => {
  return {
    Icons: {
      logoKong: LogoKong,
      logoBlood: LogoBlood,
      discord: Discord,
      twitter: Twitter,
      instagram: Instagram,
      roadmap: Roadmap,
      polygonOn: PolygonOn,
      polygonOff: PolygonOff,
      meetTheTeam: MeetTheTeam,
      expandArrow: ExpandArrow,
      faq: FAQ,
      hamburger: Hamburger,
      polygon: Polygon,
      close: Close
    }
  }
}

export default assets()
