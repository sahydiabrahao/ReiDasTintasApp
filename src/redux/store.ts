import {configureStore} from '@reduxjs/toolkit';

import contactReducer from './contact/contactSlice';
import itemtReducer from './item/itemSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    item: itemtReducer,
  },
});

// Tipagem da store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
