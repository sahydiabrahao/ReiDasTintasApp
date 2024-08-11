/* eslint-disable @typescript-eslint/no-shadow */
import {Item, itemsMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ItemState {
  items: Item[];
  itemsDatabase: Item[];
  filteredItems: Item[];
}

const initialState: ItemState = {
  items: [],
  itemsDatabase: itemsMock,
  filteredItems: [],
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
      // Recebe o nome da categoria do payload
      const categoryName = action.payload;
      // Filtra os itens que pertencem à categoria fornecida
      state.filteredItems = state.itemsDatabase.filter(
        itemsDatabase => itemsDatabase.category === categoryName,
      );
    },
    // Outras ações podem ser adicionadas aqui conforme necessário
  },
});

export const {
  pushItem,
  removeItemById,
  incrementItemQuantity,
  decrementItemQuantity,
  filterItemsByCategory,
} = itemSlice.actions;
export default itemSlice.reducer;
