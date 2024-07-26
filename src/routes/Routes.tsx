import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack, AuthStack} from '@routes';

export type RootStackParamList = {
  HomeScreen: undefined;
  ContactScreen: undefined;
  SettingsScreen: undefined;
};

const authenticated = false;

export function Router() {
  return (
    <NavigationContainer>
      {authenticated ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
