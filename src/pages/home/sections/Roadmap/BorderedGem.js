import { forwardRef } from 'react'
import { GemContainer, Gem } from './Roadmap.styled'
import styled from 'styled-components'
import { clsx } from 'core/utils'

const BorderedGem = forwardRef(
  (
    {
      width = 12,
      height = 36,
      borderWidth = 6,
      borderColor = 'red',
      filledColor = 'black',
      className
    },
    ref
  ) => {
    return (
      <GemContainer
        ref={ref}
        className={clsx(className, 'bordered-gem')}
        borderWidth={borderWidth}
        filledColor={filledColor}
      >
        <div className='border-gem'>
          <Gem
            width={width + borderWidth / 2}
            height={height + borderWidth}
            color={borderColor}
          />
        </div>
        <div className={clsx('inner-gem', filledColor !== 'black' && 'filled')}>
          <Gem width={width} height={height} color={filledColor} />
        </div>
      </GemContainer>
    )
  }
)

export default styled(BorderedGem)``
