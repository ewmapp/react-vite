import { Link } from 'react-router-dom'
import { Box, Container, Heading, Section, Text } from '../../src/components'
import {
  Main,
  Content,
  ItemContent,
  MenuContent,
  Button
} from '../templates/styles'
import { Header } from '../templates/header'
import { Footer } from '../templates/footer'

import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

type lngsProps = {
  [key: string]: any
}

const lngs: lngsProps = {
  en: { nativeName: 'English' },
  pt: { nativeName: 'Portuguese' }
}

export function Home() {
  const { t, i18n } = useTranslation()
  return (
    <Box>
      <Helmet>
        <title>Credenciamento</title>
        <meta name="description" content="Sistema de credenciamento" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Main>
        <Content>
          <ItemContent>
            <Header />
          </ItemContent>
          <ItemContent>
            <Container>
              <Text css={{ textAlign: 'center' }}>
                {t('language.choose', { ns: 'common' })}
              </Text>
              <MenuContent>
                {Object.keys(lngs).map(lng => (
                  <Button
                    className="custom-class"
                    key={lng}
                    style={{
                      fontWeight:
                        i18n.resolvedLanguage === lng ? 'bold' : 'normal'
                    }}
                    type="submit"
                    onClick={() => i18n.changeLanguage(lng)}
                  >
                    {lngs[lng].nativeName}
                  </Button>
                ))}
              </MenuContent>
            </Container>
            <Section css={{ backgroundColor: '#DBDBDB', width: '100vw' }}>
              <Container size="3">
                <Heading variant="black">OBJETIVO</Heading>
                <Text variant="black">
                  Discutir abordagens e experiências em inquéritos de saúde,
                  para contribuir com a construção de inquéritos nacionais de
                  interesse, no contexto do HIV/aids, das hepatites virais,
                  outras IST, e da tuberculose e da hanseníase, no País.
                </Text>
              </Container>
            </Section>
            <Container>
              <MenuContent>
                <Link to="/live">
                  <Button className="custom-class">
                    {t('language.access', { ns: 'common' })}
                  </Button>
                </Link>
              </MenuContent>
            </Container>
          </ItemContent>
          <ItemContent>
            <Footer />
          </ItemContent>
        </Content>
      </Main>
    </Box>
  )
}
