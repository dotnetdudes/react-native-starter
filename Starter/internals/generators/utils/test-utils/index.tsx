import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { store } from '@/store';
import { ThemeProvider } from '@/providers/ThemeProvider';

const AllTheProviders: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
