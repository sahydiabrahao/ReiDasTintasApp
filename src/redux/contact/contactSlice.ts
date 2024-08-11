import {Contact} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ContactState {
  contacts: Contact;
}

const initialState: ContactState = {
  contacts: {
    city: 'Cuiabá - MT',
    district: 'Jardim Imperial',
    address: 'Av. das Torres, 24',
    phone: '(65) 3057 9889',
  },
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<Contact>) => {
      state.contacts = action.payload;
    },
  },
});

export const {setContact} = contactSlice.actions;
export default contactSlice.reducer;
