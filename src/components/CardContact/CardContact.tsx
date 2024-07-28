import React from 'react';

import {useOrder, useToast} from '@services';

import {Box, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  id: number;
  city: string;
  address: string;
  district: string;
  phone: string;
}

export function CardContact({id, city, address, district, phone}: Props) {
  const {order, sendOrder} = useOrder();
  function orderData() {
    sendOrder({
      store: {
        id: id,
        phone: phone,
      },
    });
  }

  const {showToast} = useToast();
  function pickStore() {
    showToast({
      message: 'Ótima escolha! ',
      position: 'bottom',
      type: 'success',
    });
  }

  return (
    <TouchableOpacityBox
      onPress={() => [orderData(), pickStore()]}
      style={$shadowProps}
      padding="s8"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      borderRadius="s12"
      backgroundColor={order?.store?.id === id ? 'grayBlack' : 'gray5'}>
      <Box justifyContent="center" alignItems="center">
        <Text
          color={order?.store?.id === id ? 'grayWhite' : 'grayBlack'}
          mb="s8"
          bold
          preset="headingMedium">
          {city}
        </Text>
        <Text
          color={order?.store?.id === id ? 'grayWhite' : 'grayBlack'}
          mb="s8"
          preset="headingSmall">
          {district}
        </Text>
        <Text
          color={order?.store?.id === id ? 'grayWhite' : 'grayBlack'}
          mb="s8"
          preset="headingSmall">
          {address}
        </Text>
        <Text
          color={order?.store?.id === id ? 'grayWhite' : 'grayBlack'}
          mb="s8"
          bold
          preset="headingSmall">
          {phone}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
