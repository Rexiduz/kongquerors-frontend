import React, { useMemo } from 'react'

import assets from 'assets'
import styled, { css } from 'styled-components'
import { space, layout, position } from 'styled-system'

import { useScreen } from 'core/providers/ScreenContext'

const icons = assets.Icons

const IconComponent = ({ name, ...props }) => {
  const Icon = icons[name]
  return <Icon {...props} />
}

const EnchantedIcon = styled(IconComponent)`
  ${space};
  ${layout};
  ${position};

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}

  ${({ color }) =>
    color &&
    css`
      path {
        fill: ${color};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      path {
        fill: #a4b8c8;
      }
      cursor: not-allowed;
    `}
`

const Icon = ({
  size,
  xsSize,
  smSize,
  mdSize,
  lgSize,
  xlSize,
  xl2Size,
  xl3Size,
  ...props
}) => {
  const { xl3, xl2, xl, lg, md, sm, xs } = useScreen() || {}

  const iconSize = useMemo(() => {
    if (xs) {
      return (
        xsSize ??
        smSize ??
        mdSize ??
        lgSize ??
        xlSize ??
        xl2Size ??
        xl3Size ??
        size
      )
    }

    if (sm) {
      return smSize ?? mdSize ?? lgSize ?? xlSize ?? xl2Size ?? xl3Size ?? size
    }

    if (md) {
      return mdSize ?? lgSize ?? xlSize ?? xl2Size ?? xl3Size ?? size
    }

    if (lg) {
      return lgSize ?? xlSize ?? xl2Size ?? xl3Size ?? size
    }

    if (xl) {
      return xlSize ?? xl2Size ?? xl3Size ?? size
    }

    if (xl2) {
      return xl2Size ?? xl3Size ?? size
    }

    if (xl3) {
      return xl3Size ?? size
    }

    return size
  }, [
    lg,
    lgSize,
    md,
    mdSize,
    size,
    sm,
    smSize,
    xl,
    xl2,
    xl2Size,
    xl3,
    xl3Size,
    xlSize,
    xs,
    xsSize
  ])

  return <EnchantedIcon {...props} size={iconSize} />
}

export default React.memo(Icon)
