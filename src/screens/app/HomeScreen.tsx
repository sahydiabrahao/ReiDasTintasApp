import React, {useEffect} from 'react';

import {connect, create, fetchAllContacts} from '@database';
import {Contact} from '@domain';
import {RootState, setContact} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, CardCategory, CardItem} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const dispatch = useDispatch();

  const contacts = useSelector((state: RootState) => state.contact.contact);

  async function initDatabase() {
    try {
      const db = await connect();
      await create(db);
    } catch (error) {
      console.error(error);
    }
  }

  async function syncContactWithDatabase() {
    try {
      const db = await connect();
      const [firstContact] = await fetchAllContacts(db); // Desestruturação direta para obter o primeiro contato

      if (!firstContact) {
        console.warn('No contact found in the database.');
        return;
      }

      if (firstContact.phone === contacts.phone) {
        console.log('Contact already exists:', firstContact);
      } else {
        const {address, city, phone, district} = firstContact;

        const newContact: Contact = {
          address,
          city,
          phone,
          district,
        };

        dispatch(setContact(newContact));
      }
    } catch (error) {
      console.error('Error updating the contact in the database:', error);
    }
  }

  useEffect(() => {
    initDatabase();
    syncContactWithDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
