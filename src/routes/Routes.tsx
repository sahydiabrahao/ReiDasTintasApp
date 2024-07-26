import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppTabNavigator, AuthTabNavigator} from '@routes';

const authenticated = false;

export function Router() {
  return (
    <NavigationContainer>
      {authenticated ? <AuthTabNavigator /> : <AppTabNavigator />}
    </NavigationContainer>
  );
}
