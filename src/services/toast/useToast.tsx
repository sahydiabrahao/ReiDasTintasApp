import {useContext} from 'react';

import {ToastContext, ToastService} from '@services';

export function useToast(): ToastService {
  const {toast, hiddenToast, showToast} = useContext(ToastContext);

  return {
    toast,
    showToast,
    hiddenToast,
  };
}
