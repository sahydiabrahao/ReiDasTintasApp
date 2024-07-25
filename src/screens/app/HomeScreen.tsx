import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Box, Button, Icon, TextInput} from '@components';
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

      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Button title="contact" onPress={navigateToContactScreen}>
          <Icon name="home" color="bluePrimary" size={40} />
        </Button>
        <Icon name="cart" color="bluePrimary" size={40} />
        <Icon name="contact" color="bluePrimary" size={40} />
      </Box>
    </Screen>
  );
}
