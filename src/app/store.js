import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todolistReducer from "../features/todolist/todoSlice";
export const store = configureStore({
  reducer: {
    counterR: counterReducer,
    todoR: todolistReducer,
  },
});
