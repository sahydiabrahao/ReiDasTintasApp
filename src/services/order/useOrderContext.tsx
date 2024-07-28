import {useContext} from 'react';

import {OrderContext, OrderService} from '@services';

export function useOrderContext(): OrderService {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('Order must be used within a ToastProvider');
  } else {
    return context;
  }
}
