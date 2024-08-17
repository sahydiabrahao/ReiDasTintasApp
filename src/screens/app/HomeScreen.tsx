import React, {useEffect} from 'react';

import {
  connect,
  create,
  disconnect,
  fetchContacts,
  insertOrUpdateContact,
} from '@database';
import {Contact} from '@domain';
import {RootState} from '@redux';
import {useSelector} from 'react-redux';

import {Box, Button, CardCategory, CardItem} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  async function connectToDatabase() {
    const db = await connect();
    create(db);
    disconnect(db);
  }

  useEffect(() => {
    connectToDatabase();
  }, []);

  async function addContact() {
    const db = await connect();
    let data: Contact = {
      city: 'test',
      district: 'test',
      phone: 'test',
      address: 'test',
    };

    insertOrUpdateContact(db, data);
    disconnect(db);
  }

  fetchContact;

  async function fetchContact() {
    try {
      const db = await connect();
      if (db) {
        console.log('Conexão bem-sucedida:', db);

        let data = fetchContacts(await db);
        console.log('Dados:', data);
      } else {
        console.error('Erro ao conectar ao banco de dados');
      }
    } catch (error) {
      console.error('Erro na conexão ao banco de dados:', error);
    }
  }

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
          <Button onPress={addContact} preset="primary" title="AddContact" />
          <Button
            onPress={fetchContact}
            preset="primary"
            title="FetchContact"
          />
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
