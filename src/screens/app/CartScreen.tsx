import React from 'react';

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
  const itemList = useSelector((state: RootState) => state.item.items);
  const dispatch = useDispatch();

  function onDelete(id: string) {
    dispatch(removeItemById(id));
  }
  function onIncrement(id: string) {
    dispatch(incrementItemQuantity(id));
  }
  function onDecrement(id: string) {
    dispatch(decrementItemQuantity(id));
  }

  const renderCartItems = itemList.map(item => (
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
      {itemList.length > 0 ? (
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
