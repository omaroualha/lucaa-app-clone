import {TextProps} from 'react-native';
import styled, {css} from 'styled-components/native';
import {color, space, typography} from 'styled-system';
import {Typo} from './Typo';

type HeadlineVariants = 'HS' | 'H1' | 'H2' | 'H3' | 'H4';

export interface HeadlineProps extends TextProps {
  variant?: HeadlineVariants;
}

export const Headline = styled(Typo)<HeadlineProps>`
  color: ${({theme}) => theme.colors.primary.dark};
  ${({theme, variant}) => {
    const variantStyle = variant
      ? theme.typography.Headline[variant]
      : theme.typography.Headline.H1;

    return css`
      font-size: ${variantStyle.fontSize}px;
      font-family: ${variantStyle.fontFamily};
      font-weight: ${variantStyle.fontWeight};
      line-height: ${variantStyle.lineHeight}px;
      letter-spacing: ${variantStyle.letterSpacing}px;
    `;
  }}
  ${color}
  ${space}
  ${typography}
`;

Headline.defaultProps = {variant: 'H1', color: 'primary.dark'};
