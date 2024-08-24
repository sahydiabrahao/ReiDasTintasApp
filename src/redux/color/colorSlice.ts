import {Color} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  colors: Color[];
  color: Color;
  isVisible: boolean;
}

const initialState: CategoryState = {
  colors: [
    {name: 'Branco', color: '#F5F5F5', textColor: '#000000'},
    {name: 'Gelo', color: '#E8E8E8', textColor: '#000000'},
  ],
  color: {name: '', color: '', textColor: ''},
  isVisible: false,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    favoriteColors: (state, action: PayloadAction<Color>) => {
      const colorExists = state.colors.some(
        color => color.name === action.payload.name,
      );
      if (!colorExists) {
        state.colors.push(action.payload);
      }
    },
    removeColorByName: (state, action: PayloadAction<string>) => {
      state.colors = state.colors.filter(
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
