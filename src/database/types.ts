import {Item, Contact} from '@domain';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

export const DATABASE_NAME = 'ReiDasTintasDB';
export const TABLE_ITEM = 'Item';
export const TABLE_CONTACT = 'Contact';
export const DATABASE_VERSION = '1.0';
export const DATABAE_DISPLAYNAME = 'ReiDasTintas';
export const DATABASE_SIZE = 200000;
export const DATABASE_LOCATION = 'default';

export interface ItemDB {
  id: string;
  category: string;
  quantity: number;
  name: string;
  brand: string;
  specification?: string;
  unit: string;
  image: string;
}
export interface ContactDB {
  id: string;
  city: string;
  address: string;
  district: string;
  phone: string;
}

export interface DatabaseService {
  itemDB: ItemDB | null;
  contactDB: ContactDB | null;
  dbConnect: () => Promise<SQLiteDatabase>;
  createTable: (db: SQLiteDatabase) => void;
  dbDisconnect: (db: SQLiteDatabase) => void;
  deleteTable: (db: SQLiteDatabase) => void;
  insertItem: (db: SQLiteDatabase, database: Item) => void;
  increment: (db: SQLiteDatabase, id: string) => void;
  decrement: (db: SQLiteDatabase, id: string) => void;
  deleteItem: (db: SQLiteDatabase, id: string) => void;
  insertContact: (db: SQLiteDatabase, database: Contact) => void;
  getItems: (db: SQLiteDatabase) => Promise<ItemDB[]>;
  getContacts: (db: SQLiteDatabase) => Promise<ContactDB[]>;
}
