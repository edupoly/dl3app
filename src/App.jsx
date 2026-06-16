import "./index.css";
import Second from "./Second";
import MyContext from "./MyContext";
function App() {
  var a = 100;
  return (
    <MyContext.Provider
      value={{ name: "Praveen", age: 30, place: "Bangalore" }}
    >
      <div className="mybox">
        <h1>Welcome to Modern Application Development {a}</h1>
        <Second x={a}></Second>
      </div>
    </MyContext.Provider>
  );
}

export default App;
// state (useState hook)
// action (function)
// ui (JSX)
