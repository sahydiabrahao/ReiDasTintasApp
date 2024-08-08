import React, {useEffect, useState} from 'react';

import {Category, categoryListMock, categoryService} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, CardCategory} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const [categoryList, setcategoryList] =
    useState<Category[]>(categoryListMock);
  const navigation = useNavigation();

  useEffect(() => {
    categoryService.getList().then(List => setcategoryList(List));
  }, []);

  function onSelect(name: string) {
    navigation.navigate('CategoryScreen', {name});

    return name;
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
