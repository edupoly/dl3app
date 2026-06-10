import Counter from "./Counter";
import Gallery from "./Gallery";
import "./index.css";
import LikeDislike from "./LikeDislike";
import Practice from "./Practice";
import Todolist from "./Todolist";

function App() {
  return (
    <div className="mybox">
      <h1>Welcome to Component State</h1>
      <Gallery></Gallery>
      <Todolist></Todolist>
      <LikeDislike></LikeDislike>
      <Counter></Counter>
      <Practice></Practice>
    </div>
  );
}

export default App;
// state (useState hook)
// action (function)
// ui (JSX)
