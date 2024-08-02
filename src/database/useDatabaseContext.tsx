import {useContext} from 'react';

import {DatabaseContext, DatabaseService} from '@database';

export function useDatabaseContext(): DatabaseService {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error('Order must be used within a ToastProvider');
  } else {
    return context;
  }
}
