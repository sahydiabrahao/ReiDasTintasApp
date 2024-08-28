import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

import {DATABASE_NAME, DATABASE_LOCATION} from '../types';

enablePromise(true);

export async function connectToDatabase(): Promise<SQLiteDatabase> {
  try {
    const db = openDatabase({
      name: DATABASE_NAME,
      location: DATABASE_LOCATION,
    });
    console.log('Database connected successfully');
    return db;
  } catch (error) {
    console.error('Failed to connect to the database', error);
    throw error; // Repassar o erro para o chamador lidar, se necessário
  }
}

export async function disconnectFromDatabase(
  db: SQLiteDatabase,
): Promise<void> {
  try {
    if (db) {
      await db.close();
      console.log('Database connection closed successfully');
    } else {
      console.log('Database connection was not open');
    }
  } catch (error) {
    console.error('Failed to close the database connection', error);
  }
}
