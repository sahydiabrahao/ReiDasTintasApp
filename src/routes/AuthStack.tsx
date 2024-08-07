import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthTabNavigator} from '@routes';

export type AuthStackParamList = {
  AuthTabNavigator: undefined;
};

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AuthTabNavigator" component={AuthTabNavigator} />
    </Stack.Navigator>
  );
}
