import styled from 'styled-components'
import BgImg from 'assets/images/bg_sec3.svg'
import BorderedGem from './BorderedGem'
import { mediaQueryWidth } from 'core/styles/helpers'
import { layout, position } from 'styled-system'

const FloatImg = styled.img`
  position: absolute;
  object-fit: contain;
  object-position: bottom;
  z-index: 20;

  transform: ${({ transform }) => transform};
  user-select: none;
  pointer-events: none;

  ${layout}
  ${position}
`

const Text = styled.div`
  font-weight: 600;
`

const Title = styled(Text)`
  color: #fe0000;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 12px;
`

const Description = styled(Text)`
  font-size: 14px;
  line-height: 18px;
`

const HeadImg = styled.img`
  width: 448px;
  height: 39px;

  max-width: 80%;
  object-fit: contain;
`

const Card = styled.div`
  --pad_top: 124px;
  --pad_y: calc(var(--pad_top) * 2);
  --board_height: 150px;
  --line_root_height: 1550px;
  --content_start_point: calc(var(--pad_top) + var(--board_height));

  width: 930px;
  height: 2200px;
  background: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  padding: var(--pad_top) 0;
  z-index: 10;
  position: relative;
`

const HeadBoard = styled.div`
  width: 605px;
  height: 150px;
  background: #000;
  border: 3px solid #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const LineRoot = styled.div`
  background: #fe0000;
  width: 2px;
  height: var(--line_root_height);
  position: absolute;
  top: var(--content_start_point);
`

const BoardContainer = styled.div`
  border: 2px solid #fff500;
  color: white;
  padding: 20px 18px 20px 24px;
  width: 50%;
  position: relative;
`

const Gem = styled.div`
  --bg: ${({ color = 'red' }) => color};
  --height: ${({ height = 120 }) => `${height}px`};
  --width: ${({ width = 40 }) => `${width}px`};
  --computed_height: calc(var(--height) / 2);
  --time: 0.7s;

  width: 0;
  height: 0;
  border: var(--width) solid transparent;
  border-bottom: var(--computed_height) solid transparent;
  border-bottom-color: var(--bg);
  position: relative;
  top: calc(-1 * var(--width));
  transition: border-bottom-color var(--time);

  :after {
    content: '';
    position: absolute;
    left: calc(-1 * var(--width));
    top: var(--computed_height);
    width: 0;
    height: 0;
    border: var(--width) solid transparent;
    border-top: var(--computed_height) solid transparent;
    border-top-color: var(--bg);
    transition: border-top-color var(--time);
  }
`

const GemContainer = styled.div`
  --border_width: ${({ borderWidth = 5 }) => `${borderWidth}px`};

  > div {
    position: absolute;
  }

  .inner-gem {
    margin-left: calc(var(--border_width) / 2);
    margin-top: calc(var(--border_width) / 2);
  }

  .inner-gem::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 70%;
    height: 70%;
    margin-top: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: box-shadow 0.8s;
  }

  .inner-gem.filled::after {
    box-shadow: 0px 0px 30px 4px ${({ filledColor }) => filledColor};
  }
`

const BoardLeftContainer = styled.div`
  --width: 60%;
  --margin_x: 15%;

  --limb_length: 37%;
  --limb_length_negative: calc(var(--limb_length) * -1);
  --limb_position_top: 30%;

  --gem_width: 10px;
  --gem_height: 36px;
  --gem_border_width: 2px;

  --gem_position_x_offset: calc(var(--gem_width) + 1px);

  --gem_position_x: calc(
    var(--limb_length_negative) + var(--gem_position_x_offset)
  );

  --gem_position_top_offset: calc(
    var(--gem_height) / 2 + var(--gem_border_width)
  );
  --gem_position_top: calc(
    var(--limb_position_top) - var(--gem_position_top_offset)
  );

  width: var(--width);
  top: var(--content_start_point);
  left: 0;
  position: absolute;

  display: flex;
  flex-direction: column;

  ${BoardContainer} {
    margin-left: var(--margin_x);
    margin-bottom: 60px;
    position: relative;
  }

  ${BoardContainer}:first-child {
    margin-top: 10%;
  }

  ${BoardContainer}:last-child {
    margin-top: 13%;
  }

  ${BoardContainer}::before {
    content: '';
    display: block;
    position: absolute;
  }

  ${BoardContainer}::before {
    top: var(--limb_position_top);
    width: var(--limb_length);
    left: 100%;
    height: 2px;
    background: #fff500;
  }

  ${BorderedGem} {
    position: absolute;
    top: var(--gem_position_top);
    right: var(--gem_position_x);
  }
`

const BoardRightContainer = styled(BoardLeftContainer)`
  --gem_position_x_offset: calc(
    var(--gem_height) / 2 - var(--gem_border_width)
  );
  --gem_position_x: calc(
    var(--limb_length_negative) - var(--gem_position_x_offset)
  );

  left: unset;
  right: 0;
  top: calc(var(--content_start_point) + 10%);
  align-items: flex-end;

  ${BoardContainer} {
    margin-left: unset;
    margin-right: var(--margin_x);
  }

  ${BoardContainer}::before {
    left: unset;
    right: 100%;
  }

  ${BorderedGem} {
    right: unset;
    left: var(--gem_position_x);
  }
`

const Container = styled.div`
  --container_height: 3424px;

  width: 100vw;
  height: var(--container_height);
  ${'' /* min-width: 1200px; */}
  ${'' /* max-width: 1440px; */}
  position: relative;
  background: black;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  ::before {
    content: '';
    display: block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${BgImg});

    width: inherit;
    min-width: inherit;
    max-width: inherit;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const BoardMobileContainer = styled.div`
  --gutter: 62px;
  --pad-y: calc(var(--gutter) * 2);
  --margin-x: 32px;
  --element-width: calc(100% - var(--margin-x) * 2);
  --element-width: 80%;
  /* 36px is height of gem, 2px is border gem width */
  --gem-position: calc(var(--gutter) * -1 - calc(36px / 2 + 2px));

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > * {
    margin: var(--gutter) 0;
  }

  ${BoardContainer} {
    background: black;
    text-align: center;
  }

  ${BoardContainer} ${Title} {
    max-width: 65%;
    margin: auto;
    margin-bottom: 16px;
  }

  ${HeadBoard},
  ${BoardContainer} {
    width: var(--element-width);
    max-width: var(--element-width);
  }

  ${BoardContainer} ${BorderedGem} {
    position: absolute;
    top: 0;
    left: 50%;
    /* 13px is half width of gem + border gem width */
    transform: translateX(calc(-50% - 13px));
    margin-top: var(--gem-position);
  }

  ${BoardContainer}::before {
    content: '';
    display: block;
    width: 2px;
    height: var(--pad-y);
    background: red;

    position: absolute;
    /* 2px is border of board-container */
    top: calc(var(--pad-y) * -1 - 2px);
    left: 50%;
    transform: translateX(-50%);
  }

  ${mediaQueryWidth('sm')} {
    --element-width: calc(100% - var(--margin-x) * 2);
  }
`

const ContainerMobile = styled.div`
  --pad-y: 125px;

  position: relative;
  padding: var(--pad-y) 0 calc(3 * var(--pad-y)) 0;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #be0000 0%,
    rgba(255, 0, 0, 0) 100%
  );
`

export {
  Container,
  ContainerMobile,
  BoardContainer,
  GemContainer,
  BoardLeftContainer,
  BoardRightContainer,
  BoardMobileContainer,
  Gem,
  Card,
  LineRoot,
  HeadBoard,
  FloatImg,
  Title,
  Description,
  HeadImg
}
