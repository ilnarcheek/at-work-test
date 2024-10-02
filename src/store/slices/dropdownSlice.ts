import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  activeDropdownId: number | null;
}

const initialState: IInitialState = {
  activeDropdownId: null,
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: initialState,
  reducers: {
    openDropdown: (state, action: PayloadAction<number>) => {
      state.activeDropdownId = action.payload;
    },
    closeDropdown: (state) => {
      state.activeDropdownId = null;
    },
  },
});

export const { openDropdown, closeDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
