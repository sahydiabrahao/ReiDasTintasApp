import {TextStyle, ViewStyle} from 'react-native';

import {createTheme} from '@shopify/restyle';

const palette = {
  bluePrimary: '#1E99C5',

  yellowSecondary: '#FFDE00',

  redError: '#E57373',
  greenSuccess: '#4ABC86',

  grayBlack: '#1C1C1C', // Preto intenso para alto contraste
  gray1: '#5B5B5B', // Cinza médio-escuro, neutro e moderno
  gray2: '#9E9E9E', // Cinza médio, que se harmoniza bem com o azul
  gray3: '#C4C4C4', // Cinza claro, com um tom suave que não compete com o azul
  gray4: '#E2E2E2', // Cinza muito claro, quase branco, para uma sensação de leveza
  gray5: '#F4F4F4', // Quase branco, suave e moderno
  grayWhite: '#FFFFFF', // Branco puro para contraste máximo
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
    s0: 0,
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
    s64: 64,
    s100: 100,
  },

  borderRadii: {
    s0: 0,
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

  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 4,
  shadowColor: '#000000',
  shadowOpacity: 0.1,
  shadowRadius: 6,
  shadowOffset: {width: 0, height: 4},
};

export const $textShadowProps: TextStyle = {
  textShadowColor: '#000000',
  textShadowOffset: {width: 0, height: 2},
  textShadowRadius: 4,
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
