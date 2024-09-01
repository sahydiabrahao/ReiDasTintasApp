import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UtilsState {
  headerRouteName: string;
  isModalColorVisible: boolean;
  isModalCartVisible: boolean;
}

const initialState: UtilsState = {
  headerRouteName: '',
  isModalColorVisible: false,
  isModalCartVisible: false,
};

const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    routerName(state, action: PayloadAction<string>) {
      if (action.payload === 'Init') {
        state.headerRouteName = '';
      } else {
        state.headerRouteName = action.payload;
      }
    },

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

export const {
  routerName,
  showModalColor,
  hideModalColor,
  showModalCart,
  hideModalCart,
} = utilsSlice.actions;
export default utilsSlice.reducer;
