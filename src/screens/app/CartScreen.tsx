import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Item} from '@domain';
import {useDatabase} from '@services';

import {Box, Button, CardCart, MenuTop, Text} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  const [itemList, setitemList] = useState<any>([]);

  const {getDBConnection, getItems} = useDatabase();

  useEffect(() => {
    async function fethData() {
      const db = getDBConnection();

      let itemsDB = getItems(await db);

      console.log('itemsDB:', itemsDB);

      for (let i: number = 0; i < (await itemsDB).length; i++) {
        let item = (await itemsDB).find(ob => ob.id === i.toString());
        console.log('item:', item);
        setitemList((prev: any) => [...prev, item]);
      }
      console.log('itemList:', itemList);
    }

    fethData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to fetch data only once

  function renderItem({item}: ListRenderItemInfo<Item>) {
    return <CardCart item={item} />;
  }

  return (
    <Screen>
      <MenuTop />
      <Button
        backgroundColor="grayBlack"
        mb="s16"
        title="Solicitar orçamento gratuíto"
      />
      {itemList.lengh !== 0 ? (
        <FlatList
          data={itemList}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Box>
          <Text color="grayBlack">Nenhum item adicionado</Text>
        </Box>
      )}
    </Screen>
  );
}
