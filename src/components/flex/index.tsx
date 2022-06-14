import { Flex as FlexCSS } from './style'
import { styled, CSS } from '../../../stitches.config'
import React, { forwardRef } from 'react'

const StyleFlex = styled('div', FlexCSS)

export type FlexProps = React.ComponentProps<typeof StyleFlex> &
  React.HTMLAttributes<typeof StyleFlex> & { css?: CSS; as?: any }

export const Flex = forwardRef<React.ElementRef<typeof StyleFlex>, FlexProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleFlex ref={forwardRef} {...props}>
        {children}
      </StyleFlex>
    )
  }
)

Flex.displayName = 'Flex'
