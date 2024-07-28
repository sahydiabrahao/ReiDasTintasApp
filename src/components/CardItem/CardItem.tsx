import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';
import {useToast} from '@services';

import {Box, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  item: Item;
}

export function CardItem({item}: Props) {
  const {showToast} = useToast();
  function addItemToCart() {
    showToast({
      message: 'Item adicionado',
      position: 'bottom',
      type: 'success',
    });
  }

  return (
    <TouchableOpacityBox
      onPress={addItemToCart}
      style={$shadowProps}
      padding="s8"
      mb="s16"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor="gray5"
      borderRadius="s12">
      <Box>
        <Text bold preset="headingSmall">
          {item.name}
        </Text>
        <Text preset="paragraphMedium">{item.brand}</Text>
        <Text preset="paragraphMedium">{item.specification}</Text>
        <Box flexDirection="row">
          <Text preset="paragraphMedium">{item.quantity} </Text>
          <Text preset="paragraphMedium">{item.unit}</Text>
        </Box>
      </Box>
      <Image
        style={{
          width: 80,
          height: 120,
        }}
        source={{uri: item.image}}
      />
    </TouchableOpacityBox>
  );
}
