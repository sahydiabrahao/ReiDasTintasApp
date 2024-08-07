import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, TouchableOpacityBox} from '@components';
export function MenuTop() {
  const navigation = useNavigation();

  return (
    <Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="s16"
        backgroundColor="bluePrimary"
        elevation={2}>
        <TouchableOpacityBox
          onPress={() => navigation.navigate('CategoryScreen')}
          alignItems="center"
          justifyContent="center">
          <Icon name="menu" color="grayWhite" size={40} />
        </TouchableOpacityBox>
        <Box>
          <Icon name="logo" color="grayWhite" size={70} />
        </Box>
      </Box>
    </Box>
  );
}
