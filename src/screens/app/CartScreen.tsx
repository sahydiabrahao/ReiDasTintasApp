import React, {useEffect, useState} from 'react';

import {deleteItemIntoDB, saveItemIntoDB} from '@database';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemById,
  RootState,
} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Button, CardCart, Text} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.item.items);
  const [deletedItemIds, setDeletedItemIds] = useState<string[]>([]);

  useEffect(() => {
    saveItemIntoDB(items);
    if (deletedItemIds.length > 0) {
      deleteItemIntoDB(deletedItemIds);
      setDeletedItemIds([]); // Reseta a lista de itens deletados após a atualização do banco de dados
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  function onDelete(id: string) {
    dispatch(removeItemById(id));
    setDeletedItemIds(prev => [...prev, id]);
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

  return (
    <Screen scrollable>
      {items.length > 0 ? (
        <Box backgroundColor="grayWhite">
          <Button
            mb="s12"
            backgroundColor="bluePrimary"
            title="Solicitar orçamento gratuíto"
            preset="primary"
          />
          {renderCartItems}
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
