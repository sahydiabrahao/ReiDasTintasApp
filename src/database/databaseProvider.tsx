/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useState} from 'react';

import {Item, Contact} from '@domain';
import {
  DATABASE_LOCATION,
  DATABASE_NAME,
  DatabaseService,
  ItemDB,
  ContactDB,
  TABLE_CONTACT,
  TABLE_ITEM,
} from '@services';
import SQLite, {SQLiteDatabase} from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

export const DatabaseContext = createContext<DatabaseService>({
  itemDB: null,
  contactDB: null,
  getDBConnection: () => Promise.resolve(null as unknown as SQLiteDatabase),
  createTable: () => {},
  disconnect: () => {},
  deleteTable: () => {},
  insertItem: () => {},
  insertContact: () => {},
  getItems: () => Promise.resolve([]),
  getContacts: () => Promise.resolve([]),
});

export function DatabaseProvider({children}: React.PropsWithChildren<{}>) {
  const [itemDB, setItemDB] = useState<DatabaseService['itemDB']>(null);
  const [contactDB, setContactDB] =
    useState<DatabaseService['contactDB']>(null);

  async function getDBConnection(): Promise<SQLiteDatabase> {
    var db = SQLite.openDatabase({
      name: DATABASE_NAME,
      location: DATABASE_LOCATION,
    });
    console.log('Getting DB connection');
    return db;
  }

  async function createTable(db: SQLiteDatabase) {
    const query1 = `CREATE TABLE IF NOT EXISTS ${TABLE_ITEM} (id VARCHAR(30) PRIMARY KEY, category VARCHAR(30), quantity INTEGER, name VARCHAR(30), brand VARCHAR(30), specification VARCHAR(30), unit VARCHAR(30), image TEXT)`;
    const query2 = `CREATE TABLE IF NOT EXISTS ${TABLE_CONTACT} (id VARCHAR(30) PRIMARY KEY, city VARCHAR(30), address VARCHAR(30), district VARCHAR(30), phone VARCHAR(30))`;

    await db.executeSql(query1);
    await db.executeSql(query2);

    console.log(`Created table: ${TABLE_ITEM}`);
    console.log(`Created table: ${TABLE_CONTACT}`);
  }

  async function disconnect(db: SQLiteDatabase) {
    try {
      if (db) {
        db.close();
        console.log(`${TABLE_ITEM} connection is closed`);
      } else {
        console.log(`${TABLE_ITEM} connection is not open`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTable(db: SQLiteDatabase) {
    const query1 = `DROP TABLE ${TABLE_ITEM};`;
    const query2 = `DROP TABLE ${TABLE_CONTACT};`;

    await db.executeSql(query1);
    await db.executeSql(query2);

    console.log(`${TABLE_ITEM} has been deleted`);
    console.log(`${TABLE_CONTACT} has been deleted`);
  }

  async function insertItem(db: SQLiteDatabase, item: Item) {
    const query = `INSERT OR REPLACE INTO ${TABLE_ITEM} (id, category, quantity, name, brand, specification, unit, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      item.id,
      item.category,
      item.quantity,
      item.name,
      item.brand,
      item.specification,
      item.unit,
      item.image,
    ];

    await db.executeSql(query, values);
  }

  async function insertContact(db: SQLiteDatabase, contact: Contact) {
    const query = `INSERT OR REPLACE INTO ${TABLE_CONTACT} (id, phone, city, address, district) VALUES (?, ?, ?, ?, ?)`;
    const values = [
      '1',
      contact.phone,
      contact.city,
      contact.address,
      contact.district,
    ];
    await db.executeSql(query, values);
  }

  async function getItems(db: SQLiteDatabase) {
    try {
      const databaseList: ItemDB[] = [];
      const results = await db.executeSql(`SELECT * FROM ${TABLE_ITEM}`);

      results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          databaseList.push(result.rows.item(index));
        }
      });
      console.log('Database List:', databaseList);
      return databaseList;
    } catch (error) {
      console.error(error);
      throw Error('Failed to get Items !!!');
    }
  }

  async function getContacts(db: SQLiteDatabase) {
    try {
      const databaseList: ContactDB[] = [];
      const results = await db.executeSql(`SELECT * FROM ${TABLE_CONTACT}`);

      results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          databaseList.push(result.rows.item(index));
        }
      });
      console.log('Database List:', databaseList);
      return databaseList;
    } catch (error) {
      console.error(error);
      throw Error('Failed to get Contacts !!!');
    }
  }
  return (
    <DatabaseContext.Provider
      value={{
        itemDB,
        contactDB,
        getDBConnection,
        createTable,
        disconnect,
        deleteTable,
        insertItem,
        insertContact,
        getItems,
        getContacts,
      }}>
      {children}
    </DatabaseContext.Provider>
  );
}
