import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces.ts/data";
import { RootStore } from "../store";

const initialState = {
  users: [] as User[],
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

// Selectors
export const getUsers = (store: RootStore) => store.usersReducer.users;

// Actions
export const addUser = users.actions.addUser;

export default users;
