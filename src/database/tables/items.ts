import {connect} from '@database';
import {Item} from '@domain';
import {enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';

import {ItemDB, TABLE_ITEM} from '../types';

enablePromise(true);

export async function fetchAllItems(db: SQLiteDatabase) {
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

export async function addItem(db: SQLiteDatabase, item: Item) {
  const query = `INSERT OR REPLACE INTO ${TABLE_ITEM} (id, quantity, name, brand, specification, unit, image) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    item.id,
    item.quantity,
    item.name,
    item.brand,
    item.specification,
    item.unit,
    item.image,
  ];

  await db.executeSql(query, values);
}

// export async function increaseItemQuantity(db: SQLiteDatabase, id: string) {
//   const query = `UPDATE ${TABLE_ITEM} SET quantity = quantity + 1 WHERE id = ${id}`;

//   await db.executeSql(query);
// }

// export async function decreaseItemQuantity(db: SQLiteDatabase, id: string) {
//   const query = `UPDATE ${TABLE_ITEM} SET quantity = CASE WHEN quantity > 1 THEN quantity - 1 ELSE 1 END WHERE id = ${id}`;

//   await db.executeSql(query);
// }

export async function removeItem(db: SQLiteDatabase, id: string) {
  const query = `DELETE FROM ${TABLE_ITEM} WHERE id = ?`;
  const value = [id];
  await db.executeSql(query, value);
}

export async function syncItemWithDatabase() {
  try {
    const db = await connect();
    const firstItem = await fetchAllItems(db);

    if (!firstItem) {
      return null;
    } else {
      return firstItem;
    }
  } catch (error) {
    console.error('Error updating the contact in the database:', error);
  }
}

export async function saveItemIntoDB(items: Item[]) {
  try {
    const db = await connect();
    for (const itemIndex of items) {
      await addItem(db, itemIndex);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function deleteItemIntoDB(deletedItemIds: string[]) {
  try {
    const db = await connect();
    for (const id of deletedItemIds) {
      await removeItem(db, id);
      console.log(id);
    }
  } catch (error) {
    console.error('Error updating the database:', error);
  }
}
