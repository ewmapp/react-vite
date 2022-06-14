import { css } from '../../../stitches.config'

export const Container = css('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',
  py: '$5',

  variants: {
    size: {
      1: {
        maxWidth: '576px'
      },
      2: {
        maxWidth: '768px'
      },
      3: {
        maxWidth: '992px'
      },
      4: {
        maxWidth: '1200px'
      },
      5: {
        maxWidth: '1400px'
      },
      6: {
        maxWidth: '1840px'
      },
      7: {
        maxWidth: 'none'
      }
    }
  },
  defaultVariants: {
    size: '5'
  }
})
