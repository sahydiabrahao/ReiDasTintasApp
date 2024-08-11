import React from 'react';

import {RootState} from '@redux';
import {useSelector} from 'react-redux';

import {Box, CardContact, Text} from '@components';
import {Screen} from '@screens';

export function ContactScreen() {
  const getContacts = useSelector((state: RootState) => state.contact.contacts);

  const renderContacts = getContacts.map(contact => (
    <CardContact key={contact.phone} contact={contact} />
  ));

  return (
    <Screen flex={1}>
      <Box
        mb="s12"
        backgroundColor="grayWhite"
        alignItems="center"
        justifyContent="center">
        <Text preset="headingSmall" color="gray3">
          Selecione sua loja
        </Text>
      </Box>
      <Box flexGrow={1}>{renderContacts}</Box>
    </Screen>
  );
}
