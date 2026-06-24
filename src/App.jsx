import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";
import "./index.css";

function App() {
  return (
    <div className="mybox">
      <h1>Welcome to Modern Application Development</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
// state (useState hook)
// action (function)
// ui (JSX)
