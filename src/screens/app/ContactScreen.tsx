import React from 'react';

import {Box, Icon} from '@components';
import {Screen} from '@screens';

export function ContactScreen() {
  return (
    <Screen scrollable>
      <Box alignItems="center" justifyContent="center">
        <Icon name="menu" color="bluePrimary" size={40} />
      </Box>
    </Screen>
  );
}
