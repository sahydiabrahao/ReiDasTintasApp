import {Color, favoriteColorsMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  favoriteColors: Color[];
  color: Color;
  isVisible: boolean;
}

const initialState: CategoryState = {
  favoriteColors: favoriteColorsMock,
  color: {name: '', hexValue: '', contrastColor: ''},
  isVisible: false,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    favoriteColors: (state, action: PayloadAction<Color>) => {
      const colorExists = state.favoriteColors.some(
        color => color.name === action.payload.name,
      );
      if (!colorExists) {
        state.favoriteColors.push(action.payload);
      }
    },
    removeColorByName: (state, action: PayloadAction<string>) => {
      state.favoriteColors = state.favoriteColors.filter(
        color => color.name !== action.payload,
      );
    },

    setColor: (state, action: PayloadAction<Color>) => {
      state.color = action.payload;
    },
    openModal(state) {
      state.isVisible = true;
    },
    closeModal(state) {
      state.isVisible = false;
    },
  },
});

export const {
  favoriteColors,
  removeColorByName,
  setColor,
  openModal,
  closeModal,
} = colorSlice.actions;
export default colorSlice.reducer;
