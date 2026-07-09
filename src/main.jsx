import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsList from "./features/products/ProductsList.jsx";
import Login from "./features/user/Login.jsx";
import Cart from "./features/products/Cart.jsx";
import Payment from "./features/products/Payment.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <ProductsList></ProductsList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
);
