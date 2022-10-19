import {Headline} from '@/components/atoms';
import React, {FC} from 'react';
import {PressableProps, TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';
import {flex, FlexProps, variant} from 'styled-system';

interface PrimaryButtonProps extends PressableProps, FlexProps {
  label: string;
  size?: 'L' | 'M' | 'S';
  variant?: 'DEFAULT' | 'DARK' | 'LIGHT';
  disabled?: boolean;
}

const PrimaryButtonBackground = styled(TouchableOpacity)<PrimaryButtonProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  ${({theme}) => {
    return variant({
      prop: 'size',
      variants: {
        L: {
          height: 50,
          borderRadius: '30',
          paddingHorizontal: theme.space.M,
        },
        M: {
          height: 40,
          borderRadius: '20',
          paddingHorizontal: theme.space.M,
        },
        S: {
          height: 30,
          borderRadius: '10',
          paddingHorizontal: theme.space.S,
        },
      },
    });
  }}
  ${({theme, disabled}) => {
    if (disabled) {
      return css`
        background-color: ${theme.colors.neutral.grey20};
      `;
    }
    return variant({
      variants: {
        DEFAULT: {
          backgroundColor: theme.colors.primary.brand,
        },
        DARK: {
          backgroundColor: theme.colors.primary.dark,
        },
        LIGHT: {
          backgroundColor: '#b9d29b',
        },
      },
    });
  }}
    
    ${flex}
`;

export const PrimaryButton: FC<PrimaryButtonProps> = props => {
  const {size, label} = props;
  return (
    <PrimaryButtonBackground activeOpacity={0.6} {...props}>
      <Headline
        variant={size == 'L' ? 'H3' : 'H4'}
        color="primary.dark"
        textAlign={'center'}>
        {label}
      </Headline>
    </PrimaryButtonBackground>
  );
};
PrimaryButton.defaultProps = {size: 'L', variant: 'DEFAULT'};
