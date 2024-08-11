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

  useFocusEffect(
    React.useCallback(() => {
      setItemList([]);
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const fetchData = async () => {
    try {
      const db = await dbConnect();
      const itemsDB = await getItems(db);
      setItemList(itemsDB);
      await dbDisconnect(db);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  async function onDelete(id: string) {
    try {
      const db = await dbConnect();
      await deleteItem(db, id);
      await fetchData();
      setItemList([]);
      await dbDisconnect(db);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }
  async function onIncrement(id: string) {
    try {
      const db = await dbConnect();
      await increment(db, id);
      await fetchData();
      setItemList([]);
      await dbDisconnect(db);
    } catch (error) {
      console.error('Error incrementing item:', error);
    }
  }
  async function onDecrement(id: string) {
    try {
      const db = await dbConnect();
      await decrement(db, id);
      await fetchData();
      setItemList([]);
      await dbDisconnect(db);
    } catch (error) {
      console.error('Error decremeting item:', error);
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
