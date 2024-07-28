import React from 'react';

import {Box, Icon} from '@components';

export function MenuTop() {
  return (
    <Box
      padding="s4"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s16">
      <Box alignItems="center" justifyContent="center">
        <Icon name="menu" color="grayBlack" size={48} />
      </Box>
      <Box>
        <Icon name="logo" color="bluePrimary" size={100} />
      </Box>
    </Box>
  );
}
