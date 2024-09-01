import React from 'react';
import {Image} from 'react-native';

import {
  connectToDatabase,
  disconnectFromDatabase,
  dbInsertItem,
} from '@database';
import {Item} from '@domain';
import {addItem, RootState} from '@redux';
import {useToast} from '@services';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';
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
        await dbInsertItem(db, itemIndex);
      }
    } finally {
      disconnectFromDatabase(db);
    }
  };

  async function handleAddItem(itemSelected: Item) {
    dispatch(addItem(itemSelected));

    syncDatabase(items);

    showToast({
      message: 'Item adicionado',
      position: 'bottom',
      type: 'success',
    });
  }

  return (
    <Box
      mb="s8"
      borderRadius="s4"
      style={$shadowProps}
      flexGrow={1}
      flexDirection="row"
      backgroundColor="gray5">
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
      </Box>
      <TouchableOpacityBox
        borderRadius="s4"
        onPress={() => handleAddItem(item)}
        alignItems="center"
        justifyContent="center"
        backgroundColor="bluePrimary"
        padding="s10">
        <Icon name="cart" color="grayWhite" />
      </TouchableOpacityBox>
    </Box>
  );
}
