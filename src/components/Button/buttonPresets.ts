import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {TextProps} from '../Text/Text';

import {ButtonPreset} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {color: ThemeColors; textProps?: TextProps};
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'grayBlack',
      },
      content: {color: 'primaryContrast'},
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },
  outiline: {
    default: {
      container: {
        backgroundColor: 'grayWhite',
        borderColor: 'grayBlack',
        borderWidth: 1.25,
      },
      content: {color: 'grayBlack'},
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },
};
