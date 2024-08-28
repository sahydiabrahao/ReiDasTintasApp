import React from 'react';
import {Image} from 'react-native';

import {connectToDatabase, disconnectFromDatabase, insertItem} from '@database';
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
  const {showToast} = useToast();

  const syncDatabase = async (itemsToSync: Item[]) => {
    const db = await connectToDatabase();
    try {
      for (const itemIndex of itemsToSync) {
        await insertItem(db, itemIndex);
      }
    } finally {
      disconnectFromDatabase(db);
    }
  };

  async function handleInsertItem(itemSelected: Item) {
    dispatch(pushItem(itemSelected));

    syncDatabase(items);

    showToast({
      message: 'Item adicionado',
      position: 'bottom',
      type: 'success',
    });
  }

  return (
    <Box borderRadius="s8">
      <Box flexDirection="row">
        <TouchableOpacityBox
          onPress={() => handleInsertItem(item)}
          alignItems="center"
          justifyContent="center"
          backgroundColor="bluePrimary"
          padding="s10"
          borderTopLeftRadius="s8">
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
            <Text preset="paragraphCaption">{item.specification}</Text>
            <Text preset="paragraphCaption">{item.brand}</Text>
            <Text preset="paragraphCaption">{item.unit}</Text>
          </Box>
        </Box>
        <TouchableOpacityBox
          onPress={() => handleInsertItem(item)}
          alignItems="center"
          justifyContent="center"
          backgroundColor="bluePrimary"
          padding="s10"
          borderBottomRightRadius="s8">
          <Icon name="cart" color="grayWhite" />
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}
