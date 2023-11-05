import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StartupContainer } from '@/containers';
import { navigationRef } from './utils';
import MainNavigator from './Main';
import { selectTheme } from '@/providers/ThemeProvider/slice/selectors';
import { Theme } from '@/providers/ThemeProvider/themes';
import useLayout from '@/styles/hooks/useLayout';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  const theme: Theme = useSelector(selectTheme);
  const Layout = useLayout();
  return (
    <SafeAreaView style={Layout.fill}>
      <NavigationContainer theme={theme} ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
