import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CartScreen, SearchScreen, HomeScreen, SettingsScreen} from '@screens';

export type AuthTabBottomParamList = {
  HomeScreen: undefined;
  CartScreen: undefined;
  SearchScreen: undefined;
  SettingsScreen: undefined;
};

const Tab = createBottomTabNavigator<AuthTabBottomParamList>();

export function AuthTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
