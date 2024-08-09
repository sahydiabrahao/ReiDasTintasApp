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

  const renderCardItems = categoryList.map(category => (
    <CardCategory
      key={category.name}
      category={category}
      onSelect={onSelectCategory}
    />
  ));

  const renderItems = items.map(item => <CardItem key={item.id} item={item} />);

  return (
    <Screen scrollable>
      {isRendered ? (
        <Box flexGrow={1}>{renderCardItems}</Box>
      ) : (
        <Box flexGrow={1}>
          <Button onPress={handleFunctionCall} title={'Voltar'} />
          {renderItems}
        </Box>
      )}
    </Screen>
  );
}
