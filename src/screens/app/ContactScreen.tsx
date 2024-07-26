import React from 'react';

import {Box, Icon, Text, TextInput, TouchableOpacityBox} from '@components';
import {AppScreenProps} from '@routes';
import {Screen} from '@screens';

export function ContactScreen({navigation}: AppScreenProps<'ContactScreen'>) {
  function navigateToHomeScreen() {
    navigation.navigate('HomeScreen');
  }
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
      <Text>ContactScreen</Text>

      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <TouchableOpacityBox activeOpacity={1} onPress={navigateToHomeScreen}>
          <Icon name="home" color="bluePrimary" size={40} />
        </TouchableOpacityBox>
        <Icon name="cart" color="bluePrimary" size={40} />
        <Icon name="contact" color="bluePrimary" size={40} />
      </Box>
    </Screen>
  );
}
