import {
  MD3LightTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const lightTheme = {
  ...PaperDefaultTheme,
  ...DefaultTheme,
  colors: { ...PaperDefaultTheme.colors, ...DefaultTheme.colors },
};

const darkTheme = {
  ...PaperDarkTheme,
  ...DarkTheme,
  colors: { ...PaperDarkTheme.colors, ...DarkTheme.colors },
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
