import * as React from 'react';
import { themeActions } from '@/providers/ThemeProvider/slice';
import { useSelector, useDispatch } from 'react-redux';
import { saveTheme } from '@/providers/ThemeProvider/utils';
import { ThemeKeyType } from '@/providers/ThemeProvider/slice/types';
import { selectThemeKey } from '@/providers/ThemeProvider/slice/selectors';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';

const ThemeSwitch = () => {
  const { t } = useTranslation();
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleChange = () => {
    let newTheme: ThemeKeyType = 'light';
    if (theme === 'light' || theme === 'system') {
      dispatch(themeActions.changeTheme('dark'));
      newTheme = 'dark';
    } else {
      dispatch(themeActions.changeTheme('light'));
    }
    saveTheme(newTheme);
  };

  return theme === 'dark' ? (
    <Button mode="contained" icon="brightness-7" onPress={handleChange}>
      {t('toLight')}
    </Button>
  ) : (
    <Button mode="contained" icon="brightness-5" onPress={handleChange}>
      {t('toDark')}
    </Button>
  );
};

export default ThemeSwitch;
