import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
import modalReducer from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    modal: modalReducer,
  },
});
