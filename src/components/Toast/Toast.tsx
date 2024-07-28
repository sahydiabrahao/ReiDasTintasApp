import {Dimensions} from 'react-native';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  return (
    <Box top={600} {...$boxStyle}>
      <Icon color="grayWhite" name="up" />
      <Text
        color="grayWhite"
        style={{flexShrink: 1}}
        ml="s16"
        preset="paragraphMedium"
        bold>
        Item adicionado
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'grayBlack',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's12',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};
