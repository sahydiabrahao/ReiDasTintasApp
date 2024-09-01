import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';
import {assignItemId, showModalCart} from '@redux';
import {useDispatch} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';
interface Props {
  item: Item;
  handleDeleteItem: (id: string) => void;
  handleIncrementItem: (id: string) => void;
  handleDecrementItem: (id: string) => void;
}

export function CardCart({
  item,
  handleDeleteItem,
  handleIncrementItem,
  handleDecrementItem,
}: Props) {
  const dispatch = useDispatch();

  const handleOpenModalCart = () => {
    dispatch(showModalCart());
    dispatch(assignItemId(item.id));
  };

  return (
    <Box
      mb="s12"
      borderRadius="s4"
      style={$shadowProps}
      flexGrow={1}
      flexDirection="row"
      backgroundColor="gray5">
      <TouchableOpacityBox
        onPress={() => handleDeleteItem(item.id)}
        alignItems="center"
        justifyContent="center"
        backgroundColor="grayBlack"
        padding="s10"
        borderTopLeftRadius="s4"
        borderBottomLeftRadius="s4">
        <Icon name="delete" color="grayWhite" />
      </TouchableOpacityBox>
      <TouchableOpacityBox
        onPress={handleOpenModalCart}
        flexDirection="row"
        flexGrow={1}
        justifyContent="flex-start">
        <Box width={120} height={120}>
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
          <Text preset="paragraphCaption">{item.specification}</Text>
          <Text preset="paragraphCaption">{item.brand}</Text>
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
          onPress={() => handleIncrementItem(item.id)}
          backgroundColor="grayBlack"
          borderTopRightRadius="s4"
          padding="s10">
          <Icon name="plus" color="grayWhite" />
        </TouchableOpacityBox>
        <TouchableOpacityBox
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
          onPress={() => handleDecrementItem(item.id)}
          backgroundColor="grayBlack"
          padding="s10"
          borderBottomRightRadius="s4">
          <Icon name="minus" color="grayWhite" />
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}
