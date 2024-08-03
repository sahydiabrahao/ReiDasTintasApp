import React from 'react';

import {Box, Icon} from '@components';

export function MenuTop() {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="s16"
      backgroundColor="bluePrimary"
      elevation={2}>
      <Box alignItems="center" justifyContent="center">
        <Icon name="menu" color="grayWhite" size={40} />
      </Box>
      <Box>
        <Icon name="logo" color="grayWhite" size={70} />
      </Box>
    </Box>
  );
}
