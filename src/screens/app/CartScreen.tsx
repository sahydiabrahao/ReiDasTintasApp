import React, {useEffect, useState, useCallback} from 'react';

import {
  connectToDatabase,
  dbDeleteItem,
  disconnectFromDatabase,
  dbInsertItem,
} from '@database';
import {Item, openWhatsApp} from '@domain';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  deleteItemById,
  RootState,
} from '@redux';
import {useToast} from '@services';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Button, CardCart, ModalCart, Text} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  const [deletedItemIds, setDeletedItemIds] = useState<string[]>([]);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.item.items);
  const contacts = useSelector((state: RootState) => state.contact.contact);
  const {showToast} = useToast();

  const syncDatabase = async (itemsToSync: Item[]) => {
    const db = await connectToDatabase();
    try {
      for (const itemIndex of itemsToSync) {
        await dbInsertItem(db, itemIndex);
      }
      if (deletedItemIds.length > 0) {
        for (const id of deletedItemIds) {
          await dbDeleteItem(db, id);
        }
        setDeletedItemIds([]);
      }
    } finally {
      await disconnectFromDatabase(db);
    }
  };

  useEffect(() => {
    syncDatabase(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleDeleteItemById = useCallback(
    (id: string) => {
      dispatch(deleteItemById(id));
      setDeletedItemIds(prev => [...prev, id]);
      showToast({
        message: 'Item removido',
        position: 'bottom',
        type: 'success',
      });
    },
    [dispatch, showToast],
  );

  const handleIncreaseItemQuantity = useCallback(
    (id: string) => {
      dispatch(increaseItemQuantity(id));
    },
    [dispatch],
  );

  const handleDecreaseItemQuantity = useCallback(
    (id: string) => {
      dispatch(decreaseItemQuantity(id));
    },
    [dispatch],
  );

  return (
    <Screen scrollable>
      {items.length > 0 ? (
        <Box backgroundColor="grayWhite">
          <Button
            mb="s12"
            title="Solicitar orçamento gratuito"
            preset="primary"
            onPress={() => openWhatsApp(contacts, items)}
          />
          {items.map(item => (
            <CardCart
              key={item.id}
              item={item}
              handleDeleteItem={handleDeleteItemById}
              handleIncrementItem={handleIncreaseItemQuantity}
              handleDecrementItem={handleDecreaseItemQuantity}
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
