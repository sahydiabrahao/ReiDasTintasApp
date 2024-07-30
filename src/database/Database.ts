import SQLite, {SQLiteDatabase} from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

export const DATABASE_NAME = 'ReiDasTintas';
export const DATABASE_VERSION = '1.0';
export const DATABAE_DISPLAYNAME = 'ReiDasTintas';
export const DATABASE_SIZE = 200000;
export const DATABASE_LOCATION = 'default';

export interface ItemDB {
  name: string;
  age: string;
}

export async function getDBConnection(): Promise<SQLiteDatabase> {
  var db = SQLite.openDatabase({
    name: DATABASE_NAME,
    location: DATABASE_LOCATION,
  });
  console.log('Getting DB connection');
  return db;
}

export async function createTable(db: SQLiteDatabase) {
  const query = `CREATE TABLE IF NOT EXISTS ${DATABASE_NAME} (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30), age VARCHAR(30))`;

  await db.executeSql(query);

  console.log('Created table');
}

export async function disconnect(db: SQLiteDatabase) {
  try {
    if (db) {
      db.close();
      console.log('DB Connection is closed');
    } else {
      console.log('Db connection is not open');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTable(db: SQLiteDatabase) {
  const query = `DROP TABLE ${DATABASE_NAME};`;

  await db.executeSql(query);
}

export async function insertItems(db: SQLiteDatabase, item: ItemDB) {
  const query = `INSERT OR REPLACE INTO ${DATABASE_NAME} (name, age) VALUES (?, ?)`;
  const values = [item.name, item.age];

  return db.executeSql(query, values);
}
export async function getItems(db: SQLiteDatabase) {
  try {
    const list: ItemDB[] = [];
    const results = await db.executeSql(
      `SELECT id FROM ${DATABASE_NAME} WHERE name = 'joao'`,
    );

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        list.push(result.rows.item(index));
      }
    });
    console.log(list);
    return list;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get Items !!!');
  }
}
