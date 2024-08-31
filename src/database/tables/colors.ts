import {Color} from '@domain';
import {enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';

import {TABLE_COLOR, ColorDB} from '../types';

enablePromise(true);

export async function dbInsertColor(db: SQLiteDatabase, color: Color) {
  const query = `INSERT OR REPLACE INTO ${TABLE_COLOR} (name, hexValue, contrastColor) VALUES (?, ?, ?)`;
  const values = [color.name, color.hexValue, color.contrastColor];
  console.log('Color successfully updated.');
  await db.executeSql(query, values);
}

export async function dbFetchColors(db: SQLiteDatabase) {
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

export async function dbDeleteColor(db: SQLiteDatabase, name: string) {
  const query = `DELETE FROM ${TABLE_COLOR} WHERE name = ?`;
  const value = [name];
  await db.executeSql(query, value);
}

export async function dbUpdateColor(db: SQLiteDatabase) {
  try {
    const firstColor = await dbFetchColors(db);

    if (!firstColor) {
      return null;
    } else {
      return firstColor;
    }
  } catch (error) {
    console.error('Error updating the color in the database:', error);
  }
}
