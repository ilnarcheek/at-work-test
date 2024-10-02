import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import modalSlice from "./slices/modalSlice";
import dropdownSlice from "./slices/dropdownSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    modal: modalSlice,
    dropdown: dropdownSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
