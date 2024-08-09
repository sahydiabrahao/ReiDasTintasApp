import React, {useEffect, useState} from 'react';

import {useDatabase} from '@database';
import {Category, categoryListMock, categoryService} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, CardCategory} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const [categoryList, setcategoryList] =
    useState<Category[]>(categoryListMock);
  const navigation = useNavigation();

  const {dbConnect, dbDisconnect, createTable} = useDatabase();

  useEffect(() => {
    categoryService.getList().then(List => setcategoryList(List));

    onAppLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onAppLoad() {
    const db = dbConnect();
    createTable(await db);
    dbDisconnect(await db);
  }

  function onSelect() {
    navigation.navigate('ContactScreen');
  }

  const renderCardItems = categoryList.map(category => (
    <CardCategory category={category} onSelect={onSelect} />
  ));

  return (
    <Screen>
      <Box flexGrow={1}>{renderCardItems}</Box>
    </Screen>
  );
}
