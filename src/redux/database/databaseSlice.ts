import {connect, disconnect} from '@database';
import {create, drop} from '@database';
import {createSlice} from '@reduxjs/toolkit';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

interface DatabaseState {
  db: SQLiteDatabase | null;
}

const initialState: DatabaseState = {
  db: null,
};

const databaseSlice = createSlice({
  name: 'database',
  initialState,
  reducers: {
    connectToDatabase: state => {
      connect()
        .then(db => {
          state.db = db;
        })
        .catch(error => {
          console.error('Failed to connect to database', error);
        });
    },
    disconnectFromDatabase: state => {
      if (state.db) {
        disconnect(state.db)
          .then(() => {
            state.db = null;
          })
          .catch(error => {
            console.error('Failed to disconnect from database', error);
          });
      }
    },
    createDatabaseTable: state => {
      if (state.db) {
        create(state.db).catch((error: any) => {
          console.error('Failed to create table', error);
        });
      }
    },
    dropDatabaseTable: state => {
      if (state.db) {
        drop(state.db).catch((error: any) => {
          console.error('Failed to drop table', error);
        });
      }
    },
  },
});

export const {
  connectToDatabase,
  disconnectFromDatabase,
  createDatabaseTable,
  dropDatabaseTable,
} = databaseSlice.actions;

export default databaseSlice.reducer;
