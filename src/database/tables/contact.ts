import {Contact} from '@domain';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

import {TABLE_CONTACT, ContactDB} from '../types';

export async function insertContact(db: SQLiteDatabase, contact: Contact) {
  const query = `INSERT OR REPLACE INTO ${TABLE_CONTACT} (id, phone, city, address, district) VALUES (?, ?, ?, ?, ?)`;
  const values = [
    '0',
    contact.phone,
    contact.city,
    contact.address,
    contact.district,
  ];
  await db.executeSql(query, values);
}

export async function getContacts(db: SQLiteDatabase) {
  try {
    const databaseList: ContactDB[] = [];
    const results = await db.executeSql(`SELECT * FROM ${TABLE_CONTACT}`);

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        databaseList.push(result.rows.item(index));
      }
    });
    // console.log('Database List:', databaseList);
    return databaseList;
  } catch (error) {
    // console.error(error);
    throw Error('Failed to get Contacts !!!');
  }
}
