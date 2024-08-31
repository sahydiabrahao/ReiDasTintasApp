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
    fetchContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = action.payload;
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      state.contact = action.payload;
    },
  },
});

export const {fetchContacts, updateContact} = contactSlice.actions;
export default contactSlice.reducer;
