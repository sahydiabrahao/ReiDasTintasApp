import React, {useEffect, useState} from 'react';

import {useDatabase} from '@database';
import {Category, categoryListMock, categoryService, Item} from '@domain';

import {Box, Button, CardCategory, CardItem} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const [isRendered, setIsRendered] = useState(false);

  const handleFunctionCall = () => {
    setIsRendered(!isRendered);
  };

  const [categoryList, setcategoryList] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const {dbConnect, dbDisconnect, createTable} = useDatabase();

  async function dbInit() {
    const db = dbConnect();
    createTable(await db);
    dbDisconnect(await db);
  }

  useEffect(() => {
    categoryService.getCategories().then(List => setcategoryList(List));
    setcategoryList(categoryListMock);
    dbInit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSelectCategory(name: string) {
    categoryService.searchCategory(name).then(List => setItems(List));
    setIsRendered(!isRendered);
  }

  const renderCardCategory = categoryList.map(category => (
    <CardCategory
      key={category.name}
      category={category}
      onSelect={onSelectCategory}
    />
  ));

  const renderCardItems = items.map(item => (
    <CardItem key={item.id} item={item} />
  ));

  return (
    <Screen>
      {isRendered ? (
        <Box
          flexGrow={1}
          flexDirection="row"
          justifyContent="flex-start"
          flex={1}
          flexWrap="wrap"
          rowGap="s32"
          columnGap="s12">
          {renderCardCategory}
        </Box>
      ) : (
        <Box>
          <Button
            backgroundColor="bluePrimary"
            onPress={handleFunctionCall}
            title={'Inicio'}
            mb="s12"
          />
          <Box
            flexGrow={1}
            flexDirection="row"
            justifyContent="flex-start"
            flex={1}
            flexWrap="wrap"
            gap="s12">
            {renderCardItems}
          </Box>
        </Box>
      )}
    </Screen>
  );
}
