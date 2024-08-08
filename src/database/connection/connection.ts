import SQLite, {SQLiteDatabase} from 'react-native-sqlite-storage';

import {DATABASE_NAME, DATABASE_LOCATION, TABLE_ITEM} from '../types';

export async function dbConnect(): Promise<SQLiteDatabase> {
  var db = SQLite.openDatabase({
    name: DATABASE_NAME,
    location: DATABASE_LOCATION,
  });
  console.log('Database connect');
  return db;
}

export async function dbDisconnect(db: SQLiteDatabase) {
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
