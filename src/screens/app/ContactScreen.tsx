import React, {useEffect, useState} from 'react';

import {Contact, contactService} from '@domain';

import {Box, CardContact, Text} from '@components';
import {Screen} from '@screens';

export function ContactScreen() {
  const [contactList, setcontactList] = useState<Contact[]>([]);

  useEffect(() => {
    contactService.getList().then(List => setcontactList(List));
  }, []);

  const renderContacts = contactList.map(contact => (
    <CardContact key={contact.phone} contact={contact} />
  ));

  return (
    <Screen flex={1}>
      <Box
        backgroundColor="grayWhite"
        alignItems="center"
        justifyContent="center">
        <Text preset="headingSmall" color="gray3">
          Selecione sua loja
        </Text>
      </Box>
      <Box flexGrow={1} justifyContent="space-around">
        {renderContacts}
      </Box>
    </Screen>
  );
}
