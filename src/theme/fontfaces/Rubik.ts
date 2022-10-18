import { FontFace, local } from 'react-native-font-faces';

export const Rubik_Regular: FontFace = {
  fontFamily: 'Rubik',
  fontWeight: '400',
  fontStyle: 'normal',
  src: [local('Rubik-Regular')],
};
export const Rubik_Medium: FontFace = {
  fontFamily: 'Rubik',
  fontWeight: '500',
  fontStyle: 'normal',
  src: [local('Rubik-Medium')],
};
export const Rubik_Bold: FontFace = {
  fontFamily: 'Rubik',
  fontWeight: '700',
  fontStyle: 'normal',
  src: [local('Rubik-Bold')],
};

export const Rubic_All = [Rubik_Regular, Rubik_Medium, Rubik_Bold];
