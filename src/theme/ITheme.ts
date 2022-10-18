import 'styled-components';

// import original module declarations
import 'styled-components';
interface ITheme {
  colors: Colors;
  fonts: string[];
  fontSizes: number[];
  fontWeights: number[];
  letterSpacings: number[];
  typography: Typography;
  space: Space;
  radii: Radii;
}
interface Radii {
  '0': number;
  S: number;
  M: number;
  L: number;
}
interface Space {
  '0': number;
  XS: number;
  S: number;
  M: number;
  L: number;
}
interface Typography {
  Headline: Headline;
  Paragraph: Paragraph;
  Labels: Labels;
}
interface Labels {
  L1: H3;
  L2: H3;
}
interface Paragraph {
  P1: H3;
  P2: H3;
}
interface Headline {
  H3: H3;
  H1: H3;
  HS: H3;
  H2: H3;
  H4: H3;
}
interface H3 {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  fontStyle: string;
  letterSpacing: number;
  lineHeight: number;
  textAlign: string;
  textTransform: string;
  textDecoration: string;
}
interface Colors {
  primary: Primary;
  accent: Accent;
  neutral: Neutral;
  opaque: Opaque;
}
interface Opaque {
  white20: string;
  black20: string;
  black40: string;
}
interface Neutral {
  grey10: string;
  grey40: string;
  grey60: string;
  black: string;
  grey20: string;
}
interface Accent {
  success: string;
  error: string;
  warning: string;
}
interface Primary {
  dark: string;
  brand: string;
  light: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
