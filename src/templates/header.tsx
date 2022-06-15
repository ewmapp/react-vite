import { Container, Dropdown, Text } from '../../src/components'
import Logo from '../startbsb.svg'

import { useTranslation } from 'react-i18next'

export function Header() {
  const { t } = useTranslation()
  return (
    <Container
      size="7"
      css={{
        width: '100vw',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5px'
      }}
    >
      <img src={Logo} alt="React Logo" width="150px" />
      <Text>{t('home.slogan', { ns: 'home' })}</Text>
      <Dropdown />
    </Container>
  )
}
