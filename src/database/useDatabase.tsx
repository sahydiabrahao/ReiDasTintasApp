import {DatabaseService} from '@database';

import {useDatabaseContext} from './useDatabaseContext';

export function useDatabase(): DatabaseService {
  return useDatabaseContext();
}
