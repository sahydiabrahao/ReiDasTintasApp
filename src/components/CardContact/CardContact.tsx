import React from 'react';

import {Contact} from '@domain';
import {useDatabase, useToast} from '@services';

import {Box, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  contact: Contact;
}

export function CardContact({contact}: Props) {
  const {getDBConnection, insertContact, getContacts} = useDatabase();
  const {showToast} = useToast();

  async function selectContact({}: Contact) {
    const db = getDBConnection();

    let testeDB: Contact = {
      city: contact.city,
      address: contact.address,
      district: contact.district,
      phone: contact.phone,
    };

    // deleteTable(await db);

    insertContact(await db, testeDB);

    getContacts(await db);

    showToast({
      message: 'Ótima escolha! ',
      position: 'bottom',
      type: 'success',
    });
  }

  return (
    <TouchableOpacityBox
      mb="s32"
      onPress={() => [selectContact(contact)]}
      style={$shadowProps}
      padding="s8"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      borderRadius="s12"
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
