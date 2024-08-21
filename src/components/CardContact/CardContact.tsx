import React, {useEffect} from 'react';

import {connect, addContact} from '@database';
import {Contact} from '@domain';
import {RootState, setContact} from '@redux';
import {useToast} from '@services';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

interface Props {
  contact: Contact;
}

export function CardContact({contact}: Props) {
  const {showToast} = useToast();

  const dispatch = useDispatch();

  const contacts = useSelector((state: RootState) => state.contact.contact);

  function selectContact(contactSelected: Contact) {
    showToast({
      message: 'Ótima escolha! ',
      position: 'bottom',
      type: 'success',
    });

    dispatch(setContact(contactSelected));
  }

  useEffect(() => {
    saveContactIntoDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts]);

  async function saveContactIntoDB() {
    try {
      const db = await connect();
      await addContact(db, contacts);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TouchableOpacityBox
      borderColor="gray5"
      borderWidth={1}
      onPress={() => [selectContact(contact)]}
      mb="s32"
      borderRadius="s12"
      flexDirection="row"
      justifyContent="space-evenly">
      <Box
        alignItems="center"
        justifyContent="center"
        backgroundColor={
          contacts.phone === contact.phone ? 'bluePrimary' : 'gray5'
        }
        padding="s10"
        style={{
          borderBottomLeftRadius: 12,
          borderTopLeftRadius: 12,
        }}>
        {contacts.phone === contact.phone ? (
          <Icon name="delivery" color="grayWhite" size={24} />
        ) : (
          <Icon name="delivery" color="gray3" size={24} />
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
      <Box
        alignItems="center"
        justifyContent="center"
        backgroundColor={
          contacts.phone === contact.phone ? 'bluePrimary' : 'gray5'
        }
        padding="s10"
        style={{
          borderBottomRightRadius: 12,
          borderTopRightRadius: 12,
        }}>
        {contacts.phone === contact.phone ? (
          <Icon name="delivery" color="grayWhite" size={24} />
        ) : (
          <Icon name="delivery" color="gray3" size={24} />
        )}
      </Box>
    </TouchableOpacityBox>
  );
}
