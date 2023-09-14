import styled from 'styled-components'
import { space } from 'styled-system'
import { Icon } from 'components'

import { mediaQueryWidth } from 'core/styles/helpers'

const Collapse = ({ title, description, expanded, ...props }) => {
  return (
    <Container {...props}>
      <TitleRow>
        <Title>{title}</Title>
        <IconContainer open={expanded}>
          <Icon name='expandArrow' />
        </IconContainer>
      </TitleRow>
      {expanded && <Description>{description}</Description>}
    </Container>
  )
}

export default Collapse

const Container = styled.div`
  background: #000000;
  border: 2px solid #fff500;
  width: 100%;
  padding: 22px;
  cursor: pointer;

  ${space}
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const IconContainer = styled.div`
  transform: ${({ open }) => {
    return open ? 'rotate(180deg)' : 'rotate(0deg)'
  }};
`

const Title = styled.div`
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;

  ${mediaQueryWidth('sm')} {
    font-size: 16px;
  }
`

const Description = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #c4c4c4;
  margin-top: 15px;
  white-space: pre-line;

  ${mediaQueryWidth('sm')} {
    font-size: 16px;
  }
`
