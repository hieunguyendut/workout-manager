import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import underscore from 'lodash';

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: cb => {
    const locales = RNLocalize.getLocales();
    const firstLocal = underscore.first(locales);

    if (firstLocal) {
      return cb(firstLocal.languageCode);
    }
    return cb('en');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    debug: true,
    resources: {
      en: {
        common: {
          home: 'Home',
        },
      },
      vi: {
        common: {
          home: 'Trang chủ',
        },
      },
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });

export default i18n;
