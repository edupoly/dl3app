import { Outlet } from "react-router-dom";
import Navbar from "./compnents/Navbar";
import ProductsList from "./features/products/ProductsList";
import "./index.css";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
