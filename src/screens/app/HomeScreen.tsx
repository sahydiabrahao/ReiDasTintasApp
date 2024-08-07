import React, {useCallback, useEffect, useState} from 'react';

import {useDatabase} from '@database';
import {Item, itemService} from '@domain';

import {Box, CardItem} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const [itemList, setitemList] = useState<Item[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {getDBConnection, createTable, deleteTable} = useDatabase();

  useEffect(() => {
    itemService.getList().then(List => setitemList(List));
  }, []);

  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();
      await createTable(db);

      // await deleteTable(db);
    } catch (error) {
      console.error(error);
    }
  }, [createTable, getDBConnection]);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  const renderCardItems = itemList.map(item => (
    <CardItem key={item.id} item={item} />
  ));

  return (
    <Screen scrollable>
      <Box flexGrow={1}>{renderCardItems}</Box>
    </Screen>
  );
}
