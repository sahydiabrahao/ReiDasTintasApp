import React from 'react';
import {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast} from '@services';

import {Box, BoxProps, Icon, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const {toast, hideToast} = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, 500);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Box bottom={100} {...$boxStyle}>
      <Icon color="grayWhite" name="up" />
      <Text
        color="grayWhite"
        style={{flexShrink: 1}}
        ml="s16"
        preset="paragraphMedium"
        bold>
        {toast?.message}
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
