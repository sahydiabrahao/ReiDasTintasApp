import React, {useEffect, useState, useCallback} from 'react';

import {deleteItemIntoDB, saveItemIntoDB} from '@database';
import {openWhatsApp} from '@domain';
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
  }, [items, deletedItemIds]);

  const onDelete = useCallback(
    (id: string) => {
      dispatch(removeItemById(id));
      setDeletedItemIds(prev => [...prev, id]);
      showToast({
        message: 'Item removido',
        position: 'bottom',
        type: 'success',
      });
    },
    [dispatch, showToast],
  );

  const onIncrement = useCallback(
    (id: string) => {
      dispatch(incrementItemQuantity(id));
    },
    [dispatch],
  );

  const onDecrement = useCallback(
    (id: string) => {
      dispatch(decrementItemQuantity(id));
    },
    [dispatch],
  );

  return (
    <Screen scrollable>
      {items.length > 0 ? (
        <Box backgroundColor="grayWhite">
          <Button
            mb="s12"
            backgroundColor="grayBlack"
            title="Solicitar orçamento gratuito"
            preset="primary"
            onPress={() => openWhatsApp(contacts, items)}
          />
          {items.map(item => (
            <CardCart
              key={item.id}
              item={item}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))}
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
