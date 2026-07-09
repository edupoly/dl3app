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
  },
});

export const { updateUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
