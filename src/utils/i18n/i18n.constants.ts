export const namespaces = {
  pages: {
    home: 'home',
    live: 'live'
  },
  common: {
    language: 'common',
    buttons: 'common'
  }
}

export const languages = {
  pt: 'pt',
  en: 'en'
}

type lngsProps = {
  [key: string]: any
}

export const lngs: lngsProps = {
  en: { nativeName: 'English' },
  pt: { nativeName: 'Portugues' }
}
