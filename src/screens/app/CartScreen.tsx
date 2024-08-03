import React, {useState} from 'react';

import {useDatabase} from '@database';
import {Item} from '@domain';
import {useFocusEffect} from '@react-navigation/native';

import {Box, Button, CardCart, Text} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  const [itemList, setItemList] = useState<Item[]>([]);

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

  const renderCartItems = itemList.map(item => <CardCart item={item} />);

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
