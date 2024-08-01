import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';

import {Box, Icon, Text} from '@components';

interface Props {
  item: Item;
}

export function CardCart({item}: Props) {
  return (
    <Box
      padding="s4"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor="gray5"
      borderColor="gray4"
      borderBottomWidth={1}>
      <Text preset="paragraphLarge">{item.quantity} </Text>
      <Box flexDirection="row">
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
      <Box
        flexGrow={1}
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center">
        <Box alignItems="flex-end" justifyContent="space-between" flexGrow={1}>
          <Box backgroundColor="gray3" borderRadius="s12" padding="s14">
            <Icon name="delete" color="grayWhite" />
          </Box>
          <Box backgroundColor="grayBlack" borderRadius="s12" padding="s14">
            <Icon name="edit" color="grayWhite" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
