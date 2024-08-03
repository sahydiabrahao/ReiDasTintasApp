import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Contact, contactService} from '@domain';

import {Box, CardContact, Text} from '@components';
import {Screen} from '@screens';

export function ContactScreen() {
  const [contactList, setcontactList] = useState<Contact[]>([]);

  useEffect(() => {
    contactService.getList().then(List => setcontactList(List));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Contact>) {
    return <CardContact contact={item} />;
  }

  return (
    <Screen>
      <Box flexGrow={1}>
        <Box mb="s12" alignItems="center" justifyContent="center">
          <Text preset="headingSmall" color="gray3">
            Selecione sua loja
          </Text>
        </Box>
        <FlatList
          data={contactList}
          keyExtractor={item => item.phone}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{gap: 16}}
        />
      </Box>
    </Screen>
  );
}
