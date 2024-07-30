import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';
import {database, useToast} from '@services';
import {useDatabase} from '@services';

import {Box, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  item: Item;
}

export function CardItem({item}: Props) {
  const {showToast} = useToast();
  const {getDBConnection, insertItems, getItems} = useDatabase();
  async function addItemToCart() {
    const db = getDBConnection();

    let testeDB: database = {
      storeID: '3',
      storePhone: '6530161291',
      category: 'Parede',
      name: 'Toque de Luz',
      brand: 'Suvinil',
      specification: 'Semibrilho',
      quantity: 18,
      unit: 'Litros',
    };

    insertItems(await db, testeDB);

    getItems(await db);

    showToast({
      message: 'Item adicionado',
      position: 'bottom',
      type: 'success',
    });
  }

  return (
    <TouchableOpacityBox
      onPress={addItemToCart}
      style={$shadowProps}
      padding="s8"
      mb="s16"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor="gray5"
      borderRadius="s12">
      <Box>
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
      <Image
        style={{
          width: 80,
          height: 120,
        }}
        source={{uri: item.image}}
      />
    </TouchableOpacityBox>
  );
}
