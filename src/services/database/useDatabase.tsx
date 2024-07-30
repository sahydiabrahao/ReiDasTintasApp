import {DatabaseService} from '@services';

import {useDatabaseContext} from './useDatabaseContext';

export function useDatabase(): DatabaseService {
  return useDatabaseContext();
}
