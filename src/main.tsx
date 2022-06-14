import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'
import { globalCss } from '../stitches.config'
import '../src/utils/i18n/i18n'

const globalStyles = globalCss({
  html: {
    overflowX: 'hidden'
  },

  body: {
    margin: 0,
    backgroundColor: '$bgColor'
  },

  'body, button': {
    fontFamily: '$default'
  }
})

globalStyles()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)
