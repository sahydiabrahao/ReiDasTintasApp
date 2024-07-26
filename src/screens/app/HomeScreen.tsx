import React from 'react';

import {Box, Icon, Text, TextInput, TouchableOpacityBox} from '@components';
// import {useResetNavigationHome} from '@hooks';
import {AppScreenProps} from '@routes';
import {Screen} from '@screens';

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  function navigateToContactScreen() {
    navigation.navigate('ContactScreen');
  }

  // const {reset} = useResetNavigationHome();

  // // function navigateReset() {
  // //   reset({});
  // // }

  return (
    <Screen scrollable>
      <Box
        padding="s4"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Box alignItems="center" justifyContent="center">
          <Icon name="menu" color="bluePrimary" size={40} />
        </Box>
        <Box>
          <Icon name="logo" color="bluePrimary" size={80} />
        </Box>
      </Box>
      <TextInput
        boxProps={{marginBottom: 's20'}}
        RightComponent={<Icon name="search" color="gray3" />}
      />
      <Text>HomeScreen</Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        {/* //onPress={navigateReset} */}
        <TouchableOpacityBox activeOpacity={1}>
          <Icon name="home" color="bluePrimary" size={40} />
        </TouchableOpacityBox>
        <Icon name="cart" color="bluePrimary" size={40} />
        <TouchableOpacityBox
          activeOpacity={1}
          onPress={navigateToContactScreen}>
          <Icon name="contact" color="bluePrimary" size={40} />
        </TouchableOpacityBox>
      </Box>
    </Screen>
  );
}
