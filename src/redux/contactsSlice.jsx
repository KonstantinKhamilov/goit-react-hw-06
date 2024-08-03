import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
