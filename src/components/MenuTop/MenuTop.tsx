import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, TouchableOpacityBox} from '@components';

export function MenuTop() {
  const navigation = useNavigation();

  function navigateToCategoryScreen() {
    navigation.navigate('CategoryScreen');
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="s16"
      backgroundColor="bluePrimary"
      elevation={2}
      mb="s12"
      style={{marginHorizontal: -12, marginTop: -20}}>
      <TouchableOpacityBox
        onPress={navigateToCategoryScreen}
        alignItems="center"
        justifyContent="center">
        <Icon name="menu" color="grayWhite" size={40} />
      </TouchableOpacityBox>
      <Box>
        <Icon name="logo" color="grayWhite" size={70} />
      </Box>
    </Box>
  );
}
