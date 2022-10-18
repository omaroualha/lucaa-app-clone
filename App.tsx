import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import {AppNavigation} from './src/navigation/AppNavigation';
import {BaseTheme} from './src/theme/BaseTheme';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={BaseTheme}>
        {/* <StatusBar barStyle="light-content" /> */}
        <AppNavigation colorScheme={colorScheme} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
