import { styled, css } from '../../stitches.config'

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  webkitBoxAlign: 'center',
  alignItems: 'center',

  backgroundImage: 'url("assets/img/background.jpg")',
  backgroundRrepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
})

export const Content = styled('div', {
  flex: '1 1 0%',
  display: 'flex',
  flexFlow: 'row wrap',
  alignContent: 'space-between',
  alignItems: 'center',
  width: '100vw',
  zIndex: '1'
})

export const ItemContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexFlow: 'row wrap',

  webkitBoxPack: 'center',
  justifyContent: 'center',
  webkitBoxAlign: 'center',
  width: '100vw'
})

export const MenuContent = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  width: '100%',
  margin: '1rem 0 1rem',

  webkitBoxPack: 'center',
  justifyContent: 'center',
  webkitBoxAlign: 'center',

  gap: '10px',
  rowGap: '10px',
  columnGap: '20px'
})

export const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  border: '0',
  padding: '10px',
  minWidth: '120px',

  '&.custom-class': {
    boxShadow: '0 0 0 3px blueviolet'
  }
})

/* Start Player CSS _________________________________________________________*/
export const PlayerContent = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  webkitBoxShadow: '1px 1px 20px 10px rgba(0,0,0,0.20)',
  boxShadow: '1px 1px 20px 10px rgba(0,0,0,0.20)',

  '@bp3': {
    width: '95%'
  },
  '@bp2': {
    gridTemplateColumns: '70% auto'
  }
})

export const PlayWrapper = styled('div', {
  position: 'relative',
  paddingTop: '56.25%',

  gridColumn: 'span 2',
  gridRow: 'span 2',

  '@bp3': {
    gridColumn: 'span 1',
    gridRow: 'span 1'
  }
})

export const ChatWrapper = styled('div', {
  width: '100%',
  gridColumn: 'span 2',
  gridRow: 'span 2',
  height: '380px',

  '@bp3': {
    gridColumn: 'span 1',
    gridRow: 'span 1',
    height: 'auto'
  }
})

export const playerReact = css({
  position: 'absolute',
  top: 0,
  left: 0
})
/* End Player CSS _________________________________________________________*/
