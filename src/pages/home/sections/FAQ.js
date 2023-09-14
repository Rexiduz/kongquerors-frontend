import { useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { Icon, Collapse } from 'components'

import { mediaQueryWidth } from 'core/styles/helpers'

import { faqRef } from 'core/providers/helper'

const FAQ = () => {
  const defaultExpands = useMemo(() => {
    return {
      how_to_mint: false,
      price: false,
      drop: false,
      total_supply: false,
      rarity: false
    }
  }, [])

  const [expands, setExpands] = useState(defaultExpands)

  const updateExpands = useCallback(
    (key) => {
      const expanded = expands[key]
      setExpands({ ...defaultExpands, [key]: !expanded })
    },
    [defaultExpands, expands]
  )

  return (
    <div ref={faqRef}>
      <TitleContainer>
        <Icon name='faq' />
      </TitleContainer>
      <Collapse
        title='How do I mint?'
        description='You will need a Solana wallet (We recommend using Phantom) and deposit SOL into it.'
        mt={56}
        expanded={expands['how_to_mint']}
        onClick={() => updateExpands('how_to_mint')}
      />
      <Collapse
        title='What is the price?'
        description={'Presale 0.5 SOL\nPublic 0.6 SOL'}
        mt={18}
        expanded={expands['price']}
        onClick={() => updateExpands('price')}
      />
      <Collapse
        title='When is the drop?'
        description='Sometime in January!'
        mt={18}
        expanded={expands['drop']}
        onClick={() => updateExpands('drop')}
      />
      <Collapse
        title='What’s the total supply?'
        description='We will generate 5,000, of which 10 would be 1 of 1 Legendary Kongquerors.'
        mt={18}
        expanded={expands['total_supply']}
        onClick={() => updateExpands('total_supply')}
      />
      <Collapse
        title='Where can I check rarity?'
        description='Rarity will be available post mint on howrare.is and more!'
        mt={18}
        expanded={expands['rarity']}
        onClick={() => updateExpands('rarity')}
      />
    </div>
  )
}

export default FAQ

const TitleContainer = styled.div`
  ${mediaQueryWidth('sm')} {
    text-align: center;
  }
`
