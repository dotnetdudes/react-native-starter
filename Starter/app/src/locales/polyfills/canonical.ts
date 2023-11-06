import { shouldPolyfill } from '@formatjs/intl-getcanonicallocales/should-polyfill';

async function polyfillCanonical() {
  // This platform already supports Intl.getCanonicalLocales
  if (shouldPolyfill()) {
    await import('@formatjs/intl-getcanonicallocales/polyfill');
  }
}

export default polyfillCanonical;
