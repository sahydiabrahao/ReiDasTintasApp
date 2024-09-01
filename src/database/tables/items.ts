import {Item} from '@domain';
import {enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';

import {ItemDB, TABLE_ITEM} from '../types';

enablePromise(true);

export async function dbFetchItems(db: SQLiteDatabase) {
  try {
    const databaseList: ItemDB[] = [];
    const results = await db.executeSql(`SELECT * FROM ${TABLE_ITEM}`);

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        databaseList.push(result.rows.item(index));
      }
    });
    const filteredItems = (await databaseList).filter(
      item => item !== undefined,
    );

    // console.log('Database List:', databaseList);
    return filteredItems;
  } catch (error) {
    // console.error(error);
    throw Error('Failed to load items.');
  }
}

export async function dbInsertItem(db: SQLiteDatabase, item: Item) {
  const query = `INSERT OR REPLACE INTO ${TABLE_ITEM} (id, quantity, name, brand, specification, color, unit, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    item.id,
    item.quantity,
    item.name,
    item.brand,
    item.specification,
    item.color,
    item.unit,
    item.image,
  ];

  await db.executeSql(query, values);
}

export async function dbUpdateItem(db: SQLiteDatabase) {
  try {
    const firstItem = await dbFetchItems(db);

    if (!firstItem) {
      return null;
    } else {
      return firstItem;
    }
  } catch (error) {
    console.error('Error updating the contact in the database:', error);
  }
}

export async function dbUpdateItemColor(
  db: SQLiteDatabase,
  id: string,
  color: string,
) {
  const query = `UPDATE ${TABLE_ITEM} SET color = ? WHERE id = ?`;
  const values = [color, id];
  await db.executeSql(query, values);
}

export async function dbDeleteItem(db: SQLiteDatabase, id: string) {
  const query = `DELETE FROM ${TABLE_ITEM} WHERE id = ?`;
  const value = [id];
  await db.executeSql(query, value);
}
