import { useState } from "react";
function Todolist() {
  var [todos, setTodos] = useState([]); //state
  //action
  function addTodo() {
    //adding textbox value into todos array
    var ntd = document.getElementById("d1").value;
    // todos.push(ntd);//wrong
    setTodos([...todos, ntd]);
  }
  return (
    <div className="mybox">
      <b>Todolist</b>
      <hr />
      <input type="text" id="d1" />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.reverse().map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
// state
//action
//UI
