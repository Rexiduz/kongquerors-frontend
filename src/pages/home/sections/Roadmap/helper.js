import last from 'lodash/last'

import BloodP1_1 from 'assets/images/blood-phase-1-1.png'
import BloodP1_2 from 'assets/images/blood-phase-1-2.png'
import BloodP1_3 from 'assets/images/blood-phase-1-3.png'

import BloodP2_1 from 'assets/images/blood-phase-2-1.png'
import BloodP2_2 from 'assets/images/blood-phase-2-2.png'
import BloodP2_3 from 'assets/images/blood-phase-2-3.png'

import BloodP3_1 from 'assets/images/blood-phase-3-1.png'
import BloodP3_2 from 'assets/images/blood-phase-3-2.png'
import BloodP3_3 from 'assets/images/blood-phase-3-3.png'

import BloodP4_1 from 'assets/images/blood-phase-4-1.png'
import BloodP4_2 from 'assets/images/blood-phase-4-2.png'
import BloodP4_3 from 'assets/images/blood-phase-4-3.png'

import BloodP5_1 from 'assets/images/blood-phase-5-1.png'
import BloodP5_2 from 'assets/images/blood-phase-5-2.png'
import BloodP5_3 from 'assets/images/blood-phase-5-3.png'
import BloodP5_4 from 'assets/images/blood-phase-5-4.png'
import BloodP5_5 from 'assets/images/blood-phase-5-5.png'

import BloodP6_1 from 'assets/images/blood-phase-6-1.png'
import BloodP6_2 from 'assets/images/blood-phase-6-2.png'
import BloodP6_3 from 'assets/images/blood-phase-6-3.png'

import BloodP7_1 from 'assets/images/blood-phase-7-1.png'
import BloodP7_2 from 'assets/images/blood-phase-7-2.png'
import BloodP7_3 from 'assets/images/blood-phase-7-3.png'
import BloodP7_4 from 'assets/images/blood-phase-7-4.png'

export const BOARD = {
  p11: {
    title: 'PHASE 1 : NFT Launch',
    description:
      'The launch of 5,000 Kongquerors is imminent. Each of us are working 12-14 hours a day to launch this collection in January! We really want to spend the time to make sure each one of the 5,000 Kongqueror is amazing. Each Kongqueror will have gamified stats such as attack and defense based on their Fur, Weapon and Shield type which will be used in our upcoming Play To Earn Fighting Game. Each Kongqueror NFT will also be able to mint 5 $KONGQ tokens per day until the launch of the game. These tokens will have monetary value in the secondary market as they will be one of the currencies to be used in our Game and will play a role in breeding Mutant Kongquerors.',
    bloods: [
      {
        img: BloodP1_1,
        style: {
          top: 0,
          right: 0,
          transform: 'translateY(-8px)',
          width: 150
        }
      },
      {
        img: BloodP1_2,
        style: {
          left: 0,
          bottom: 0,
          transform: 'translate(-3px, 41px)'
        }
      },
      {
        img: BloodP1_3,
        style: {
          right: 0,
          bottom: 0,
          transform: 'translate(4px, 28px)'
        }
      }
    ]
  },
  p12: {
    title: 'PHASE 3 : Pixelated Kongqueror Airdrop for Whitelist',
    description:
      "Obviously people who get into our Whitelist get a chance to buy Kongquerors NFT at Presale, but it doesn't just end there. Many Whitelist Kongquerors will also get a pixelated Kongqueror NFT as an airdrop directly to their Solana wallet.",
    bloods: [
      {
        img: BloodP3_1,
        style: {
          top: 0,
          left: 25,
          transform: 'translate(0, -4px)'
        }
      },
      {
        img: BloodP3_2,
        style: {
          top: 0,
          right: 0,
          transform: 'translate(4px, -4px)'
        }
      },
      {
        img: BloodP3_3,
        style: {
          bottom: 0,
          transform: 'translate(0px, 40px)'
        }
      }
    ]
  },
  p13: {
    title: 'PHASE 5: Game Launch',
    description:
      "All Legendary Kongqueror holders will have access to the Beta before the public launch to experience the game before anyone else! This is where we are putting our hearts and soul, our devs and designers are working around the clock to make sure we have the art and the tokenomics locked down, which we will release to the public before our mint. This is what we'll leave you with for now, each one of the 5,000 NFTs will be a unique playable character in the game with their own strengths and weaknesses and that we really are focusing on making the game as FUN to play as possible, after all that is the main objective of a game.",
    bloods: [
      {
        img: BloodP5_1,
        style: {
          top: 0,
          left: 0,
          transform: 'translate(0px, -9px)'
        }
      },
      {
        img: BloodP5_2,
        style: {
          right: 0,
          top: 0,
          transform: 'translate(3px, -3px)'
        }
      },
      {
        img: BloodP5_4,
        style: {
          bottom: 0,
          transform: 'translate(0px, 6px)'
        }
      },
      {
        img: BloodP5_5,
        style: {
          right: 0,
          transform: 'translate(3px, -7px)'
        }
      }
    ]
  },
  p14: {
    title: 'PHASE 7: Breeding Baby Kongquerors',
    description:
      'After we launch our Mutants, we will begin releasing our Breeding system in game! If you have a Genesis Kongqueror and a Mutant Kongqueror you will be able to breed a Baby Kongqueror by just supplying $KONGQ tokens. These Baby Kongquerors could also be used as a character in game or be sold as an NFT in the marketplace.',
    bloods: [
      {
        img: BloodP7_1,
        style: {
          top: 0,
          left: 0,
          transform: 'translate(0px, -5px)',
          width: 130
        }
      },
      {
        img: BloodP7_2,
        style: {
          top: 0,
          right: 30,
          transform: 'translate(0px, -5px)'
        }
      },
      {
        img: BloodP7_3,
        style: {
          top: 0,
          right: 0,
          transform: 'translate(5px, -5px)'
        }
      },
      {
        img: BloodP7_4,
        style: {
          bottom: 0,
          right: 0,
          transform: 'translate(0px, 12px)'
        }
      }
    ]
  },
  p21: {
    title: 'PHASE 2 : Legendary Kongqueror Airdrop',
    description:
      'Out of the 5,000 unique Kongquerors, we will have 10 Legendary Kongquerors, you will be able to identify the Legendary ones just by taking a glance. These mystical Legendary Kongquerors are much more special than normal Kongquerors, they will receive an additional Kongqueror NFT in their wallet 14 days after launch! They will also be invited to our beta testing program before we launch the game to the public!',
    bloods: [
      {
        img: BloodP2_1,
        style: {
          top: 0,
          left: 0,
          transform: 'translateY(-8px)'
        }
      },
      {
        img: BloodP2_2,
        style: {
          right: 0,
          top: 0,
          transform: 'translate(3px, -5px)'
        }
      },
      {
        img: BloodP2_3,
        style: {
          right: 0,
          bottom: 0,
          transform: 'translate(5px, 14px)'
        }
      }
    ]
  },
  p22: {
    title: 'PHASE 4: FREE Whitelisting and Alpha',
    description:
      'Many Kongqueror NFT holders will also have exclusive access in getting Whitelisted across multiple different projects AND verified holders will also get exclusive access to a discord channel where we (and some whales) discuss flipping other NFTs for profit',
    bloods: [
      {
        img: BloodP4_1,
        style: {
          top: 0,
          transform: 'translate(0px, -3px)'
        }
      },
      {
        img: BloodP4_2,
        style: {
          top: 0,
          right: 0,
          transform: 'translate(3px, -3px)'
        }
      },
      {
        img: BloodP4_3,
        style: {
          left: 0,
          bottom: 0,
          transform: 'translate(0px, 16px)'
        }
      }
    ]
  },
  p23: {
    title: 'PHASE 6: Mutant Kongquerors',
    description:
      'The launch of our Genesis Kongquerors does not mark the end of our NFTs, after we launch the game with Genesis Kongquerors, we will give each holder the chance to breed a mutant in exchange for $KONGQ tokens! Mutants do not only act as another set of characters in the game but they also come with special abilities, such as to combine with a Genesis Kongqueror to breed a Baby Kongqueror!',
    bloods: [
      {
        img: BloodP6_1,
        style: {
          top: 0,
          left: 0,
          transform: 'translate(-3px, -4px)'
        }
      },
      {
        img: BloodP6_2,
        style: {
          top: 0,
          right: 0,
          transform: 'translate(4px, -7px)'
        }
      },
      {
        img: BloodP6_3,
        style: {
          bottom: 0,
          transform: 'translate(0px, 56px)'
        }
      }
    ]
  }
}

export const getFloatImgProps =
  (name, zIndex) => (w, h) => (t, r, b, l, scale, rotate) => {
    return {
      src: require(`assets/images/weapons/${name}.png`),
      width: w,
      height: h,
      top: t,
      left: l,
      right: r,
      bottom: b,
      zIndex,
      transform: rotate
        ? `scale(${scale}) rotate(${rotate})`
        : `scale(${scale})`
    }
  }

export const getPosition = (name, scalePercentage) => {
  const scale = scalePercentage / 100

  const positionArgs = {
    godofwar: {
      50: ['54%', null, null, '-335px', 0.33, '-25deg'],
      80: ['7%', null, null, '-140px'],
      95: ['6%', null, null, '-80px', 1],
      100: ['7%', null, null, '-4%']
    },
    axe: {
      50: ['0', '-260px', null, null, scale, '15deg'],
      80: ['8%', '-120px', null, null],
      95: ['7%', '-85px', null, null, scale],
      100: ['6%', '-3%', null, null]
    },
    morningstar: {
      80: ['26%', '-160px', null, null, 0.75],
      95: ['26%', '-100px', null, null, scale],
      100: ['25%', '-5%', null, null]
    },
    morningstar_flip: {
      50: ['17.6%', null, null, '-250px', scale, '-15deg']
    },
    thoraxe: {
      80: ['32.5%', null, null, '-120px'],
      95: ['33.5%', null, null, '-100px', scale],
      100: ['34%', null, null, '-6%']
    },
    thoraxe_flip: {
      50: ['26%', '-165px', null, null]
    },
    thorhammer: {
      50: ['46%', '-260px', null, null, 0.35],
      80: ['47%', '-155px', null, null, 0.7],
      95: ['46%', '-130px', null, null, 0.75],
      100: ['46%', '-5%', null, null]
    },
    bat: {
      50: ['35.4%', null, null, '-450px', 0.3, '-32deg'],
      80: [null, null, '32%', '-130px'],
      95: [null, null, '30%', '-60px'],
      100: [null, null, '30%', '-3.5%']
    },
    katana: {
      50: ['75%', null, null, '-360px', 0.4],
      80: [null, null, '0', '-200px', 0.78],
      95: [null, null, '-20px', '-100px'],
      100: [null, null, '0%', '-6%']
    },
    kingsword: {
      50: ['77.3%', '-270px', null, null, 0.45],
      80: [null, '-80px', '0%', null, 0.85, '-3deg'],
      95: [null, '-35px', '0px', null, 1],
      100: [null, '-35px', '0%', null, scale, '-10deg']
    },
    staff: {
      50: ['75.3%', 0, null, null, 1]
    }
  }

  const args =
    positionArgs[name]?.[scalePercentage] || positionArgs[name]?.[100]

  return [
    ...args.slice(0, 4),
    args.length > 4 ? args?.[4] : scale,
    args.length === 6 ? last(args) : null
  ]
}

export const getImgSize = (name, bp = 'default') => {
  // [width, height] please adding real resolution

  const imgSizes = {
    axe: {
      xl: [482, 764],
      lg: [482, 764],
      xs: [482, 764],
      default: [582, 764]
    },
    bat: {
      xl: [997, 793],
      lg: [997, 793],
      xs: [897, 993],
      default: [997, 793]
    },
    godofwar: {
      xl: [625, 899],
      lg: [600, 899],
      xs: [640, 1099],
      default: [725, 899]
    },
    katana: {
      xl: [941, 1091, 22],
      lg: [941, 1091, 22],
      xs: [941, 1291, 22],
      default: [941, 1091, 22]
    },
    kingsword: {
      xl: [820, 926, 20],
      lg: [820, 926, 20],
      xs: [820, 1126, 20],
      default: [820, 926, 20]
    },
    morningstar: {
      xl: [450, 585],
      lg: [450, 585],
      xs: [450, 585],
      default: [613, 585]
    },
    morningstar_flip: {
      xl: [613, 585],
      lg: [613, 585],
      xs: [482, 664],
      default: [613, 585]
    },
    thoraxe: {
      xl: [388, 558],
      lg: [350, 558],
      xs: [350, 558],
      default: [488, 558]
    },
    thoraxe_flip: {
      xl: [488, 558],
      lg: [488, 558],
      xs: [412, 634],
      default: [488, 558]
    },
    thorhammer: {
      xl: [709, 574],
      lg: [500, 574],
      xs: [550, 674],
      default: [709, 574]
    },
    staff: {
      xl: [100, 268],
      lg: [100, 268],
      xs: [100, 368],
      default: [100, 268]
    }
  }

  return imgSizes[name][bp]
}
