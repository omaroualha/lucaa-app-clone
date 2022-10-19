import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import {AppNavigation} from './src/navigation/AppNavigation';
import {BaseTheme} from './src/theme/BaseTheme';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={BaseTheme}>
        <StatusBar barStyle={'light-content'} />
        <AppNavigation colorScheme={'dark'} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
