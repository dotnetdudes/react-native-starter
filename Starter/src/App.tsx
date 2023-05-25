import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { ApplicationNavigator } from '@/navigators/Application';
import '@/translations';

const PGate = PersistGate as any;

const App = () => (
  <Provider store={store}>
    {/**
     * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
     * and saved to redux.
     * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
     * for example `loading={<SplashScreen />}`.
     * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
     */}
    <PGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <ApplicationNavigator />
      </ThemeProvider>
    </PGate>
  </Provider>
);

export default App;
