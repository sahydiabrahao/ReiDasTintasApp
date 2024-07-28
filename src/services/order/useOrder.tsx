import {OrderService} from '@services';

import {useOrderContext} from './useOrderContext';

export function useOrder(): OrderService {
  return useOrderContext();
}
