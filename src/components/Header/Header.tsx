import React from 'react';

import {RootState} from '@redux';
import {useSelector} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

export function Header() {
  const {
    category: {categoryTitle},
  } = useSelector((state: RootState) => state);

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      padding="s12"
      backgroundColor="grayWhite"
      elevation={7}>
      <TouchableOpacityBox
        activeOpacity={1}
        flexDirection="row"
        alignItems="center">
        <Box mr="s4">
          <Icon name="crown" color="bluePrimary" />
        </Box>
        <Text bold preset="paragraphMedium">
          Rei das Tintas
        </Text>
      </TouchableOpacityBox>
      <Box flexDirection="row" alignItems="center">
        <Text preset="paragraphMedium" color="gray3">
          {categoryTitle}
        </Text>
      </Box>
    </Box>
  );
}
