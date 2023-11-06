import * as React from 'react';
import { Provider as OriginalThemeProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectTheme } from './slice/selectors';

export const ThemeProvider = (props: {
  children: JSX.Element | JSX.Element[];
}) => {
  useThemeSlice();

  const theme = useSelector(selectTheme);
  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
