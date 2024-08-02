import {ViewStyle} from 'react-native';

import {createTheme} from '@shopify/restyle';

const palette = {
  bluePrimary: '#32A5BB',

  yellowSecondary: '#FFDE00',

  redError: '#EA3737',
  greenSuccess: '#4ABC86',

  grayBlack: '#07081D',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    ...palette,

    primary: palette.bluePrimary,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.bluePrimary,

    background: palette.grayWhite,
    backgroundContrast: palette.grayBlack,

    error: palette.redError,

    success: palette.greenSuccess,
  },

  spacing: {
    s2: 2,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s18: 18,
    s20: 20,
    s22: 22,
    s24: 24,
    s26: 26,
    s28: 28,
    s30: 30,
    s32: 32,
    s60: 60,
    s100: 100,
  },

  borderRadii: {
    s8: 8,
    s12: 12,
    s32: 32,
  },

  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 5,
  shadowColor: '#000000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: {width: 0, height: -3},
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
