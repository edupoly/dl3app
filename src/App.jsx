import { Outlet, Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="mybox">
      <h1>Welcome to App Component</h1>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/counter">Counter</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/todolist">Todolist</Link>
      &nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
// state (useState hook)
// action (function)
// ui (JSX)
