import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      'Shortcut to open this Chrome Extension options page': 'Shortcut to open this Chrome Extension options page',
      Settings: 'Settings',
      'Change shortcut': 'Change shortcut',
    },
  },
  zh: {
    translation: {
      'Shortcut to open this Chrome Extension options page': '打开 Chrome Extension 的 options 页面的快捷键',
      Settings: '设置',
      'Change shortcut': '修改快捷键',
    },
  },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
