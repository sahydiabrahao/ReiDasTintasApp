import {configureStore} from '@reduxjs/toolkit';

import categoryReducer from './category/categorySlice';
import colorReducer from './color/colorSlice';
import contactReducer from './contact/contactSlice';
import itemtReducer from './item/itemSlice';
import utilsReducer from './utils/utilsSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    item: itemtReducer,
    category: categoryReducer,
    color: colorReducer,
    utils: utilsReducer,
  },
});

// Tipagem da store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
