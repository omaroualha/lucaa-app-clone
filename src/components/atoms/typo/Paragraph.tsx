import {TextProps} from 'react-native';
import styled, {css} from 'styled-components/native';
import {typography} from 'styled-system';
import {Typo} from './Typo';

type ParagraphVariants = 'P1' | 'P2';

interface ParagraphProps extends TextProps {
  variant?: ParagraphVariants;
}

export const Paragraph = styled(Typo)<ParagraphProps>`
  ${props => {
    const {theme, variant} = props;
    const variantStyle = variant
      ? theme.typography.Paragraph[variant]
      : theme.typography.Paragraph.P1;

    return css`
      font-family: ${variantStyle.fontFamily};
      font-size: ${variantStyle.fontSize}px;
      line-height: ${variantStyle.lineHeight}px;
      letter-spacing: ${variantStyle.letterSpacing}px;
    `;
  }}
  ${typography}
`;

Paragraph.defaultProps = {variant: 'P1', color: 'primary.dark'};
