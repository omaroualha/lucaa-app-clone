import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Headline, Paragraph, PrimaryButton} from '@/components';
import {MyLucaStackScreenProps} from '@/features/myLuca/MyLucaStack';
import {images} from '@/assets';

export type PayScreenProps = MyLucaStackScreenProps<'CheckIn'>;

export const PayScreen: FC<PayScreenProps> = ({navigation}) => {
  return (
    <Box flex={1} p="L" flexDirection={'column'}>
      <Headline variant="H3" color="primary.light" fontSize={'16'}>
        Activate luca Pay
      </Headline>
      <Paragraph variant="P2" color="primary.light" pt="S">
        Activate Luca Pay and benefit from more service and less waiting time in
        luca locations. By activating luca Pay for this device, you can pay
        easily and securely with luca Pay at participating luca locations, save
        your payment method data for further payments, and view your payment
        history.
      </Paragraph>
      <Box alignItems={'center'} pt="L">
        <Image source={images.pay} style={styles.image} />
      </Box>
      <Box flex={1} />
      <PrimaryButton label="ACTIVATE" variant="LIGHT" />
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
