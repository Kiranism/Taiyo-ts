import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contact = {
  id?: number;
  firstName: string;
  lastName: string;
  status: string;
};

type ContactState = {
  contacts: Contact[];
};

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const newContact: Contact = {
        ...action.payload,
      };
      newContact.id = state.contacts.length + 1;
      state.contacts.push(newContact);
    },
    deleteContact: (state, action: PayloadAction<number | undefined>) => {
      const id = action.payload;
      state.contacts = state.contacts.filter((item) => item.id !== id);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, firstName, lastName, status } = action.payload;
      const contact = state.contacts.find((item) => item.id === id);
      if (contact) {
        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.status = status;
      }
    },
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
