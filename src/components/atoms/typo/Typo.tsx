import React, {FC, forwardRef} from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import {globalFontFaces} from 'react-native-font-faces/src/utilities/globalFontFaces';
import {generateOverrideStyle} from 'react-native-font-faces/src/utilities/generateOverrideStyle';

export type TypoProps = TextProps &
  TypographyProps &
  SpaceProps &
  ColorProps & {forwardedRef?: any};
export const MyText: FC<TypoProps> = props => {
  const fontFaces = Object.values(globalFontFaces);
  const originalStyle: TextStyle = StyleSheet.flatten([props.style]);
  const overrideStyle: TextStyle = generateOverrideStyle(
    fontFaces,
    originalStyle,
  );
  const flattenedStyle: TextStyle = StyleSheet.flatten([
    originalStyle,
    overrideStyle,
  ]);

  return <Text ref={props.forwardedRef} {...props} style={flattenedStyle} />;
};
export const Typo = styled(
  forwardRef((props, forwardedRef) => {
    return <MyText forwardedRef={forwardedRef} {...props} />;
  }),
)<TypoProps>(typography, space, color);
