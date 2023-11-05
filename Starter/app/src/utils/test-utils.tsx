import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
// import { Provider as OriginalThemeProvider } from 'react-native-paper';
// import { themes } from '../providers/ThemeProvider/themes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store';
import '@/translations';

/* tbd - get the react native paper theme provider mock working
const MockTheme = ({ children }: any) => {
  const theme = themes.light;
  return (
    <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
  );
};
*/

const PGate = PersistGate as any;

const AllTheProviders: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <PGate loading={null} persistor={persistor}>
        {children}
      </PGate>
    </Provider>
  );
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
// export { customRender as render };
