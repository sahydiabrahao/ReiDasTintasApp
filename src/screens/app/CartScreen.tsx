import React, {useEffect, useState} from 'react';
import {Linking} from 'react-native';

import {deleteItemIntoDB, saveItemIntoDB} from '@database';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemById,
  RootState,
} from '@redux';
import {useToast} from '@services';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Button, CardCart, ModalCart, Text} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.item.items);
  const contacts = useSelector((state: RootState) => state.contact.contact);
  const [deletedItemIds, setDeletedItemIds] = useState<string[]>([]);
  const {showToast} = useToast();

  useEffect(() => {
    saveItemIntoDB(items);
    if (deletedItemIds.length > 0) {
      deleteItemIntoDB(deletedItemIds);
      setDeletedItemIds([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  function onDelete(id: string) {
    dispatch(removeItemById(id));
    setDeletedItemIds(prev => [...prev, id]);
    showToast({
      message: 'Item removido',
      position: 'bottom',
      type: 'success',
    });
  }
  function onIncrement(id: string) {
    dispatch(incrementItemQuantity(id));
  }
  function onDecrement(id: string) {
    dispatch(decrementItemQuantity(id));
  }

  const renderCartItems = items.map(item => (
    <CardCart
      key={item.id}
      item={item}
      onDelete={onDelete}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  ));

  const formatPhoneForWhatsApp = (phone: string, countryCode = '55') => {
    const cleanedPhone = phone.replace(/\D/g, '');
    return `${countryCode}${cleanedPhone}`;
  };
  function openWhatsApp() {
    const phone = `${contacts.phone}`;

    const formatedPhone = formatPhoneForWhatsApp(phone);

    let message = 'Olá! Pode enviar a cotação para estes itens:\n';

    items.forEach(item => {
      message += `${item.quantity}-${item.brand} ${item.name} ${item.specification} ${item.unit}\n`;
    });

    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${formatedPhone}?text=${encodedMessage}`;

    Linking.openURL(url)
      .then(() => console.log('WhatsApp aberto com a mensagem'))
      .catch(err => console.error('Erro ao abrir o WhatsApp', err));
  }

  return (
    <Screen scrollable>
      {items.length > 0 ? (
        <Box backgroundColor="grayWhite">
          <Button
            mb="s12"
            backgroundColor="grayBlack"
            title="Solicitar orçamento gratuíto"
            preset="primary"
            onPress={openWhatsApp}
          />
          {renderCartItems}
          <ModalCart />
        </Box>
      ) : (
        <Box mb="s12" alignItems="center" justifyContent="center">
          <Text preset="headingSmall" color="gray3">
            Nenhum item adicionado
          </Text>
        </Box>
      )}
    </Screen>
  );
}
