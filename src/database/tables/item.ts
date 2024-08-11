import {Item} from '@domain';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

import {ItemDB, TABLE_ITEM} from '../types';

export async function getItems(db: SQLiteDatabase) {
  try {
    const databaseList: ItemDB[] = [];
    const results = await db.executeSql(`SELECT * FROM ${TABLE_ITEM}`);

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        databaseList.push(result.rows.item(index));
      }
    });
    // console.log('Database List:', databaseList);
    return databaseList;
  } catch (error) {
    // console.error(error);
    throw Error('Failed to get Items !!!');
  }
}

export async function insertItem(db: SQLiteDatabase, item: Item) {
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

export async function increment(db: SQLiteDatabase, id: string) {
  const query = `UPDATE ${TABLE_ITEM} SET quantity = quantity + 1 WHERE id = ${id}`;

  await db.executeSql(query);
}

export async function decrement(db: SQLiteDatabase, id: string) {
  const query = `UPDATE ${TABLE_ITEM} SET quantity = CASE WHEN quantity > 1 THEN quantity - 1 ELSE 1 END WHERE id = ${id}`;

  await db.executeSql(query);
}

export async function deleteItem(db: SQLiteDatabase, id: string) {
  const query = `DELETE FROM ${TABLE_ITEM} WHERE id = ${id}`;

  await db.executeSql(query);
}
