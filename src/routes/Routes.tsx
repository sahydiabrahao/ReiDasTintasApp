import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {MenuTop} from '@components';
import {AppTabNavigator, AuthTabNavigator} from '@routes';

const authenticated = false;

export function Router() {
  return (
    <NavigationContainer>
      <MenuTop />
      {authenticated ? <AuthTabNavigator /> : <AppTabNavigator />}
    </NavigationContainer>
  );
}
