import { createSlice } from "@reduxjs/toolkit";
import { User } from "../interfaces.ts/data";

const users: User[] = [
  {
    id: 123,
    name: "Dave",
    age: 22,
  },
  {
    id: 786,
    name: "Bill",
    age: 78,
    isAdmin: true,
  },
  {
    id: 345,
    name: "Bob",
    age: 45,
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users,
  },
  reducers: {
    addUser: (state = { users: [] }, action: { payload: User }) => {
      state.users.push(action.payload);
    },
  },
});
