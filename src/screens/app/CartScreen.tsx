import React, {useState} from 'react';

import {useDatabase} from '@database';
import {Item} from '@domain';
import {useFocusEffect} from '@react-navigation/native';

import {Box, Button, CardCart, Text} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  const [itemList, setItemList] = useState<Item[]>([]);

  const {getDBConnection, getItems, deleteItem, disconnect} = useDatabase();
  async function fethData() {
    const db = getDBConnection();
    let itemsDB = getItems(await db);
    const filteredItems = (await itemsDB).filter(item => item !== undefined);
    setItemList(prev => [...prev, ...filteredItems]);
    disconnect(await db);
  }
  useFocusEffect(
    React.useCallback(() => {
      fethData();
      setItemList([]);
      disconnect;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteItem]),
  );

  async function onDelete(id: string) {
    try {
      const db = await getDBConnection();
      deleteItem(await db, id);
      fethData();
      setItemList([]);
    } catch (error) {
      console.error(error);
    }
  }

  const renderCartItems = itemList.map(item => (
    <CardCart key={item.id} item={item} onDelete={onDelete} />
  ));

  return (
    <Screen scrollable>
      {itemList.length > 0 ? (
        <Box backgroundColor="grayWhite" marginHorizontal="s8">
          {renderCartItems}
          <Button
            mt="s12"
            backgroundColor="grayBlack"
            title="Solicitar orçamento gratuíto"
          />
        </Box>
      ) : (
        <Box mb="s12" alignItems="center" justifyContent="center">
          <Text preset="headingSmall" color="gray3">
            Nenhum item adicionado
          </Text>
        </Box>
      )}
    </Screen>
  );
}
