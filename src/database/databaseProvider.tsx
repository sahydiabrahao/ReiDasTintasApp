/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useState} from 'react';

import {
  DATABASE_LOCATION,
  DATABASE_NAME,
  DatabaseService,
  ItemDB,
  ContactDB,
  TABLE_CONTACT,
  TABLE_ITEM,
  dbConnect,
  dbDisconnect,
} from '@database';
import {Item, Contact} from '@domain';
import SQLite, {SQLiteDatabase} from 'react-native-sqlite-storage';

import {getContacts, insertContact} from './tables/contact';
import {
  insertItem,
  increment,
  decrement,
  deleteItem,
  getItems,
} from './tables/item';
import {createTable, deleteTable} from './utils/utils';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

export const DatabaseContext = createContext<DatabaseService>({
  itemDB: null,
  contactDB: null,
  dbConnect: () => Promise.resolve(null as unknown as SQLiteDatabase),
  createTable: () => {},
  dbDisconnect: () => {},
  deleteTable: () => {},
  insertItem: () => {},
  increment: () => {},
  decrement: () => {},
  deleteItem: () => {},
  insertContact: () => {},
  getItems: () => Promise.resolve([]),
  getContacts: () => Promise.resolve([]),
});

export function DatabaseProvider({children}: React.PropsWithChildren<{}>) {
  const [itemDB, setItemDB] = useState<DatabaseService['itemDB']>(null);
  const [contactDB, setContactDB] =
    useState<DatabaseService['contactDB']>(null);

  dbConnect;
  dbDisconnect;
  createTable;
  deleteTable;
  insertItem;
  increment;
  decrement;
  deleteItem;
  getItems;
  insertContact;
  getContacts;

  return (
    <DatabaseContext.Provider
      value={{
        itemDB,
        contactDB,
        dbConnect,
        createTable,
        dbDisconnect,
        deleteTable,
        insertItem,
        increment,
        decrement,
        deleteItem,
        insertContact,
        getItems,
        getContacts,
      }}>
      {children}
    </DatabaseContext.Provider>
  );
}
