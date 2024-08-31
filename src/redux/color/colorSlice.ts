import {Color} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ColorState {
  favoriteColors: Color[];
  favoriteColor: Color;
  isVisible: boolean;
}

const initialState: ColorState = {
  favoriteColors: [],
  favoriteColor: {name: 'Gelo', hexValue: '#FAFAFA', contrastColor: '#000000'},
  isVisible: false,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    updateFavoriteColors: (state, action: PayloadAction<Color[]>) => {
      state.favoriteColors = action.payload;
    },

    addFavoriteColor: (state, action: PayloadAction<Color>) => {
      const colorExists = state.favoriteColors.some(
        color => color.name === action.payload.name,
      );
      if (!colorExists) {
        state.favoriteColors.push(action.payload);
      }
    },
    deleteFavoriteColorByName: (state, action: PayloadAction<string>) => {
      state.favoriteColors = state.favoriteColors.filter(
        color => color.name !== action.payload,
      );
    },

    updateColor: (state, action: PayloadAction<Color>) => {
      state.favoriteColor = action.payload;
    },
    showModalColor(state) {
      state.isVisible = true;
    },
    hideModalColor(state) {
      state.isVisible = false;
    },
  },
});

export const {
  updateFavoriteColors,
  addFavoriteColor,
  deleteFavoriteColorByName,
  updateColor,
  showModalColor,
  hideModalColor,
} = colorSlice.actions;
export default colorSlice.reducer;
