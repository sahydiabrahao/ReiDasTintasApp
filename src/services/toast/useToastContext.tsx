import {useContext} from 'react';

import {ToastContext, ToastService} from '@services';

export function useToastContext(): ToastService {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('Toast must be used within a ToastProvider');
  } else {
    return context;
  }
}
