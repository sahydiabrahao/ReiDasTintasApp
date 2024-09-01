import {Category, CategoryName, categoriesMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  categories: Category[];
  categoryName: CategoryName;
  categoryTitle?: string;
}

const initialState: CategoryState = {
  categories: categoriesMock,
  categoryName: 'Init',
  categoryTitle: '',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateCategory: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },

    chooseCategory: (state, action: PayloadAction<CategoryName>) => {
      state.categoryName = action.payload;
    },

    updateCategoryTitle: (state, action: PayloadAction<string>) => {
      const category = state.categories.find(
        cat => cat.name === action.payload,
      );
      state.categoryTitle = category?.title;
    },

    resetSelectedCategory: state => {
      state.categoryName = 'Init';
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
