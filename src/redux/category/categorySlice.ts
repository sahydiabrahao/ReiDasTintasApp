import {Category, CategoryName, categoriesMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  categories: Category[];
  selectedCategory: CategoryName;
}

const initialState: CategoryState = {
  categories: categoriesMock,
  selectedCategory: 'Init',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    selectCategory: (state, action: PayloadAction<CategoryName>) => {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory: state => {
      state.selectedCategory = 'Init';
    },
  },
});

export const {setCategory, selectCategory, clearSelectedCategory} =
  categorySlice.actions;
export default categorySlice.reducer;
