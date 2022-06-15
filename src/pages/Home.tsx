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

export function Home() {
  const { t } = useTranslation()
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
              <MenuContent>
                <Link to="/live">
                  <Button className="custom-class">
                    {t('buttons.access', { ns: 'common' })}
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
