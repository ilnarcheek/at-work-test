import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isOpen: boolean;
}

const initialState: IInitialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
