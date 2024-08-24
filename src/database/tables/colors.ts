import {connect} from '@database';
import {Color} from '@domain';
import {favoriteColors} from '@redux';
import {enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';

import {TABLE_COLOR, ColorDB} from '../types';

enablePromise(true);

export async function addColor(db: SQLiteDatabase, color: Color) {
  const query = `INSERT OR REPLACE INTO ${TABLE_COLOR} (name, hexValue, contrastColor) VALUES (?, ?, ?)`;
  const values = [color.name, color.hexValue, color.contrastColor];
  console.log('Color successfully updated.');
  await db.executeSql(query, values);
}

export async function fetchAllColors(db: SQLiteDatabase) {
  try {
    const databaseList: ColorDB[] = [];
    const results = await db.executeSql(`SELECT * FROM ${TABLE_COLOR}`);

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        databaseList.push(result.rows.item(index));
      }
    });
    const filteredColors = (await databaseList).filter(
      item => item !== undefined,
    );

    // console.log('Database List:', databaseList);
    return filteredColors;
  } catch (error) {
    // console.error(error);
    throw Error('Failed to load colors.');
  }
}

export async function syncColorWithDatabase() {
  try {
    const db = await connect();
    const firstItem = await fetchAllColors(db);

    if (!firstItem) {
      return favoriteColors;
    } else {
      return firstItem;
    }
  } catch (error) {
    console.error('Error updating the color in the database:', error);
  }
}
