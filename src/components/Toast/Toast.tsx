import React from 'react';
import {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast, ToastPosition, ToastType} from '@services';

import {Box, BoxProps, Icon, IconProps, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;
const DEFAULT_DURATION = 500;

export function Toast() {
  const {toast, hideToast} = useToast();

  const position: ToastPosition = toast?.position || 'bottom';
  const type: ToastType = toast?.type || 'success';

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Box {...$boxStyle} style={[{[position]: 100}, {...$shadowProps}]}>
      <Icon {...mapTypeIcon[type]} />
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

const mapTypeIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'up',
  },
  error: {
    color: 'error',
    name: 'down',
  },
};

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
};
