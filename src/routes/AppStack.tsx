import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabNavigator} from '@routes';
import {CategoryScreen} from '@screens';

export type AppStackParamList = {
  AppTabNavigator: undefined;
  CategoryScreen: {name: string};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
}
