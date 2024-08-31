/* eslint-disable @typescript-eslint/no-shadow */
import {
  CategoryName,
  effectMock,
  floorMock,
  Item,
  itemsMock,
  metalMock,
  paintBrushMock,
  paintForkRollMock,
  protectionMock,
  puttyMock,
  sandPapperMock,
  sealerMock,
  solventMock,
  spatulaMock,
  sprayMock,
  textureMock,
  trowelMock,
  wallMock,
  woodMock,
} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ItemState {
  items: Item[];
  itemId: string;
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
  isVisible: boolean;
}

const initialState: ItemState = {
  items: [],
  itemId: '',
  itemsDatabase: itemsMock,
  Init: [],
  Wall: wallMock,
  Wood: woodMock,
  Metal: metalMock,
  Protection: protectionMock,
  Floor: floorMock,
  Spray: sprayMock,
  Sealer: sealerMock,
  Putty: puttyMock,
  Texture: textureMock,
  Effect: effectMock,
  PaintRoll: paintForkRollMock,
  Trowel: trowelMock,
  Spatula: spatulaMock,
  PaintBrush: paintBrushMock,
  SandPapper: sandPapperMock,
  Solvent: solventMock,
  filteredItems: [],
  searchItems: [],
  isVisible: false,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    updateItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
    assignItemId: (state, action: PayloadAction<string>) => {
      state.itemId = action.payload;
    },

    addItem: (state, action: PayloadAction<Item>) => {
      const itemExists = state.items.some(
        item => item.id === action.payload.id,
      );
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },

    deleteItemById: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    filterItemsByCategory: (state, action: PayloadAction<CategoryName>) => {
      const categoryName: CategoryName = action.payload;
      state.filteredItems = initialState[categoryName];
    },

    filterItemsBySearchQuery: (state, action: PayloadAction<string>) => {
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

    changeItemColor(state, action: PayloadAction<{id: string; color: string}>) {
      const {id, color} = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.color = color;
      }
    },
    showModalCart(state) {
      state.isVisible = true;
    },
    hideModalCart(state) {
      state.isVisible = false;
    },
  },
});

export const {
  updateItems,
  assignItemId,
  addItem,
  deleteItemById,
  increaseItemQuantity,
  decreaseItemQuantity,
  filterItemsByCategory,
  filterItemsBySearchQuery,
  changeItemColor,
  showModalCart,
  hideModalCart,
} = itemSlice.actions;
export default itemSlice.reducer;
