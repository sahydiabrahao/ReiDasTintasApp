import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

interface Props {
  item: Item;
}

export function CardCart({item}: Props) {
  return (
    <TouchableOpacityBox
      padding="s2"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor="gray5"
      borderColor="gray4"
      borderBottomWidth={1}>
      <Text preset="paragraphLarge">{item.quantity} </Text>
      <Box flexDirection="row" flexGrow={1}>
        <Image
          style={{
            width: 80,
            height: 120,
          }}
          source={{uri: item.image}}
        />
        <Box justifyContent="center" alignItems="flex-start">
          <Text bold preset="headingSmall">
            {item.name}
          </Text>
          <Text preset="paragraphMedium">{item.brand}</Text>
          <Text preset="paragraphMedium">{item.specification}</Text>
          <Text preset="paragraphMedium">{item.unit}</Text>
        </Box>
      </Box>
      <Box flexShrink={1} flexDirection="column">
        <Box alignItems="stretch" justifyContent="space-evenly" flexGrow={1}>
          <Box backgroundColor="gray3" borderRadius="s12" padding="s14">
            <Icon name="delete" color="grayWhite" />
          </Box>
          <Box backgroundColor="grayBlack" borderRadius="s12" padding="s14">
            <Icon name="edit" color="grayWhite" />
          </Box>
        </Box>
      </Box>
    </TouchableOpacityBox>
  );
}
