import { Container, ImageBox } from '../../src/components'
import Logo from '../startbsb.svg'

import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t, i18n } = useTranslation()
  return (
    <Container
      size="5"
      css={{
        width: '100vw',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '0',

        '@bp3': {
          marginBottom: '35px'
        }
      }}
    >
      <ImageBox src="assets/img/footer.png" alt="Assinatura" />
    </Container>
  )
}
