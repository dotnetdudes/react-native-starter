/**
 * @format
 */

import { AppRegistry } from 'react-native';
import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/en'; // locale-data for en
import '@formatjs/intl-numberformat/polyfill';
import '@formatjs/intl-numberformat/locale-data/en'; // locale-data for en
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en'; // locale-data for en
import '@formatjs/intl-datetimeformat/polyfill';
import '@formatjs/intl-datetimeformat/locale-data/en'; // locale-data for en
import '@formatjs/intl-datetimeformat/add-all-tz'; // Add ALL tz data

import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
