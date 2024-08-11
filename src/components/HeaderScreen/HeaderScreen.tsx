import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {RootState, selectCategory, toggleBackButtonVisibility} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

export function HeaderScreen() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const isBackButtonVisible = useSelector(
    (state: RootState) => state.contact.isBackButtonVisible,
  );

  function navigateToHome() {
    navigation.navigate('AppTabNavigator');
    dispatch(selectCategory('Init'));
    dispatch(toggleBackButtonVisibility(!isBackButtonVisible));
  }

  function navigateToContactScreen() {
    navigation.navigate('ContactScreen');
    dispatch(toggleBackButtonVisibility(!isBackButtonVisible));
  }

  return (
    <Box
      justifyContent="center"
      padding="s12"
      backgroundColor="bluePrimary"
      elevation={2}>
      {isBackButtonVisible ? (
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
      ) : (
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
      )}
    </Box>
  );
}
