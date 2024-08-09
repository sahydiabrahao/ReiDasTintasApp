import React from 'react';
import {Image} from 'react-native';

import {useDatabase} from '@database';
import {Item} from '@domain';
import {useToast} from '@services';

import {Box, Text, TouchableOpacityBox} from '@components';

interface Props {
  item: Item;
}

export function CardItem({item}: Props) {
  const {showToast} = useToast();
  const {dbConnect, insertItem, dbDisconnect} = useDatabase();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  async function addItem(item: Item) {
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

    const db = dbConnect();
    insertItem(await db, testeDB);
    dbDisconnect(await db);

    showToast({
      message: 'Item adicionado',
      position: 'bottom',
      type: 'success',
    });
  }

  return (
    <TouchableOpacityBox
      onPress={() => addItem(item)}
      padding="s2"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor="gray5"
      borderColor="gray4"
      borderBottomWidth={1}>
      <Box alignItems="center" flexGrow={1}>
        <Text bold preset="headingSmall">
          {item.name}
        </Text>
        <Text preset="paragraphMedium">{item.brand}</Text>
        <Text preset="paragraphMedium">{item.specification}</Text>
        <Text preset="paragraphMedium">{item.unit}</Text>
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
