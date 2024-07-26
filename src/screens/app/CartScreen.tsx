import React from 'react';

import {Icon, Text, TouchableOpacityBox} from '@components';
import {AppScreenProps} from '@routes';
import {Screen} from '@screens';

// type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SettingsScreen'>;

export function CartScreen({navigation}: AppScreenProps<'CartScreen'>) {
  function navigateToHomeScreen() {
    navigation.navigate('HomeScreen');
  }
  return (
    <Screen scrollable>
      <Text>CartScreen</Text>
      <TouchableOpacityBox activeOpacity={1} onPress={navigateToHomeScreen}>
        <Icon name="home" color="bluePrimary" size={40} />
      </TouchableOpacityBox>
    </Screen>
  );
}
