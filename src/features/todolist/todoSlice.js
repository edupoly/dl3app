import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: ["goto goa", "play cricket", "pay fees"],
};
export const todolistSlice = createSlice({
  name: "todolistSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});
export const { addTodo } = todolistSlice.actions;
export default todolistSlice.reducer;
