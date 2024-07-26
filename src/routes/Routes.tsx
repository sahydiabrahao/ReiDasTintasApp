import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack, AuthStack} from '@routes';

const authenticated = false;

export function Router() {
  return (
    <NavigationContainer>
      {authenticated ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
