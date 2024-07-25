import React from 'react';

import {Box, Icon, TextInput} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  return (
    <Screen scrollable>
      <Box
        padding="s4"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Box alignItems="center" justifyContent="center">
          <Icon name="menu" color="bluePrimary" size={40} />
        </Box>
        <Box>
          <Icon name="logo" color="bluePrimary" size={80} />
        </Box>
      </Box>
      <TextInput
        boxProps={{marginBottom: 's20'}}
        RightComponent={<Icon name="search" color="gray3" />}
      />

      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Icon name="home" color="bluePrimary" size={40} />
        <Icon name="cart" color="bluePrimary" size={40} />
        <Icon name="contact" color="bluePrimary" size={40} />
      </Box>
    </Screen>
  );
}
