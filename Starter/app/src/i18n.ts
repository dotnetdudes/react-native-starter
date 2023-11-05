import i18next from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import options from './locales/options';

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(RNLanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .use(ChainedBackend)
  .init({
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    backend: options,
    supportedLngs: [
      'en',
      'de',
      'es',
      'fr',
      'it',
      'ja',
      'ko',
      'nl',
      'pt',
      'th',
      'zh',
      'zh-cn',
      'zh-hk',
      'zh-tw',
    ],
    fallbackLng: 'en',
    debug:
      process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
