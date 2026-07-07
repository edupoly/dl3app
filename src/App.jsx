import { Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
// state (useState hook)
// action (function)
// ui (JSX)
