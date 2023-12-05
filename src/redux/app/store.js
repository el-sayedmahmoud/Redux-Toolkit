import { configureStore } from "@reduxjs/toolkit";
import authReduser from "../features/authSlice";
import counterReduser from "../features/counterSlice";
import usersReduser from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authReduser,
    counter: counterReduser,
    users : usersReduser,
  },
});
