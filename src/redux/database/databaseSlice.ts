import {Item, Contact} from '@domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DatabaseState {
  items: Item[];
  contacts: Contact;
}

const initialState: DatabaseState = {
  items: [],
  contacts: {
    city: 'Cuiabá - MT',
    district: 'Jardim Imperial',
    address: 'Av. das Torres, 24',
    phone: '(65) 3057 9889',
  },
};

const databaseSlice = createSlice({
  name: 'database',
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<Contact>) => {
      state.contacts = action.payload;
    },
  },
});

export const {setContact} = databaseSlice.actions;
export default databaseSlice.reducer;
