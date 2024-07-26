import React from 'react';

import {Icon, Text, TouchableOpacityBox} from '@components';
import {AuthScreenProps} from '@routes';
import {Screen} from '@screens';

// type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SettingsScreen'>;

export function SettingsScreen({
  navigation,
}: AuthScreenProps<'SettingsScreen'>) {
  function navigateToHomeScreen() {
    navigation.navigate('HomeScreen');
  }
  return (
    <Screen scrollable>
      <Text>CustomScreen</Text>
      <TouchableOpacityBox activeOpacity={1} onPress={navigateToHomeScreen}>
        <Icon name="home" color="bluePrimary" size={40} />
      </TouchableOpacityBox>
    </Screen>
  );
}
