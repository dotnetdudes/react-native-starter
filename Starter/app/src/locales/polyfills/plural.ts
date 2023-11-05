import { shouldPolyfill } from '@formatjs/intl-pluralrules/should-polyfill';

async function polyfillPlural(locale: string) {
  const unsupportedLocale = shouldPolyfill(locale);
  // This locale is supported
  if (!unsupportedLocale) {
    return;
  }
  console.error(unsupportedLocale);
  // Load the polyfill 1st BEFORE loading data
  await import('@formatjs/intl-pluralrules/polyfill-force');
  // await import(`@formatjs/intl-pluralrules/locale-data/${unsupportedLocale}`);
}

export default polyfillPlural;
