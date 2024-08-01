import React from 'react';

import {Contact} from '@domain';
import {useDatabase, useToast} from '@services';

import {Box, Text, TouchableOpacityBox} from '@components';

interface Props {
  contact: Contact;
}

export function CardContact({contact}: Props) {
  const {getDBConnection, insertContact, getContacts, disconnect} =
    useDatabase();
  const {showToast} = useToast();

  async function selectContact({}: Contact) {
    let testeDB: Contact = {
      city: contact.city,
      address: contact.address,
      district: contact.district,
      phone: contact.phone,
    };

    const db = getDBConnection();
    insertContact(await db, testeDB);
    getContacts(await db);
    disconnect(await db);

    showToast({
      message: 'Ótima escolha! ',
      position: 'bottom',
      type: 'success',
    });
  }

  return (
    <TouchableOpacityBox
      onPress={() => [selectContact(contact)]}
      padding="s2"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      borderColor="gray4"
      borderBottomWidth={1}
      backgroundColor="gray5">
      <Box justifyContent="center" alignItems="center">
        <Text color="grayBlack" mb="s8" bold preset="headingMedium">
          {contact.city}
        </Text>
        <Text color="grayBlack" mb="s8" preset="headingSmall">
          {contact.district}
        </Text>
        <Text color="grayBlack" mb="s8" preset="headingSmall">
          {contact.address}
        </Text>
        <Text color="grayBlack" mb="s8" bold preset="headingSmall">
          {contact.phone}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
