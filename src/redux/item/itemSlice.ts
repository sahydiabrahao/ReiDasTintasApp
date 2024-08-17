/* eslint-disable @typescript-eslint/no-shadow */
import {Item, itemsMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ItemState {
  items: Item[];
  itemsDatabase: Item[];
  filteredItems: Item[];
  searchItems: Item[];
}

const initialState: ItemState = {
  items: [],
  itemsDatabase: itemsMock,
  filteredItems: [],
  searchItems: [],
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
    filterItemsByCategory: (state, action: PayloadAction<string>) => {
      const categoryName = action.payload;
      state.filteredItems = state.itemsDatabase.filter(
        itemsDatabase => itemsDatabase.category === categoryName,
      );
    },
    filterItemsBySearch: (state, action: PayloadAction<string>) => {
      const searchText = action.payload.toLowerCase();
      if (searchText.trim() === '' || searchText.trim().length < 2) {
        state.searchItems = [];
        return;
      }

      state.searchItems = state.itemsDatabase.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchText),
        ),
      );
    },
  },
});

export const {
  pushItem,
  removeItemById,
  incrementItemQuantity,
  decrementItemQuantity,
  filterItemsByCategory,
  filterItemsBySearch,
} = itemSlice.actions;
export default itemSlice.reducer;
