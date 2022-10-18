import {FontFace, local} from 'react-native-font-faces';

export const Oswald_Regular: FontFace = {
  fontFamily: 'Oswald',
  fontWeight: '400',
  fontStyle: 'normal',
  src: [local('Oswald-Regular')],
};

export const Oswald_Medium: FontFace = {
  fontFamily: 'Oswald',
  fontWeight: '500',
  fontStyle: 'normal',
  src: [local('Oswald-Medium')],
};

export const Oswald_All = [Oswald_Regular, Oswald_Medium];
