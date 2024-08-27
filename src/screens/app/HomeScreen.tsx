import React, {useEffect} from 'react';

import {
  initDatabase,
  syncColorWithDatabase,
  syncContactWithDatabase,
  syncItemWithDatabase,
} from '@database';
import {RootState, setContact, setFavoriteColors, setItems} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, CardCategory, CardItem, Text} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const dispatch = useDispatch();

  // Desestruturação para melhor legibilidade
  const {
    contact: {contact: contacts},
    category: {selectedCategoryTitle, selectedCategory, categories},
    item: {filteredItems},
  } = useSelector((state: RootState) => state);

  const syncDatabase = async () => {
    const updatedContact = await syncContactWithDatabase(contacts);
    if (updatedContact) {
      dispatch(setContact(updatedContact));
    }

    const updatedItem = await syncItemWithDatabase();
    if (updatedItem) {
      dispatch(setItems(updatedItem));
    }

    const updatedColor: any = await syncColorWithDatabase();
    if (updatedColor) {
      dispatch(setFavoriteColors(updatedColor));
    }
  };

  useEffect(() => {
    initDatabase();
    syncDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCategories = () =>
    categories.map(category => (
      <CardCategory key={category.name} category={category} />
    ));

  const renderItems = () =>
    filteredItems.map(item => <CardItem key={item.id} item={item} />);

  return (
    <Screen scrollable>
      {selectedCategory === 'Init' ? (
        <Box
          flexGrow={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          flex={1}
          columnGap="s12">
          {renderCategories()}
        </Box>
      ) : (
        <Box>
          <Box mb="s12" alignItems="center" justifyContent="center">
            <Text preset="headingSmall" color="gray3">
              {selectedCategoryTitle}
            </Text>
          </Box>
          <Box flexGrow={1} justifyContent="flex-start" flex={1} gap="s12">
            {renderItems()}
          </Box>
        </Box>
      )}
    </Screen>
  );
}
