import { ThemeKeyType } from './slice/types';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* istanbul ignore next line */
export const isSystemDark = Appearance.getColorScheme() === 'dark';

export async function saveTheme(theme: ThemeKeyType) {
  AsyncStorage.setItem('selectedTheme', theme);
}

/* istanbul ignore next line */
export async function getThemeFromStorage(): Promise<ThemeKeyType | null> {
  return (
    ((await AsyncStorage.getItem('selectedTheme')) as ThemeKeyType) || null
  );
}
