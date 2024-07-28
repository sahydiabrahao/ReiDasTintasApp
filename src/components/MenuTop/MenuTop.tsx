import React from 'react';

import {Box, Icon} from '@components';

export function MenuTop() {
  return (
    <Box
      padding="s4"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      mb="s16">
      {/* <Box alignItems="center" justifyContent="center">
          <Icon name="menu" color="bluePrimary" size={40} />
          </Box> */}
      <Box>
        <Icon name="logo" color="bluePrimary" size={80} />
      </Box>
    </Box>
  );
}
