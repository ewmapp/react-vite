import { Container as ContainerCSS } from './style'
import { styled, CSS } from '../../../stitches.config'
import React, { forwardRef } from 'react'

const StyleContainer = styled('div', ContainerCSS)

export type ContainerProps = React.ComponentProps<typeof StyleContainer> &
  React.HTMLAttributes<typeof StyleContainer> & { css?: CSS; as?: never }

export const Container = forwardRef<
  React.ElementRef<typeof StyleContainer>,
  ContainerProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyleContainer ref={forwardRef} {...props}>
      {children}
    </StyleContainer>
  )
})

Container.displayName = 'Container'
