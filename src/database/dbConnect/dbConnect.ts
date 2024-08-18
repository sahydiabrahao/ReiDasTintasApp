import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

import {DATABASE_NAME, DATABASE_LOCATION} from '../types';

enablePromise(true);

export async function connect(): Promise<SQLiteDatabase> {
  var db = openDatabase({
    name: DATABASE_NAME,
    location: DATABASE_LOCATION,
  });
  console.log('Database connect');
  return db;
}

export async function disconnect(db: SQLiteDatabase) {
  try {
    if (db) {
      db.close();
      console.log('Database connection is closed');
    } else {
      console.log('Database connection is not open');
    }
  } catch (error) {
    // console.log(error);
  }
}
