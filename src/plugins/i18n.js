import {createI18n} from 'vue-i18n'

export const i18nConfig = {
  legacy: false,
  locale: 'en-US',

  messages: {
    'en-US': {
      language: 'Language',
      money: 'Money',
      items: 'no items | {n} item | {n} items'
    },
    'ja-JP': {
      language: '言語',
      money: 'お金',
      items: '項目 | 箇条'
    }
  },
  numberFormats: {
    'en-US': {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    'ja-JP': {
      currency: {
        style: 'currency',
        currency: 'JPY',
        currencyDisplay: 'symbol'
      }
    }
  }
}

// This lets you setup and tear down your translations
export default (config = i18nConfig) => createI18n(config)
