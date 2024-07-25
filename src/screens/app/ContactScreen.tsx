import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Box, Icon, Text, TextInput, TouchableOpacityBox} from '@components';
import {RootStackParamsList} from '@routes';
import {Screen} from '@screens';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'ContactScreen'>;

export function ContactScreen({navigation}: ScreenProps) {
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
