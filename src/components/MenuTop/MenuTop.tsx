import React from 'react';

import {Box, Icon} from '@components';

export function MenuTop() {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      mb="s8">
      {/* <Box alignItems="center" justifyContent="center">
        <Icon name="menu" color="grayBlack" size={32} />
      </Box> */}
      <Box>
        <Icon name="logo" color="bluePrimary" size={70} />
      </Box>
    </Box>
  );
}
