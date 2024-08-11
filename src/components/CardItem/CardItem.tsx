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
      padding="s8"
      justifyContent="space-evenly"
      alignItems="center"
      borderColor="gray4"
      width={'48%'}
      borderRadius="s12"
      borderWidth={1}>
      <Box
        width={120}
        height={120}
        backgroundColor="gray5"
        style={{
          borderRadius: 12,
        }}>
        <Image
          style={{
            flex: 1,
            objectFit: 'cover',
          }}
          source={{uri: item.image}}
        />
      </Box>
      <Box alignItems="flex-start" flexGrow={1}>
        <Text bold preset="paragraphMedium">
          {item.name}
        </Text>
        <Box flexDirection="row">
          <Text preset="paragraphCaption" mr="s4">
            {item.brand},
          </Text>
          <Text preset="paragraphCaption" mr="s4">
            {item.specification},
          </Text>
          <Text preset="paragraphCaption">{item.unit}</Text>
        </Box>
      </Box>
    </TouchableOpacityBox>
  );
}
