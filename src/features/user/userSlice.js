import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: JSON.parse(window.localStorage.getItem("userDetails")) || null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userDetails = action.payload;
      window.localStorage.setItem(
        "userDetails",
        JSON.stringify(action.payload),
      );
    },
    logout: (state, action) => {
      state.userDetails = null;
    },
  },
});

export const { updateUser, logout } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
