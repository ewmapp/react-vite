import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import { namespaces } from './i18n.constants'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .use(HttpApi)
  .init({
    debug: true,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    ns: [
      namespaces.pages.home,
      namespaces.pages.live,
      namespaces.common.language
    ],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  })

export default i18n
