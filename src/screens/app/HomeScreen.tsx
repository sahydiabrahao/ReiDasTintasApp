import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {
  createTable,
  Desconectar,
  getDBConnection,
  getItems,
  insertItems,
  ItemDB,
} from '@database';
import {Item, itemService} from '@domain';

import {CardItem, MenuTop} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const [itemList, setitemList] = useState<Item[]>([]);

  useEffect(() => {
    itemService.getList().then(List => setitemList(List));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Item>) {
    return <CardItem item={item} />;
  }
  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();

      // await db.executeSql('DROP TABLE ReiDasTintas');

      await createTable(db);

      let item: ItemDB = {
        name: 'joao',
        age: '12',
      };
      await insertItems(db, item);

      await getItems(db);

      await Desconectar(db);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  return (
    <Screen>
      <MenuTop />
      {/* <TextInput
        boxProps={{marginBottom: 's20'}}
        RightComponent={<Icon name="search" color="gray3" />}
        /> */}
      <FlatList
        data={itemList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
