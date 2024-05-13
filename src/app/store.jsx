import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducer/UserReducer";

export const store = configureStore({
  reducer: {
    Users:UserReducer},
  // reducer:UserReducer
});
