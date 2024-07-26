import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CartScreen, ContactScreen, HomeScreen} from '@screens';

export type AppTabBottomParamList = {
  HomeScreen: undefined;
  CartScreen: undefined;
  ContactScreen: undefined;
  SettingsScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomParamList>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
    </Tab.Navigator>
  );
}
