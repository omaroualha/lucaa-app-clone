import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Headline, Paragraph, PrimaryButton} from '@/components';
import {MyLucaStackScreenProps} from '../MyLucaStack';
import {images} from '@/assets';

export type MyLucaScreenProps = MyLucaStackScreenProps<'CheckIn'>;

export const MyLucaScreen: FC<MyLucaScreenProps> = ({navigation}) => {
  return (
    <Box flex={1} p="L" flexDirection={'column'}>
      <Headline variant="H3" color="primary.light" fontSize={'16'}>
        Welcome to "MY luca"
      </Headline>
      <Paragraph variant="P2" color="primary.light" pt="S">
        This is your Personal space, where you can add documents to make your
        check-in easier.
      </Paragraph>
      <Box alignItems={'center'} pt="L">
        <Image source={images.myLuca} style={styles.image} />
      </Box>
      <Box flex={1} />
      <PrimaryButton label="ADD" />
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
