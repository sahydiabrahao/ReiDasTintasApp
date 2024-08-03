import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';
interface Props {
  item: Item;
  onDelete: (id: string) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

export function CardCart({item, onDelete, onIncrement, onDecrement}: Props) {
  return (
    <Box
      padding="s2"
      backgroundColor="gray5"
      borderColor="gray4"
      borderBottomWidth={1}>
      <Box flexDirection="row">
        <Box
          flexDirection="row"
          flexGrow={1}
          alignItems="center"
          justifyContent="flex-start">
          <Box>
            <Image
              style={{
                width: 80,
                height: 140,
              }}
              source={{uri: item.image}}
            />
          </Box>
          <Box>
            <Text bold preset="headingSmall">
              {item.name}
            </Text>
            <Text preset="paragraphMedium">{item.brand}</Text>
            <Text preset="paragraphMedium">{item.specification}</Text>
            <Text preset="paragraphMedium">{item.unit}</Text>
            <Text preset="paragraphMedium">Quantidade: {item.quantity} </Text>
          </Box>
        </Box>
        <Box alignItems="center" justifyContent="center" rowGap="s2">
          <TouchableOpacityBox
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
            onPress={() => onDelete(item.id)}
            backgroundColor="error"
            borderRadius="s12"
            padding="s14">
            <Icon name="delete" color="grayWhite" />
          </TouchableOpacityBox>
          <TouchableOpacityBox
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
            onPress={() => onIncrement(item.id)}
            backgroundColor="grayBlack"
            borderRadius="s12"
            padding="s14">
            <Icon name="plus" color="grayWhite" />
          </TouchableOpacityBox>
          <TouchableOpacityBox
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
            onPress={() => onDecrement(item.id)}
            backgroundColor="grayBlack"
            borderRadius="s12"
            padding="s14">
            <Icon name="minus" color="grayWhite" />
          </TouchableOpacityBox>
        </Box>
      </Box>
    </Box>
  );
}
