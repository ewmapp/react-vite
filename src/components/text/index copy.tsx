import { Text as TextCSS } from './style'
import { styled, CSS } from '../../../stitches.config'
import React, { forwardRef } from 'react'

const StyleText = styled('span', TextCSS)

export type TextProps = React.ComponentProps<typeof StyleText> &
  React.HTMLAttributes<typeof StyleText> & { css?: CSS; as?: any }

export const Text = forwardRef<React.ElementRef<typeof StyleText>, TextProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleText ref={forwardRef} {...props}>
        {children}
      </StyleText>
    )
  }
)

Text.displayName = 'Text'
