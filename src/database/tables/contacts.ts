import {connect} from '@database';
import {Contact} from '@domain';
import {enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';

import {TABLE_CONTACT, ContactDB} from '../types';

enablePromise(true);

export async function addContact(db: SQLiteDatabase, contact: Contact) {
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

export async function fetchAllContacts(db: SQLiteDatabase) {
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

export async function syncContactWithDatabase(contacts: Contact) {
  try {
    const db = await connect();
    const [firstContact] = await fetchAllContacts(db);

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
