import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, Icon} from '@components';
import {RootStackParamsList} from '@routes';
import {Screen} from '@screens';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'ContactScreen'>;

export function ContactScreen({navigation}: ScreenProps) {
  function navigateToHomeScreen() {
    navigation.navigate('HomeScreen');
  }
  return (
    <Screen scrollable>
      <Button title="Home" onPress={navigateToHomeScreen}>
        <Icon name="home" color="bluePrimary" size={40} />
      </Button>
    </Screen>
  );
}
