import React, {createContext, useState} from 'react';

import {Order, OrderService} from '@services';

export const OrderContext = createContext<OrderService>({
  order: null,
  sendOrder: () => {},
});

export function OrderProvider({children}: React.PropsWithChildren<{}>) {
  const [order, setOrder] = useState<OrderService['order']>(null);

  function sendOrder(_order: Order) {
    setOrder(_order);
  }

  return (
    <OrderContext.Provider value={{order, sendOrder}}>
      {children}
    </OrderContext.Provider>
  );
}
