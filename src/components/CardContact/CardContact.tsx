import React, {useEffect} from 'react';

import {
  connectToDatabase,
  disconnectFromDatabase,
  dbInsertContact,
} from '@database';
import {Contact} from '@domain';
import {RootState, chooseContact} from '@redux';
import {useToast} from '@services';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  contact: Contact;
}

export function CardContact({contact}: Props) {
  const contacts = useSelector((state: RootState) => state.contact.contact);
  const dispatch = useDispatch();
  const {showToast} = useToast();

  async function syncDatabase() {
    const db = await connectToDatabase();
    try {
      await dbInsertContact(db, contacts);
    } finally {
      await disconnectFromDatabase(db);
    }
  }

  useEffect(() => {
    syncDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts]);

  function handleUpdateContact(contactSelected: Contact) {
    dispatch(chooseContact(contactSelected));

    showToast({
      message: 'Ótima escolha!',
      position: 'bottom',
      type: 'success',
    });
  }

  return (
    <TouchableOpacityBox
      onPress={() => [handleUpdateContact(contact)]}
      flexDirection="row"
      mb="s16"
      borderRadius="s12"
      justifyContent="flex-start"
      alignItems="center"
      style={$shadowProps}>
      <Box
        flexGrow={1}
        justifyContent="center"
        alignItems="flex-start"
        paddingVertical="s4"
        paddingHorizontal="s8"
        borderRadius="s4"
        backgroundColor={
          contacts.phone === contact.phone ? 'grayBlack' : 'gray5'
        }>
        <Text
          bold
          color={contacts.phone === contact.phone ? 'grayWhite' : 'grayBlack'}
          mb="s8"
          preset="headingSmall">
          {contact.city}
        </Text>
        <Box flexDirection="row" justifyContent="center" alignItems="center">
          <Text
            color={contacts.phone === contact.phone ? 'grayWhite' : 'grayBlack'}
            mb="s8"
            preset="paragraphSmall"
            mr="s4">
            {contact.district},
          </Text>
          <Text
            color={contacts.phone === contact.phone ? 'grayWhite' : 'grayBlack'}
            mb="s8"
            preset="paragraphSmall">
            {contact.address}
          </Text>
        </Box>
        <Text
          bold
          color={contacts.phone === contact.phone ? 'grayWhite' : 'grayBlack'}
          mb="s8"
          preset="paragraphMedium">
          {contact.phone}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
