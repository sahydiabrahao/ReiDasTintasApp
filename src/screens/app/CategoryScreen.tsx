import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';
import {Screen} from '@screens';

export function CategoryScreen() {
  const navigation = useNavigation();

  function navigateToCategoryScreen() {
    navigation.navigate('AppTabNavigator');
  }

  return (
    <Screen scrollable>
      <Box backgroundColor="grayWhite" mb="s12">
        <Text>Categorias</Text>
      </Box>
      <TouchableOpacityBox
        onPress={navigateToCategoryScreen}
        alignItems="center"
        justifyContent="center">
        <Icon name="menu" color="grayBlack" size={40} />
      </TouchableOpacityBox>
    </Screen>
  );
}
