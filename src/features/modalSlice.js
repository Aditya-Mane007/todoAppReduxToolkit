import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    displayModal: (state, action) => {
      state.openModal = action.payload;
    },
    closeModal: (state) => {
      state.openModal = "";
    },
  },
});

export const { displayModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
