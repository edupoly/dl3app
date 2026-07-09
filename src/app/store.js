import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "../services/productsApi";
import cartReducer from "../features/products/cartSlice";
import { authApi } from "../services/authApi";
import userReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    cartR: cartReducer,
    userR: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
