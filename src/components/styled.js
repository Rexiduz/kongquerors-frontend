import styled from 'styled-components'
import Box from './Box'

import { mediaQueryWidth } from 'core/styles/helpers'

export const Container = styled(Box)`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;

  ${mediaQueryWidth('md')} {
    height: 70vh;
  }

  ${mediaQueryWidth('xs')} {
    height: 196px;
  }
`
