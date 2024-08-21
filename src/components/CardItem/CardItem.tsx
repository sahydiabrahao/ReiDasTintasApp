import React, {useEffect} from 'react';
import {Image} from 'react-native';

import {saveItemIntoDB} from '@database';
import {Item} from '@domain';
import {pushItem, RootState} from '@redux';
import {useToast} from '@services';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';
interface Props {
  item: Item;
}

export function CardItem({item}: Props) {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.item.items);

  useEffect(() => {
    saveItemIntoDB(items);
  }, [items]);

  const {showToast} = useToast();

  async function selectItem(itemSelected: Item) {
    showToast({
      message: 'Item adicionado',
      position: 'bottom',
      type: 'success',
    });

    dispatch(pushItem(itemSelected));
  }

  return (
    <Box borderRadius="s8">
      <Box flexDirection="row">
        <TouchableOpacityBox
          onPress={() => selectItem(item)}
          alignItems="center"
          justifyContent="center"
          backgroundColor="bluePrimary"
          padding="s10"
          style={{
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
          }}>
          <Icon name="cart" color="grayWhite" />
        </TouchableOpacityBox>
        <Box
          borderWidth={1}
          borderColor="gray5"
          flexDirection="row"
          flexGrow={1}
          justifyContent="flex-start">
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
          onPress={() => selectItem(item)}
          alignItems="center"
          justifyContent="center"
          backgroundColor="bluePrimary"
          padding="s10"
          style={{
            borderBottomRightRadius: 8,
            borderTopRightRadius: 8,
          }}>
          <Icon name="cart" color="grayWhite" />
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}
