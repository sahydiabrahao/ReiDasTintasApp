import {Contact, contactsMock} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ContactState {
  contacts: Contact[];
  contact: Contact;
}

const initialState: ContactState = {
  contacts: contactsMock,
  contact: contactsMock[0],
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
  },
});

export const {getContacts, setContact} = contactSlice.actions;
export default contactSlice.reducer;
