import React from 'react';

import {Button, Icon} from '@components';
import {Screen} from '@screens';

export function ContactScreen({navigation}) {
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
