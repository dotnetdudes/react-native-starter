// import { shouldPolyfill } from '@formatjs/intl-pluralrules/should-polyfill';

// async function polyfill(locale: string) {
//   const unsupportedLocale = shouldPolyfill(locale);
//   // This locale is supported
//   if (!unsupportedLocale) {
//     return;
//   }
//   // Load the polyfill 1st BEFORE loading data
//   await import('@formatjs/intl-getcanonicallocales/polyfill');
//   await import('@formatjs/intl-locale/polyfill');
//   await import('@formatjs/intl-pluralrules/polyfill-force');
//   // await import(`@formatjs/intl-pluralrules/locale-data/${unsupportedLocale}`);
//   await import('@formatjs/intl-numberformat/polyfill-force');
//   // await import(`@formatjs/intl-numberformat/locale-data/${unsupportedLocale}`);
//   await import('@formatjs/intl-relativetimeformat/polyfill-force');
//   // await import(
//   //   `@formatjs/intl-relativetimeformat/locale-data/${unsupportedLocale}`
//   // );
// }
import { shouldPolyfill } from '@formatjs/intl-getcanonicallocales/should-polyfill';

async function polyfill() {
  // This platform already supports Intl.getCanonicalLocales
  if (shouldPolyfill()) {
    await import('@formatjs/intl-getcanonicallocales/polyfill');
  }
}

export default polyfill;
