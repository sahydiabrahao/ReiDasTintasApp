import React, {useMemo} from 'react';

import {RootState} from '@redux';
import {useSelector} from 'react-redux';

import {Box, CardContact, Text} from '@components';
import {Screen} from '@screens';

export function ContactScreen() {
  const contacts = useSelector((state: RootState) => state.contact.contacts);

  const renderContacts = useMemo(
    () =>
      contacts.map(contact => (
        <CardContact key={contact.phone} contact={contact} />
      )),
    [contacts],
  );

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
