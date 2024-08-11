import React from 'react';

import {useDatabase} from '@database';
import {Contact} from '@domain';
import {RootState, setContact} from '@redux';
import {useToast} from '@services';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

interface Props {
  contact: Contact;
}

export function CardContact({contact}: Props) {
  const {dbConnect, insertContact, getContacts, dbDisconnect} = useDatabase();
  const {showToast} = useToast();

  const dispatch = useDispatch();

  const contacts = useSelector((state: RootState) => state.contact.contact);

  async function selectContact({}: Contact) {
    let data: Contact = {
      city: contact.city,
      district: contact.district,
      address: contact.address,
      phone: contact.phone,
    };

    const db = dbConnect();
    insertContact(await db, data);
    getContacts(await db);
    dbDisconnect(await db);

    showToast({
      message: 'Ótima escolha! ',
      position: 'bottom',
      type: 'success',
    });

    dispatch(setContact(contact));
  }

  return (
    <TouchableOpacityBox
      onPress={() => [selectContact(contact)]}
      mb="s32"
      borderRadius="s12"
      flexDirection="row"
      justifyContent="space-evenly"
      backgroundColor="gray5">
      <Box
        alignItems="center"
        justifyContent="center"
        backgroundColor={
          contacts.phone === contact.phone ? 'bluePrimary' : 'gray5'
        }
        padding="s12"
        style={{
          borderBottomLeftRadius: 12,
          borderTopLeftRadius: 12,
        }}>
        {contacts.phone === contact.phone ? (
          <Icon name="delivery" color="grayWhite" size={24} />
        ) : (
          <Box padding="s12" />
        )}
      </Box>
      <Box
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        padding="s12">
        <Text color="grayBlack" mb="s8" bold preset="headingMedium">
          {contact.city}
        </Text>
        <Text color="grayBlack" mb="s8" preset="headingSmall">
          {contact.district}
        </Text>
        <Text color="grayBlack" mb="s8" preset="paragraphMedium">
          {contact.address}
        </Text>
        <Text color="grayBlack" mb="s8" bold preset="headingSmall">
          {contact.phone}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
