import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useDatabase} from '@database';
import {Item, itemService} from '@domain';

import {Box, CardItem, MenuTop} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const [itemList, setitemList] = useState<Item[]>([]);

  useEffect(() => {
    itemService.getList().then(List => setitemList(List));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Item>) {
    return <CardItem item={item} />;
  }

  const {getDBConnection, createTable} = useDatabase();

  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();

      // await db.executeSql('DROP TABLE ReiDasTintas');

      await createTable(db);

      // let item: ItemDB = {
      //   name: 'joao',
      //   age: '12',
      // };
      // await insertItems(db, item);

      // await getItems(db);
    } catch (error) {
      console.error(error);
    }
  }, [createTable, getDBConnection]);

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
      <Box flexGrow={1} marginBottom="s60">
        <FlatList
          data={itemList}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Screen>
  );
}
