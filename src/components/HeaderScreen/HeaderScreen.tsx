import React from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

export function HeaderScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const screenName = route.name;

  function navigateToHome() {
    navigation.navigate('AppTabNavigator');
  }

  function navigateToCategoryScreen() {
    console.log('navigation.navigate(CategoryScreen)');
  }

  return (
    <Box
      padding="s16"
      backgroundColor="bluePrimary"
      elevation={2}
      mb="s12"
      style={{marginHorizontal: -12, marginTop: -20}}>
      {screenName === 'HomeScreen' ? (
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <TouchableOpacityBox onPress={navigateToHome} activeOpacity={1}>
            <Icon name="logo" color="grayWhite" size={70} />
          </TouchableOpacityBox>

          <TouchableOpacityBox
            onPress={navigateToCategoryScreen}
            activeOpacity={1}
            alignItems="center"
            justifyContent="center">
            <Icon name="search" color="grayWhite" size={24} />
          </TouchableOpacityBox>
        </Box>
      ) : (
        <TouchableOpacityBox
          activeOpacity={1}
          onPress={navigateToHome}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Box>
            <Icon name="logo" color="grayWhite" size={70} />
          </Box>
          <Text preset="headingSmall" color="grayWhite">
            Voltar
          </Text>
        </TouchableOpacityBox>
      )}
    </Box>
  );
}
