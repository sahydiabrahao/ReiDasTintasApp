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
    <Box mb="s8">
      <Box flexDirection="row">
        <TouchableOpacityBox
          onPress={() => onDelete(item.id)}
          alignItems="center"
          justifyContent="center"
          backgroundColor="bluePrimary"
          padding="s10"
          style={{
            borderBottomLeftRadius: 12,
            borderTopLeftRadius: 12,
          }}>
          <Icon name="delete" color="grayWhite" />
        </TouchableOpacityBox>
        <Box
          flexDirection="row"
          flexGrow={1}
          justifyContent="flex-start"
          borderColor="gray5"
          borderWidth={1}>
          <Box
            width={120}
            height={120}
            style={{
              borderRadius: 12,
            }}>
            <Image
              style={{
                flex: 1,
                objectFit: 'contain',
              }}
              source={{uri: item.image}}
            />
          </Box>
          <Box flexGrow={1} alignItems="center" justifyContent="center">
            <Text bold preset="paragraphMedium">
              {item.name}
            </Text>
            <Text preset="paragraphCaption">{item.brand}</Text>
            <Text preset="paragraphCaption">{item.specification}</Text>
            <Text preset="paragraphCaption">{item.unit}</Text>
            <Text preset="paragraphCaption">Quantidade: {item.quantity} </Text>
          </Box>
        </Box>
        <Box alignItems="center" justifyContent="center">
          <TouchableOpacityBox
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
            onPress={() => onIncrement(item.id)}
            backgroundColor="bluePrimary"
            padding="s10"
            style={{
              borderTopRightRadius: 12,
            }}>
            <Icon name="plus" color="grayWhite" />
          </TouchableOpacityBox>
          <TouchableOpacityBox
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
            onPress={() => onDecrement(item.id)}
            backgroundColor="bluePrimary"
            padding="s10"
            style={{
              borderBottomRightRadius: 12,
            }}>
            <Icon name="minus" color="grayWhite" />
          </TouchableOpacityBox>
        </Box>
      </Box>
    </Box>
  );
}
