import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {Box, QRCodeScanner} from '@/components';

export const CheckInScreen = () => {
  return (
    <View style={styles.container}>
      <Box flex={1} p="M">
        <QRCodeScanner />
      </Box>
      <Box flex={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
