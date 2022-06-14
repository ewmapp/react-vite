import { Box as BoxCSS } from './style'
import { styled, CSS } from '../../../stitches.config'
import React, { forwardRef } from 'react'

const StyleBox = styled('div', BoxCSS)

export type BoxProps = React.ComponentProps<typeof StyleBox> &
  React.HTMLAttributes<typeof StyleBox> & { css?: CSS; as?: any }

export const Box = forwardRef<React.ElementRef<typeof StyleBox>, BoxProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleBox ref={forwardRef} {...props}>
        {children}
      </StyleBox>
    )
  }
)

Box.displayName = 'Box'
