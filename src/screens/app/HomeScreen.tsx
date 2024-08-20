import React, {useEffect} from 'react';

import {
  initDatabase,
  syncContactWithDatabase,
  syncItemWithDatabase,
} from '@database';
import {RootState, setContact, setItems} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, CardCategory, CardItem} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const dispatch = useDispatch();

  async function syncDatabase() {
    const updatedContact: any = await syncContactWithDatabase(contacts);
    if (updatedContact) {
      dispatch(setContact(updatedContact));
    }
    const updatedItem: any = await syncItemWithDatabase();
    if (updatedItem) {
      dispatch(setItems(updatedItem));
    }
  }

  useEffect(() => {
    initDatabase();
    syncDatabase();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contacts = useSelector((state: RootState) => state.contact.contact);

  const categoriesList = useSelector(
    (state: RootState) => state.category.categories,
  );

  const selectedCategoryName = useSelector(
    (state: RootState) => state.category.selectedCategory,
  );

  const filterItemsByCategoryList = useSelector(
    (state: RootState) => state.item.filteredItems,
  );

  const renderCardCategory = categoriesList.map(category => (
    <CardCategory key={category.name} category={category} />
  ));

  const renderCardItems = filterItemsByCategoryList.map(item => (
    <CardItem key={item.id} item={item} />
  ));

  return (
    <Screen scrollable>
      {selectedCategoryName === 'Init' ? (
        <Box
          flexGrow={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          flex={1}
          columnGap="s12">
          {renderCardCategory}
        </Box>
      ) : (
        <Box>
          <Box flexGrow={1} justifyContent="flex-start" flex={1} gap="s12">
            {renderCardItems}
          </Box>
        </Box>
      )}
    </Screen>
  );
}
