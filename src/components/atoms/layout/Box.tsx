import {ViewProps} from 'react-native';
import styled from 'styled-components/native';

import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';
/**
 * Box Component
 */
export interface BoxProps
  extends ViewProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
    BorderProps {
  test: string;
}

export const Box = styled.View<BoxProps>`
  ${position}
  ${layout}
  ${space}
  ${flexbox}
  ${border}
  ${color}
`;
