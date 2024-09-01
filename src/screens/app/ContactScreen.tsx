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
      <Box>
        <Text preset="paragraphCaption" color="grayBlack" mb="s12">
          Contatos
        </Text>
        {renderContacts}
      </Box>
    </Screen>
  );
}
