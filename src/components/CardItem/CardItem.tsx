import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';
import {useToast} from '@services';
import {useDatabase} from '@services';

import {Box, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  item: Item;
}

export function CardItem({item}: Props) {
  const {showToast} = useToast();
  const {getDBConnection, insertItem, disconnect} = useDatabase();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  async function addItem(item: Item) {
    const db = getDBConnection();

    let testeDB: Item = {
      id: item.id,
      category: item.category,
      quantity: item.quantity,
      name: item.name,
      brand: item.brand,
      specification: item.specification,
      unit: item.unit,
      image: item.image,
    };

    // deleteTable(await db);

    insertItem(await db, testeDB);

    disconnect(await db);

    showToast({
      message: 'Item adicionado',
      position: 'bottom',
      type: 'success',
    });
  }

  return (
    <TouchableOpacityBox
      onPress={() => addItem(item)}
      style={$shadowProps}
      padding="s8"
      mb="s16"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor="gray5"
      borderRadius="s12">
      <Box alignItems="center" flexGrow={1}>
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
      <Box width={80}>
        <Image
          style={{
            width: 80,
            height: 120,
          }}
          source={{uri: item.image}}
        />
      </Box>
    </TouchableOpacityBox>
  );
}
