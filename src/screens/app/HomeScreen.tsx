import React, {useEffect} from 'react';

import {
  connectToDatabase,
  createTable,
  disconnectFromDatabase,
  dbUpdateColor,
  dbUpdateContact,
  dbUpdateItem,
} from '@database';
import {offerMock} from '@domain';
import {
  RootState,
  chooseContact,
  updateFavoriteColors,
  updateItems,
} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, CardCategory, CardItem, GridOffer, Text} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const dispatch = useDispatch();

  const {
    contact: {contact: contacts},
    category: {categoryName: selectedCategory, categories},
    item: {filteredItems},
  } = useSelector((state: RootState) => state);

  const syncDatabase = async () => {
    const db = await connectToDatabase();
    try {
      await createTable(db);
      const updatedContact = await dbUpdateContact(db, contacts);
      if (updatedContact) {
        dispatch(chooseContact(updatedContact));
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
      await disconnectFromDatabase(db);
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
      {selectedCategory === '' ? (
        <Box
          flexGrow={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          flex={1}
          rowGap="s12">
          <GridOffer offers={offerMock} />
          <Text preset="paragraphCaption" color="grayBlack">
            Categorias
          </Text>
          {renderCategories()}
        </Box>
      ) : (
        renderItems()
      )}
    </Screen>
  );
}
