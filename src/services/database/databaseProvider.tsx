import React, {createContext, useState} from 'react';

import {
  database,
  DATABASE_LOCATION,
  DATABASE_NAME,
  DatabaseService,
} from '@services';
import SQLite, {SQLiteDatabase} from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

export const DatabaseContext = createContext<DatabaseService>({
  database: null,
  getDBConnection: () => Promise.resolve(null as unknown as SQLiteDatabase), // Placeholder
  createTable: () => {},
  disconnect: () => {},
  deleteTable: () => {},
  insertItems: () => {},
  getItems: () => Promise.resolve([]), // Placeholder
});

export function DatabaseProvider({children}: React.PropsWithChildren<{}>) {
  // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars
  const [database, setDatabase] = useState<DatabaseService['database']>(null);

  async function getDBConnection(): Promise<SQLiteDatabase> {
    var db = SQLite.openDatabase({
      name: DATABASE_NAME,
      location: DATABASE_LOCATION,
    });
    console.log('Getting DB connection');
    return db;
  }

  async function createTable(db: SQLiteDatabase) {
    const query = `CREATE TABLE IF NOT EXISTS ${DATABASE_NAME} (id INTEGER PRIMARY KEY AUTOINCREMENT, storeID VARCHAR(30), storePhone VARCHAR(30), category VARCHAR(30), name VARCHAR(30), brand VARCHAR(30), specification VARCHAR(30), quantity VARCHAR(30), unit VARCHAR(30))`;

    await db.executeSql(query);

    console.log('Created table');
  }
  async function disconnect(db: SQLiteDatabase) {
    try {
      if (db) {
        db.close();
        console.log('DB Connection is closed');
      } else {
        console.log('Db connection is not open');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTable(db: SQLiteDatabase) {
    const query = `DROP TABLE ${DATABASE_NAME};`;

    await db.executeSql(query);
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  async function insertItems(db: SQLiteDatabase, database: database) {
    const query = `INSERT OR REPLACE INTO ${DATABASE_NAME} (storeID, storePhone, category, name, brand, specification, quantity, unit) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      database.storeID,
      database.storePhone,
      database.category,
      database.name,
      database.brand,
      database.specification,
      database.quantity,
      database.unit,
    ];

    await db.executeSql(query, values);
  }

  async function getItems(db: SQLiteDatabase) {
    try {
      const databaseList: database[] = [];
      const results = await db.executeSql(`SELECT * FROM ${DATABASE_NAME}`);

      results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          databaseList.push(result.rows.item(index));
        }
      });
      console.log(databaseList);
      return databaseList;
    } catch (error) {
      console.error(error);
      throw Error('Failed to get Items !!!');
    }
  }
  return (
    <DatabaseContext.Provider
      value={{
        database,
        getDBConnection,
        createTable,
        disconnect,
        deleteTable,
        insertItems,
        getItems,
      }}>
      {children}
    </DatabaseContext.Provider>
  );
}
