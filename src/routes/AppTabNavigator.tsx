import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  SearchScreen,
  CartScreen,
  ColorScreen,
  HomeScreen,
  ContactScreen,
} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppTabBottomParamList = {
  HomeScreen: undefined;
  CartScreen: undefined;
  ColorScreen: undefined;
  SearchScreen: undefined;
  ContactScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {},
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ColorScreen" component={ColorScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
    </Tab.Navigator>
  );
}
