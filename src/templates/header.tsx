import { Container, Text } from '../../src/components'
import Logo from '../startbsb.svg'

import { useTranslation } from 'react-i18next'

export function Header() {
  const { t, i18n } = useTranslation()
  return (
    <Container
      size="6"
      css={{
        width: '100vw',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <img src={Logo} alt="React Logo" width="150px" />
      <Text>{t('home.slogan', { ns: 'home' })}</Text>
    </Container>
  )
}
