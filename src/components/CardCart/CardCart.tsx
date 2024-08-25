import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';
import {openModalCart, setItemId} from '@redux';
import {useDispatch} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';
interface Props {
  item: Item;
  onDelete: (id: string) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

export function CardCart({item, onDelete, onIncrement, onDecrement}: Props) {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openModalCart());
    dispatch(setItemId(item.id));
  };

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
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
          }}>
          <Icon name="delete" color="grayWhite" />
        </TouchableOpacityBox>
        <TouchableOpacityBox
          onPress={handleOpen}
          flexDirection="row"
          flexGrow={1}
          justifyContent="flex-start"
          borderColor="gray5"
          borderWidth={1}>
          <Box
            width={120}
            height={120}
            style={{
              borderRadius: 8,
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
            {item.color && <Text preset="paragraphCaption">{item.color}</Text>}

            <Text preset="paragraphCaption">Quantidade: {item.quantity} </Text>
          </Box>
        </TouchableOpacityBox>
        <Box alignItems="center" justifyContent="center">
          <TouchableOpacityBox
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
            onPress={() => onIncrement(item.id)}
            backgroundColor="bluePrimary"
            padding="s10"
            style={{
              borderTopRightRadius: 8,
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
              borderBottomRightRadius: 8,
            }}>
            <Icon name="minus" color="grayWhite" />
          </TouchableOpacityBox>
        </Box>
      </Box>
    </Box>
  );
}
