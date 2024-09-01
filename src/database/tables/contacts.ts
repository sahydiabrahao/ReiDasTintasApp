import {Contact} from '@domain';
import {enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';

import {TABLE_CONTACT, ContactDB} from '../types';

enablePromise(true);

export async function dbFetchContacts(db: SQLiteDatabase) {
  try {
    const databaseList: ContactDB[] = [];
    const results = await db.executeSql(`SELECT * FROM ${TABLE_CONTACT}`);

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
    throw Error('Failed to load contacts.');
  }
}
export async function dbInsertContact(db: SQLiteDatabase, contact: Contact) {
  const query = `INSERT OR REPLACE INTO ${TABLE_CONTACT} (id, phone, city, address, district) VALUES (?, ?, ?, ?, ?)`;
  const values = [
    '0',
    contact.phone,
    contact.city,
    contact.address,
    contact.district,
  ];
  console.log('Contact successfully updated.');
  await db.executeSql(query, values);
}

export async function dbUpdateContact(db: SQLiteDatabase, contacts: Contact) {
  try {
    const [firstContact] = await dbFetchContacts(db);

    if (!firstContact) {
      return;
    }

    if (firstContact.phone === contacts.phone) {
      console.log('Contact already exists:', firstContact);
      return null;
    } else {
      const {address, city, phone, district} = firstContact;

      const newContact: Contact = {
        address,
        city,
        phone,
        district,
      };
      return newContact;
    }
  } catch (error) {
    console.error('Error updating the contact in the database:', error);
  }
}
