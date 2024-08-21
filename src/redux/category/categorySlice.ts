import {Category, CategoryName, categoriesMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  categories: Category[];
  selectedCategory: CategoryName;
  selectedCategoryTitle?: string;
}

const initialState: CategoryState = {
  categories: categoriesMock,
  selectedCategory: 'Init',
  selectedCategoryTitle: '',
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
    setCategoryTitleByName: (state, action: PayloadAction<string>) => {
      const category = state.categories.find(
        cat => cat.name === action.payload,
      );
      state.selectedCategoryTitle = category?.title;
    },
    clearSelectedCategory: state => {
      state.selectedCategory = 'Init';
    },
  },
});

export const {
  setCategory,
  selectCategory,
  setCategoryTitleByName,
  clearSelectedCategory,
} = categorySlice.actions;
export default categorySlice.reducer;
