import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
  modalA: false,
  modalB: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModalA: (state) => {
      state.isModal = true;
      state.modalA = true;
    },
    openModalB: (state) => {
      state.isModal = true;
      state.modalB = true;
    },
    closeModal: (state) => {
      state.isModal = false;
    },
  },
});

export const { openModalA, openModalB, closeModal } = modal.actions;
export default modal.reducer;
