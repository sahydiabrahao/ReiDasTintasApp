import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';
import {pushItem} from '@redux';
import {useToast} from '@services';
import {useDispatch} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

interface Props {
  item: Item;
}

export function CardItem({item}: Props) {
  const {showToast} = useToast();

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  async function addItem(item: Item) {
    showToast({
      message: 'Item adicionado',
      position: 'bottom',
      type: 'success',
    });

    dispatch(pushItem(item));
  }

  return (
    <Box borderRadius="s12">
      <Box flexDirection="row">
        <TouchableOpacityBox
          onPress={() => addItem(item)}
          alignItems="center"
          justifyContent="center"
          backgroundColor="bluePrimary"
          padding="s10"
          style={{
            borderBottomLeftRadius: 12,
            borderTopLeftRadius: 12,
          }}>
          <Icon name="cart" color="grayWhite" />
        </TouchableOpacityBox>
        <Box flexDirection="row" flexGrow={1} justifyContent="flex-start">
          <Box borderColor="gray5" width={120} height={120}>
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
          </Box>
        </Box>
        <TouchableOpacityBox
          onPress={() => addItem(item)}
          alignItems="center"
          justifyContent="center"
          backgroundColor="bluePrimary"
          padding="s10"
          style={{
            borderBottomRightRadius: 12,
            borderTopRightRadius: 12,
          }}>
          <Icon name="cart" color="grayWhite" />
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}
