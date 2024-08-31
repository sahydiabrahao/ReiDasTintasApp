import React, {useEffect} from 'react';

import {
  connectToDatabase,
  createTable,
  disconnectFromDatabase,
  dbUpdateColor,
  dbUpdateContact,
  dbUpdateItem,
} from '@database';
import {
  RootState,
  updateContact,
  updateFavoriteColors,
  updateItems,
} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, CardCategory, CardItem, Text} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const dispatch = useDispatch();

  const {
    contact: {contact: contacts},
    category: {selectedCategoryTitle, selectedCategory, categories},
    item: {filteredItems},
  } = useSelector((state: RootState) => state);

  const syncDatabase = async () => {
    const db = await connectToDatabase();
    try {
      await createTable(db);
      const updatedContact = await dbUpdateContact(db, contacts);
      if (updatedContact) {
        dispatch(updateContact(updatedContact));
      }

      const updatedItem = await dbUpdateItem(db);
      if (updatedItem) {
        dispatch(updateItems(updatedItem));
      }

      const updatedColor: any = await dbUpdateColor(db);
      if (updatedColor) {
        dispatch(updateFavoriteColors(updatedColor));
      }
    } finally {
      disconnectFromDatabase(db);
    }
  };

  useEffect(() => {
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
