import {SQLiteDatabase} from 'react-native-sqlite-storage';

export const DATABASE_NAME = 'ReiDasTintas';
export const DATABASE_VERSION = '1.0';
export const DATABAE_DISPLAYNAME = 'ReiDasTintas';
export const DATABASE_SIZE = 200000;
export const DATABASE_LOCATION = 'default';

export interface database {
  storeID: string;
  storePhone?: string;
  category: string;
  name: string;
  brand: string;
  specification?: string;
  quantity: number;
  unit: string;
}

export interface DatabaseService {
  database: database | null;
  getDBConnection: () => Promise<SQLiteDatabase>;
  createTable: (db: SQLiteDatabase) => void;
  disconnect: (db: SQLiteDatabase) => void;
  deleteTable: (db: SQLiteDatabase) => void;
  insertItems: (db: SQLiteDatabase, database: database) => void;
  getItems: (db: SQLiteDatabase) => Promise<database[]>;
}
