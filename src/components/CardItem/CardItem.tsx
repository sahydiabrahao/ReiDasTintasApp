import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';

import {Box, Text} from '@components';

interface Props {
  item: Item;
}

export function CardItem({item}: Props) {
  return (
    <Box
      padding="s8"
      mb="s16"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center">
      <Box>
        <Text>{item.name}</Text>
        <Text>{item.brand}</Text>
        <Text>{item.specification}</Text>
        <Box flexDirection="row">
          <Text>{item.quantity}</Text>
          <Text>{item.unit}</Text>
        </Box>
      </Box>
      <Image
        style={{
          width: 80,
          height: 80,
        }}
        source={{uri: item.image}}
      />
    </Box>
  );
}
