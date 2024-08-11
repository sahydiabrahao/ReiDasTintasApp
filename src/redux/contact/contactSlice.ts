import {Contact, contactsMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ContactState {
  contacts: Contact[];
  contact: Contact;
  isBackButtonVisible: boolean;
}

const initialState: ContactState = {
  contacts: contactsMock,
  contact: contactsMock[0],
  isBackButtonVisible: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    getContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = action.payload;
    },
    setContact: (state, action: PayloadAction<Contact>) => {
      state.contact = action.payload;
    },
    toggleBackButtonVisibility: (state, action: PayloadAction<boolean>) => {
      state.isBackButtonVisible = action.payload;
    },
  },
});

export const {getContacts, setContact, toggleBackButtonVisibility} =
  contactSlice.actions;
export default contactSlice.reducer;
