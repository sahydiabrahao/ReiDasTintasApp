import React, {useCallback, useEffect, useState} from 'react';

import {useDatabase} from '@database';
import {Item, itemService} from '@domain';

import {Box, CardItem, Icon, TextInput} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const [itemList, setitemList] = useState<Item[]>([]);
  const {getDBConnection, createTable} = useDatabase();

  useEffect(() => {
    itemService.getList().then(List => setitemList(List));
  }, []);

  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();
      await createTable(db);
    } catch (error) {
      console.error(error);
    }
  }, [createTable, getDBConnection]);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  const renderCardItems = itemList.map(item => <CardItem item={item} />);

  return (
    <Screen scrollable>
      <Box backgroundColor="grayWhite" mb="s12">
        <TextInput RightComponent={<Icon name="search" color="gray3" />} />
      </Box>
      <Box flexGrow={1}>{renderCardItems}</Box>
    </Screen>
  );
}
