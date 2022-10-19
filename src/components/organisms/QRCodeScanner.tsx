import React, {FC, useEffect, useState} from 'react';
import {Alert, Image, StyleSheet, TouchableOpacity} from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import {RNCamera} from 'react-native-camera';
import {useTheme} from 'styled-components';
import {Headline} from '../atoms/typo';
import {icons} from '@/assets';
import {Box} from '../atoms/layout';

export const QRCodeScanner: FC = () => {
  const theme = useTheme();
  const [isBarcodeRead, setIsBarcodeRead] = useState(false);
  const [barcodeValue, setBarcodeValue] = useState('');

  const [enableTorch, setEnableTorch] = useState(
    RNCamera.Constants.FlashMode.off,
  );

  const toggleTorch = () => {
    if (enableTorch == RNCamera.Constants.FlashMode.off) {
      setEnableTorch(RNCamera.Constants.FlashMode.torch);
    } else {
      setEnableTorch(RNCamera.Constants.FlashMode.off);
    }
  };

  const onBarcodeRead = event => {
    if (!isBarcodeRead) {
      setIsBarcodeRead(true);
      setBarcodeValue(event.data);
    }
  };

  useEffect(() => {
    if (isBarcodeRead) {
      Alert.alert(
        'Continue with import?',
        'hey you\'re scanning the QR code of document and not of a luca location. if you want to add a document, click "CONITUE"',
        [
          {
            text: 'Continue',
            onPress: () => {
              // reset everything
              setIsBarcodeRead(false);
              setBarcodeValue('');
            },
          },
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => {
              // reset everything
              setIsBarcodeRead(false);
              setBarcodeValue('');
            },
          },
        ],
      );
    }
  }, [isBarcodeRead, barcodeValue]);

  return (
    <Box style={styles.container}>
      <RNCamera
        captureAudio={false}
        flashMode={enableTorch}
        style={styles.cameraStyle}
        onBarCodeRead={onBarcodeRead}
      />
      <BarcodeMask
        width={'97.1%'}
        height={'97%'}
        edgeColor={'#ddeafd'}
        showAnimatedLine={false}
        edgeBorderWidth={2}
        edgeWidth={55}
        edgeRadius={15}
        outerMaskOpacity={0}
        edgeHeight={50}
      />
      <Box justifyContent="space-between" pt="L" flexDirection={'row'}>
        <Box />
        <Headline variant="H4" color={theme.colors.primary.light}>
          Scan QR code
        </Headline>

        <TouchableOpacity onPress={toggleTorch} hitSlop={{bottom: 0}}>
          <Image source={icons.torch} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderRadius: 15,
    // overflow: 'hidden',
    flexDirection: 'column',
  },
  cameraStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textLinkStyle: {
    color: 'blue',
    paddingVertical: 20,
  },
});
