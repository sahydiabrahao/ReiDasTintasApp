import React from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import {selectCategory} from '@redux';
import {useDispatch} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

export function HeaderScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const screenName = route.name;

  const dispatch = useDispatch();

  function navigateToHome() {
    navigation.navigate('AppTabNavigator');
    dispatch(selectCategory('Init'));
  }

  function navigateToContactScreen() {
    navigation.navigate('ContactScreen');
  }

  return (
    <Box
      justifyContent="center"
      padding="s12"
      backgroundColor="bluePrimary"
      elevation={2}>
      {screenName !== 'ContactScreen' ? (
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <TouchableOpacityBox onPress={navigateToHome} activeOpacity={1}>
            <Icon name="logo" color="grayWhite" size={70} />
          </TouchableOpacityBox>

          <TouchableOpacityBox
            onPress={navigateToContactScreen}
            activeOpacity={1}
            alignItems="center"
            justifyContent="center">
            <Icon name="contact" color="grayWhite" size={24} />
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
