import {createSlice} from '@reduxjs/toolkit';

interface UtilsState {
  isModalColorVisible: boolean;
  isModalCartVisible: boolean;
}

const initialState: UtilsState = {
  isModalColorVisible: false,
  isModalCartVisible: false,
};

const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    showModalColor(state) {
      state.isModalColorVisible = true;
    },

    hideModalColor(state) {
      state.isModalColorVisible = false;
    },
    showModalCart(state) {
      state.isModalCartVisible = true;
      console.log('test');
    },

    hideModalCart(state) {
      state.isModalCartVisible = false;
    },
  },
});

export const {showModalColor, hideModalColor, showModalCart, hideModalCart} =
  utilsSlice.actions;
export default utilsSlice.reducer;
