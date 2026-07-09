import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(window.localStorage.getItem("cartItems")) || [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    incCartItemCount: (state, action) => {
      console.log(action);
      var temp = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
      state.cartItems = [...temp];
      window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decCartItemCount: (state, action) => {
      var temp = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.count--;
        }
        return item;
      });
      state.cartItems = [...temp];
      window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export const { addToCart, incCartItemCount, decCartItemCount } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
