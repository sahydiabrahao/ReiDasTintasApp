import {Category, categoryListMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  categories: Category[];
  selectedCategory: string;
}

const initialState: CategoryState = {
  categories: categoryListMock,
  selectedCategory: 'Init',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory: state => {
      state.selectedCategory = 'init';
    },
  },
});

export const {setCategory, selectCategory, clearSelectedCategory} =
  categorySlice.actions;
export default categorySlice.reducer;
