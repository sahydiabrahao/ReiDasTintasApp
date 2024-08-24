import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {selectCategory} from '@redux';
import {useDispatch} from 'react-redux';

import {Box, Icon, TouchableOpacityBox} from '@components';

export function HeaderScreen() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  function navigateToHomeScreen() {
    navigation.navigate('AppTabNavigator');
    dispatch(selectCategory('Init'));
  }

  return (
    <Box
      justifyContent="center"
      padding="s12"
      backgroundColor="bluePrimary"
      elevation={7}>
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        <TouchableOpacityBox onPress={navigateToHomeScreen} activeOpacity={1}>
          <Icon name="logo" color="grayWhite" size={70} />
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}
