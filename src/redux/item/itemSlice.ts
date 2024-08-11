import {Item} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ItemState {
  items: Item[];
}

const initialState: ItemState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    pushItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItemById: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementItemQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItemQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  pushItem,
  removeItemById,
  incrementItemQuantity,
  decrementItemQuantity,
} = itemSlice.actions;
export default itemSlice.reducer;
