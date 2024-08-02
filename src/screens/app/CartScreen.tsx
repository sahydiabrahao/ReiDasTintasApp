import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useDatabase} from '@database';
import {Item} from '@domain';
import {useFocusEffect} from '@react-navigation/native';

import {Box, Button, CardCart, MenuTop, Text} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  const [itemList, setItemList] = useState<any>([]);

  const {getDBConnection, getItems} = useDatabase();

  useFocusEffect(
    React.useCallback(() => {
      async function fethData() {
        const db = getDBConnection();

        let itemsDB = getItems(await db);

        console.log('itemsDB:', itemsDB);

        for (let i: number = 0; i < (await itemsDB).length; i++) {
          let item = (await itemsDB).find(ob => ob.id === i.toString());
          console.log('item:', item);
          setItemList((prev: any) => [...prev, item]);
        }
        console.log('itemList:', itemList);
      }

      fethData();
      setItemList([]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  function renderItem({item}: ListRenderItemInfo<Item>) {
    return <CardCart item={item} />;
  }

  return (
    <Screen>
      <Box>
        <MenuTop />
        <Button
          backgroundColor="grayBlack"
          mb="s8"
          title="Solicitar orçamento gratuíto"
        />
      </Box>

      {itemList.lengh !== 0 ? (
        <Box flexGrow={1} marginBottom="s100">
          <FlatList
            data={itemList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      ) : (
        <Box flexGrow={1} marginBottom="s100">
          <Text color="grayBlack">Nenhum item adicionado</Text>
        </Box>
      )}
    </Screen>
  );
}
