import {connect} from '@database';
import {Color} from '@domain';
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

export async function removeColor(db: SQLiteDatabase, name: string) {
  const query = `DELETE FROM ${TABLE_COLOR} WHERE name = ?`;
  const value = [name];
  await db.executeSql(query, value);
}

export async function syncColorWithDatabase(db: SQLiteDatabase) {
  try {
    const firstColor = await fetchAllColors(db);

    if (!firstColor) {
      return null;
    } else {
      return firstColor;
    }
  } catch (error) {
    console.error('Error updating the color in the database:', error);
  }
}

export async function saveFavoriteColorsIntoDB(colors: Color[]) {
  try {
    const db = await connect();
    for (const colorIndex of colors) {
      await addColor(db, colorIndex);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function deleteFavoriteColorsIntoDB(colorName: string[]) {
  try {
    const db = await connect();
    for (const name of colorName) {
      await removeColor(db, name);
    }
  } catch (error) {
    console.error('Error updating the database:', error);
  }
}
