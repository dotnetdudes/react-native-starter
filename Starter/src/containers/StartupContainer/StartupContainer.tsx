import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { themeActions } from '@/providers/ThemeProvider/slice';
import { getThemeFromStorage } from '@/providers/ThemeProvider/utils';
import { useAuthSlice } from '@/features/Auth/slice';
import EEABrand from '@/components/EEABrand';
import useLayout from '@/styles/hooks/useLayout';
import { navigateAndSimpleReset } from '@/navigators/utils';

const StartupContainer = () => {
  const dispatch = useDispatch();
  const { actions } = useAuthSlice();
  const Layout = useLayout();

  const init = async () => {
    dispatch(actions.startApp());
    const savedTheme = await getThemeFromStorage();
    if (savedTheme) {
      dispatch(themeActions.changeTheme(savedTheme));
    }
    navigateAndSimpleReset('Main');
  };

  useEffect(() => {
    init();
  });

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <EEABrand />
    </View>
  );
};

export default StartupContainer;
