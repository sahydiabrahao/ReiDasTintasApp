/* eslint-disable @typescript-eslint/no-shadow */
import {CategoryName, floorMock, Item, itemsMock, wallMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface ItemState {
  items: Item[];
  itemsDatabase: Item[];
  Init: Item[];
  Wall: Item[];
  Wood: Item[];
  Metal: Item[];
  Protection: Item[];
  Floor: Item[];
  Spray: Item[];
  Sealer: Item[];
  Putty: Item[];
  Texture: Item[];
  Effect: Item[];
  PaintRoll: Item[];
  Trowel: Item[];
  Spatula: Item[];
  PaintBrush: Item[];
  SandPapper: Item[];
  Solvent: Item[];
  filteredItems: Item[];
  searchItems: Item[];
}

const initialState: ItemState = {
  items: [],
  itemsDatabase: itemsMock,
  Init: [],
  Wall: wallMock,
  Wood: wallMock,
  Metal: wallMock,
  Protection: wallMock,
  Floor: floorMock,
  Spray: wallMock,
  Sealer: wallMock,
  Putty: wallMock,
  Texture: wallMock,
  Effect: wallMock,
  PaintRoll: wallMock,
  Trowel: wallMock,
  Spatula: wallMock,
  PaintBrush: wallMock,
  SandPapper: wallMock,
  Solvent: wallMock,
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

    filterItemsByCategory: (state, action: PayloadAction<CategoryName>) => {
      const categoryName: CategoryName = action.payload;
      state.filteredItems = initialState[categoryName];
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
