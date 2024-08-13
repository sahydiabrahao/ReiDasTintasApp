import React from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import {RootState, selectCategory, toggleBackButtonVisibility} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

export function HeaderScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const isBackButtonVisible = useSelector(
    (state: RootState) => state.contact.isBackButtonVisible,
  );

  function navigateToHomeScreen() {
    navigation.navigate('AppTabNavigator');
    dispatch(selectCategory('Init'));
  }

  function navigateToContactScreen() {
    navigation.navigate('ContactScreen');
    dispatch(toggleBackButtonVisibility(!isBackButtonVisible));
  }
  function goBack() {
    navigation.navigate('AppTabNavigator');
    dispatch(toggleBackButtonVisibility(!isBackButtonVisible));
  }

  return (
    <Box
      justifyContent="center"
      padding="s12"
      backgroundColor="bluePrimary"
      elevation={2}>
      {isBackButtonVisible && route.name === 'ContactScreen' ? (
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <TouchableOpacityBox onPress={navigateToHomeScreen} activeOpacity={1}>
            <Icon name="logo" color="grayWhite" size={70} />
          </TouchableOpacityBox>
          <TouchableOpacityBox onPress={goBack} activeOpacity={1}>
            <Text preset="headingSmall" color="grayWhite">
              Voltar
            </Text>
          </TouchableOpacityBox>
        </Box>
      ) : (
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <TouchableOpacityBox onPress={navigateToHomeScreen} activeOpacity={1}>
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
      )}
    </Box>
  );
}
