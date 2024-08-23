import {bluesMock, Color} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  colors: Color[];
}

const initialState: CategoryState = {
  colors: bluesMock,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<Color[]>) => {
      state.colors = action.payload;
    },
  },
});

export const {setColor} = colorSlice.actions;
export default colorSlice.reducer;
