import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';

import {Box, Icon, Text} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  item: Item;
}

export function CardCart({item}: Props) {
  return (
    <Box
      style={$shadowProps}
      padding="s8"
      mb="s16"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor="gray5"
      borderRadius="s12">
      <Image
        style={{
          width: 80,
          height: 120,
        }}
        source={{uri: item.image}}
      />
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
      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        mb="s8"
        mt="s32"
        flexGrow={1}>
        <Text bold preset="paragraphMedium">
          100
        </Text>
        <Box
          flexDirection="row"
          alignItems="flex-end"
          justifyContent="space-between"
          flexGrow={1}
          flexShrink={1}
          gap="s28">
          <Box backgroundColor="grayBlack" borderRadius="s12" padding="s14">
            <Icon name="minus" color="grayWhite" />
          </Box>
          <Box backgroundColor="grayBlack" borderRadius="s12" padding="s14">
            <Icon name="plus" color="grayWhite" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
