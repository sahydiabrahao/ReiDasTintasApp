import {Color} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  colors: Color[];
  color: Color;
  isVisible: boolean;
}

const initialState: CategoryState = {
  colors: [],
  color: {name: '', color: '', textColor: ''},
  isVisible: false,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    favoriteColors: (state, action: PayloadAction<Color>) => {
      state.colors.push(action.payload);
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

export const {favoriteColors, setColor, openModal, closeModal} =
  colorSlice.actions;
export default colorSlice.reducer;
