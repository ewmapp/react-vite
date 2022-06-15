import { css, styled, keyframes } from '../../../stitches.config'
import { Text } from '../text'
import { lngs } from '../../utils/i18n/i18n.constants'
import { GlobeIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'

const fadeIn = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' }
})

const DDContent = styled('div', {
  display: 'none',
  position: 'absolute',
  backgroundColor: 'rgba(255, 255,255, 0.1)',
  borderRadius: '$md',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  webkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  minWidth: '160px',
  zIndex: '1',
  right: 0,
  marginTop: '$2'
})

const DDButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '$md',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(1px)',
  webkitBackdropFilter: 'blur(1px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',

  color: 'white',
  padding: '10px',
  fontSize: '16px',
  cursor: ' pointer',
  minWidth: '140px'
})

const DDAnchor = styled('a', {
  padding: '12px 16px',
  textDecoration: ' none',
  display: 'block',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'rgba(0, 162, 252, 0.2)'
  },
  '&:first-child': {
    borderTopLeftRadius: '$md',
    borderTopRightRadius: '$md'
  },
  '&:last-child': {
    borderBottomLeftRadius: '$md',
    borderBottomRightRadius: '$md'
  }
})

const DropDown = styled('div', {
  position: 'relative',
  display: 'inline-block',
  marginTop: '$2',
  paddingBottom: '$2',

  [`&:hover ${DDContent}`]: {
    display: 'block',
    animation: `${fadeIn} 200ms`
  },
  [`&:hover ${DDButton}`]: {
    backgroundColor: 'rgba(252, 0, 175, 0.2)'
  }
})

const classActive = css({
  fontWeight: 'bold',
  backgroundColor: 'rgba(0, 162, 252, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(0, 162, 252, 0.1)'
  },
  [`& ${Text}`]: {
    fontWeight: 'bold',
    color: 'gray',
    cursor: 'not-allowed'
  }
})

export function Dropdown() {
  const { t, i18n } = useTranslation()
  return (
    <DropDown>
      <DDButton>
        <GlobeIcon />
        <Text>{t('language.button', { ns: 'common' })}</Text>
      </DDButton>
      <DDContent>
        {Object.keys(lngs).map(lng => (
          <DDAnchor
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            className={i18n.resolvedLanguage === lng ? classActive() : ''}
          >
            <Text>{lngs[lng].nativeName}</Text>
          </DDAnchor>
        ))}
      </DDContent>
    </DropDown>
  )
}
