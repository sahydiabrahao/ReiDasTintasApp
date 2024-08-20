import {TABLE_ITEM, TABLE_CONTACT, connect} from '@database';
import {enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';

enablePromise(true);

export async function create(db: SQLiteDatabase) {
  const query1 = `CREATE TABLE IF NOT EXISTS ${TABLE_ITEM} (id VARCHAR(30) PRIMARY KEY, quantity INTEGER, name VARCHAR(30), brand VARCHAR(30), specification VARCHAR(30), unit VARCHAR(30), image VARCHAR(30))`;
  const query2 = `CREATE TABLE IF NOT EXISTS ${TABLE_CONTACT} (id VARCHAR(30) PRIMARY KEY, city VARCHAR(30), address VARCHAR(30), district VARCHAR(30), phone VARCHAR(30))`;

  await db.executeSql(query1);
  await db.executeSql(query2);

  console.log(`Created table: ${TABLE_ITEM}`);
  console.log(`Created table: ${TABLE_CONTACT}`);
}

export async function drop(db: SQLiteDatabase) {
  const query1 = `DROP TABLE ${TABLE_ITEM};`;
  const query2 = `DROP TABLE ${TABLE_CONTACT};`;

  await db.executeSql(query1);
  await db.executeSql(query2);

  console.log(`${TABLE_ITEM} has been deleted`);
  console.log(`${TABLE_CONTACT} has been deleted`);
}

export async function initDatabase() {
  try {
    const db = await connect();
    // await drop(db);
    await create(db);
  } catch (error) {
    console.error(error);
  }
}
