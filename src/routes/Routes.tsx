import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {MenuTop} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

const authenticated = false;

export function Router() {
  return (
    <NavigationContainer>
      <MenuTop />
      {authenticated ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
