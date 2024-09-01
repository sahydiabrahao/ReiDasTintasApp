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
  chooseContact,
  RootState,
  updateFavoriteColors,
  updateItems,
} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, CardCategory, CardItem, GridOffer, Text} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const dispatch = useDispatch();

  const contacts = useSelector((state: RootState) => state).contact.contact;
  const selectedCategory = useSelector((state: RootState) => state).category
    .categoryName;
  const categories = useSelector((state: RootState) => state).category
    .categories;
  const filteredItems = useSelector((state: RootState) => state).item
    .filteredItems;

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
