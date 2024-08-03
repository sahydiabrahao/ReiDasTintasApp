import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useDatabase} from '@database';
import {Item} from '@domain';
import {useFocusEffect} from '@react-navigation/native';

import {Box, Button, CardCart, Text} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  const [itemList, setItemList] = useState<any>([]);

  const {getDBConnection, getItems} = useDatabase();

  useFocusEffect(
    React.useCallback(() => {
      async function fethData() {
        const db = getDBConnection();
        let itemsDB = getItems(await db);
        for (let i: number = 0; i < (await itemsDB).length; i++) {
          let item = (await itemsDB).find(ob => ob.id === i.toString());
          setItemList((prev: any) => [...prev, item]);
        }
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
    <Screen scrollable>
      {itemList.length > 0 ? (
        <Box flexGrow={1}>
          <FlatList
            data={itemList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{gap: 16}}
            scrollEnabled={false}
          />
          <Button
            backgroundColor="grayBlack"
            mt="s8"
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
