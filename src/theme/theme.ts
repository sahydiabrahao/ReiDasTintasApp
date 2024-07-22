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
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
  },

  borderRadii: {
    s8: 8,
    s16: 16,
    s32: 32,
  },

  textVariants: {
    default: {},
  },
});

export type Theme = typeof theme;
