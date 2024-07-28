import React, {useEffect} from 'react';

import {useOrder} from '@services';

import {Box, Text} from '@components';

export function Order() {
  const {order} = useOrder();

  useEffect(() => {
    if (order) {
      console.log(order);
    }
  }, [order]);

  if (!order) {
    return null;
  }

  return (
    <Box>
      <Text>{order.store?.id}</Text>
    </Box>
  );
}
