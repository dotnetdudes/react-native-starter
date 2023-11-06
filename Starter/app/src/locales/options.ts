import en from './en/translation.json';
import de from './de/translation.json';
import es from './es/translation.json';
import fr from './fr/translation.json';
import it from './it/translation.json';
import ja from './ja/translation.json';
import ko from './ko/translation.json';
import nl from './nl/translation.json';
import pt from './pt/translation.json';
import th from './th/translation.json';
import zh from './zh/translation.json';

import { convertLanguageJsonToObject } from './translations';
// import LocalStorageBackend from 'i18next-localstorage-backend';
import AsyncStorageBackend from 'i18next-async-storage-backend2';
import resourcesToBackend from 'i18next-resources-to-backend';
// import HttpBackend from 'i18next-http-backend';

export const translationsJson = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  es: {
    translation: es,
  },
  fr: {
    translation: fr,
  },
  it: {
    translation: it,
  },
  ja: {
    translation: ja,
  },
  ko: {
    translation: ko,
  },
  nl: {
    translation: nl,
  },
  pt: {
    translation: pt,
  },
  th: {
    translation: th,
  },
  zh: {
    translation: zh,
  },
};

// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(en);

const options = {
  // array of existing i18next backends from https://www.i18next.com/plugins-and-utils.html#backends
  backends: [
    AsyncStorageBackend,
    // HttpBackend,
    resourcesToBackend(translationsJson),
  ],

  // array of options in order of backends above
  backendOptions: [
    {
      expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
    /* {
      loadPath: `${applangaConfig.domain}?app=${applangaConfig.apiKey}&requestedLanguages=[%22{{lng}}%22]`,

      parse: function (data) {
        const obj = JSON.parse(data);
        const keys = Object.keys(obj.data);
        const items = obj.data[keys[0]].main.entries;
        const result = convertApplangaToSimpleJSON(items);
        return result;
      },
      customHeaders: {
        authorization: 'Bearer ' + applangaConfig.token,
      },
      reloadInterval: false, // can be used to reload resources in a specific interval
    }, */
  ],
};

export default options;
