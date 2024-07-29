import {useEffect} from 'react';

import {useOrder} from '@services';

export function OrderData() {
  const {order} = useOrder();

  useEffect(() => {
    if (order) {
      console.log(order);
    }
  }, [order]);

  if (!order) {
    return null;
  }
}
