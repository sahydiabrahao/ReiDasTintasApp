import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Box, Icon, Text, TextInput, TouchableOpacityBox} from '@components';
import {RootStackParamsList} from '@routes';
import {Screen} from '@screens';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>;

export function HomeScreen({navigation}: ScreenProps) {
  function navigateToContactScreen() {
    navigation.navigate('ContactScreen');
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
      <Text>HomeScreen</Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Icon name="home" color="bluePrimary" size={40} />
        <Icon name="cart" color="bluePrimary" size={40} />
        <TouchableOpacityBox
          activeOpacity={1}
          onPress={navigateToContactScreen}>
          <Icon name="contact" color="bluePrimary" size={40} />
        </TouchableOpacityBox>
      </Box>
    </Screen>
  );
}
