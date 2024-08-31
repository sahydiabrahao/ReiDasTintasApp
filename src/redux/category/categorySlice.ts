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
    updateCategory: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    chooseCategory: (state, action: PayloadAction<CategoryName>) => {
      state.selectedCategory = action.payload;
    },
    updateCategoryTitle: (state, action: PayloadAction<string>) => {
      const category = state.categories.find(
        cat => cat.name === action.payload,
      );
      state.selectedCategoryTitle = category?.title;
    },
    resetSelectedCategory: state => {
      state.selectedCategory = 'Init';
    },
  },
});

export const {
  updateCategory,
  chooseCategory,
  updateCategoryTitle,
  resetSelectedCategory,
} = categorySlice.actions;
export default categorySlice.reducer;
