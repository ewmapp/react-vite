import i18next, { i18n as i18nInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { namespaces } from './i18n.constants'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

let i18nOptions = {
  //lng: 'pt',
  supportedLngs: ['pt', 'en'],
  fallbackLng: 'pt',
  detection: {
    order: [
      'navigator',
      'localStorage',
      'cookie',
      'htmlTag',
      'path',
      'subdomain'
    ],
    caches: ['localStorage', 'cookie']
  },
  //preload: ['pt'],
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  },
  ns: namespaces.pages.home
  /* react: { useSuspense: false, } */
}

const createI18n = (): i18nInstance => {
  const i18n = i18next.createInstance().use(initReactI18next)

  i18n.use(LanguageDetector).use(HttpApi).init(i18nOptions)

  return i18n
}

export const i18n = createI18n()
