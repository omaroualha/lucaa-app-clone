import React, {FC} from 'react';
import {ColorSchemeName} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {RootStackNavigator} from './RootStack';

type AppNavigationProps = {
  colorScheme: ColorSchemeName;
};

export const AppNavigation: FC<AppNavigationProps> = ({colorScheme}) => {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
