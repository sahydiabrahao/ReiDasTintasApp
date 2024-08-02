import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Contact, contactService} from '@domain';

import {Box, Text, CardContact, MenuTop} from '@components';
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
      <MenuTop />
      <Box mb="s16" alignItems="center" justifyContent="center">
        <Text preset="headingSmall" color="gray3">
          Selecione sua loja
        </Text>
      </Box>
      <Box flexGrow={1} marginBottom="s60">
        <FlatList
          data={contactList}
          keyExtractor={item => item.phone}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Screen>
  );
}
