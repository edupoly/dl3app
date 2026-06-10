import { useState } from "react";
import "./index.css";
import Practice from "./Practice";
import Counter from "./Counter";
function App() {
  var [myname, setMyname] = useState("Praveen Gubbala");
  function up() {
    setMyname(myname.toUpperCase());
  }
  function changename(n) {
    setMyname(n);
  }
  return (
    <div className="mybox">
      <h1>Welcome to Modern Application Development {myname}</h1>
      <Practice x={myname} chup={up} chname={changename}></Practice>
    </div>
  );
}

export default App;
