import React, {useState} from 'react';

import {useDatabase} from '@database';
import {Item} from '@domain';
import {useFocusEffect} from '@react-navigation/native';

import {Box, Button, CardCart, Text} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  const [itemList, setItemList] = useState<Item[]>([]);

  const {dbConnect, getItems, deleteItem, increment, decrement, dbDisconnect} =
    useDatabase();
  async function fethData() {
    const db = dbConnect();
    let itemsDB = getItems(await db);
    const filteredItems = (await itemsDB).filter(item => item !== undefined);
    setItemList(prev => [...prev, ...filteredItems]);
    dbDisconnect(await db);
  }
  useFocusEffect(
    React.useCallback(() => {
      fethData();
      setItemList([]);
      dbDisconnect;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteItem]),
  );

  async function onDelete(id: string) {
    try {
      const db = await dbConnect();
      deleteItem(await db, id);
      fethData();
      setItemList([]);
    } catch (error) {
      console.error(error);
    }
  }

  async function onIncrement(id: string) {
    try {
      const db = await dbConnect();
      increment(await db, id);
      fethData();
      setItemList([]);
    } catch (error) {
      console.error(error);
    }
  }
  async function onDecrement(id: string) {
    try {
      const db = await dbConnect();
      decrement(await db, id);
      fethData();
      setItemList([]);
    } catch (error) {
      console.error(error);
    }
  }

  const renderCartItems = itemList.map(item => (
    <CardCart
      key={item.id}
      item={item}
      onDelete={onDelete}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  ));

  return (
    <Screen scrollable>
      {itemList.length > 0 ? (
        <Box backgroundColor="grayWhite">
          <Button
            mb="s12"
            backgroundColor="bluePrimary"
            title="Solicitar orçamento gratuíto"
            preset="primary"
          />
          {renderCartItems}
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
