import avatarPlacholder from "/placeholder.jpg";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { IUser } from "../../types/IUser";

interface IInitialState {
  users: IUser[] | [];
  archivedUsers: IUser[] | [];
  loading: boolean;
  error: string;
}

const initialState: IInitialState = {
  users: [],
  archivedUsers: [],
  loading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    // const delay = (ms: number) =>
    //   new Promise((resolve) => setTimeout(resolve, ms));

    // await delay(100000);

    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_start=0&_limit=6"
    );
    return res.data;
  } catch {
    toast.error("Не удалось загрузить пользователей");
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    editUser: (state, action: PayloadAction<IUser>) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, ...action.payload };
        } else return user;
      });
    },
    archiveUser: (state, action: PayloadAction<IUser>) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
      state.archivedUsers = [...state.archivedUsers, action.payload];
    },
    hideUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    restoreUser: (state, action: PayloadAction<IUser>) => {
      state.users = [...state.users, action.payload];
      state.archivedUsers = state.archivedUsers.filter(
        (user) => user.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.map((user: IUser) => ({
          ...user,
          avatar: avatarPlacholder,
        }));
        state.loading = false;
      });
  },
});

export const { editUser, archiveUser, hideUser, restoreUser } =
  usersSlice.actions;
export default usersSlice.reducer;
