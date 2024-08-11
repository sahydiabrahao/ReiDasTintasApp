import {configureStore} from '@reduxjs/toolkit';

import databaseReducer from './database/databaseSlice';

export const store = configureStore({
  reducer: {
    database: databaseReducer,
  },
});

// Tipagem da store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
