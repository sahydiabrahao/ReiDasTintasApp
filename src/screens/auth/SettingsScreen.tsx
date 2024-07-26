import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Icon, Text, TouchableOpacityBox} from '@components';
import {RootStackParamList} from '@routes';
import {Screen} from '@screens';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SettingsScreen'>;

export function SettingsScreen({navigation}: ScreenProps) {
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
