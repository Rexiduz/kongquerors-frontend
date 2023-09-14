import styled from 'styled-components'

const Hexagon = styled.div`
  --border-width: 2px;
  --border-color: #fff500;
  --hex-size: ${({ size = 300 }) => `${size}px`};
  --filled-color: transparent;

  position: relative;
  margin: 0 auto;
  background: var(--filled-color);
  border-radius: 10px;
  height: var(--hex-size);
  width: calc(var(--hex-size) * 3 / 5);
  box-sizing: border-box;
  transition: all 1s;
  border: var(--border-width) solid transparent;
  border-top-color: var(--border-color);
  border-bottom-color: var(--border-color);

  :before,
  :after {
    content: '';
    border: inherit;
    position: absolute;
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    background: inherit;
    border-radius: inherit;
    height: 100%;
    width: 100%;
  }

  :before {
    transform: rotate(60deg);
  }

  :after {
    transform: rotate(-60deg);
  }
`

export default Hexagon
