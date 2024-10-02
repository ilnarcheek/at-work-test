import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import modalSlice from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
