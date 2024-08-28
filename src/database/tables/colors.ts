import {connectToDatabase} from '@database';
import {Color} from '@domain';
import {enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';

import {TABLE_COLOR, ColorDB} from '../types';

enablePromise(true);

export async function insertColor(db: SQLiteDatabase, color: Color) {
  const query = `INSERT OR REPLACE INTO ${TABLE_COLOR} (name, hexValue, contrastColor) VALUES (?, ?, ?)`;
  const values = [color.name, color.hexValue, color.contrastColor];
  console.log('Color successfully updated.');
  await db.executeSql(query, values);
}

export async function getAllColors(db: SQLiteDatabase) {
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

export async function deleteColor(db: SQLiteDatabase, name: string) {
  const query = `DELETE FROM ${TABLE_COLOR} WHERE name = ?`;
  const value = [name];
  await db.executeSql(query, value);
}

export async function updateColor(db: SQLiteDatabase) {
  try {
    const firstColor = await getAllColors(db);

    if (!firstColor) {
      return null;
    } else {
      return firstColor;
    }
  } catch (error) {
    console.error('Error updating the color in the database:', error);
  }
}

export async function storeFavoriteColors(colors: Color[]) {
  const db = await connectToDatabase();
  try {
    for (const colorIndex of colors) {
      await insertColor(db, colorIndex);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function deleteFavoriteColors(colorName: string[]) {
  const db = await connectToDatabase();
  try {
    for (const name of colorName) {
      await deleteColor(db, name);
    }
  } catch (error) {
    console.error('Error updating the database:', error);
  }
}
