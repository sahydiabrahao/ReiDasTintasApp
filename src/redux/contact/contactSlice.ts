import {Contact, contactsMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ContactState {
  contacts: Contact;
  isBackButtonVisible: boolean;
}

const initialState: ContactState = {
  contacts: contactsMock[0],
  isBackButtonVisible: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<Contact>) => {
      state.contacts = action.payload;
    },
    toggleBackButtonVisibility: (state, action: PayloadAction<boolean>) => {
      state.isBackButtonVisible = action.payload;
    },
  },
});

export const {setContact, toggleBackButtonVisibility} = contactSlice.actions;
export default contactSlice.reducer;
