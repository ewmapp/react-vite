import { Box } from '../../src/components'
import {
  Main,
  Content,
  ItemContent,
  playerReact,
  PlayerContent,
  PlayWrapper,
  ChatWrapper
} from '../templates/styles'
import { Header } from '../templates/header'
import { Footer } from '../templates/footer'

import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import ReactPlayer from 'react-player'

const ChatID = (chatid: never) => {
  return `https://vimeo.com/live-chat/${chatid}/`
}

export function Live() {
  const { t, i18n } = useTranslation()
  return (
    <Box>
      <Helmet>
        <title>Live</title>
        <meta name="description" content="Sistema de credenciamento" />
        <link rel="canonical" href="/live" />
      </Helmet>
      <Main>
        <Content>
          <ItemContent>
            <Header />
          </ItemContent>
          <ItemContent>
            <PlayerContent>
              <PlayWrapper>
                <ReactPlayer
                  className={playerReact()}
                  url="https://player.vimeo.com/video/"
                  width="100%"
                  height="100%"
                  config={{
                    vimeo: {
                      playerOptions: {
                        id: t('vimeo.playerID', { ns: 'live' }),
                        controls: true,
                        autoplay: true,
                        dnt: true,
                        title: true,
                        transparent: false
                      }
                    }
                  }}
                />
              </PlayWrapper>
              <ChatWrapper>
                <iframe
                  src={ChatID(t('vimeo.chatID', { ns: 'live' }))}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </ChatWrapper>
            </PlayerContent>
          </ItemContent>
          <ItemContent>
            <Footer />
          </ItemContent>
        </Content>
      </Main>
    </Box>
  )
}
