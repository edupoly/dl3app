import { useState } from "react";
import TodoItem from "./TodoItem";
function Todolist() {
  var [todos, setTodos] = useState([
    "bring papa home",
    "purchase toys",
    "goto goa",
    "play cricket",
    "buy tickets",
  ]); //state
  //action
  function addTodo() {
    //adding textbox value into todos array
    var ntd = document.getElementById("d1").value;
    // todos.push(ntd);//wrong
    setTodos([...todos, ntd]);
  }
  function deleteTodo(index) {
    // solution 1
    var temp = [...todos];
    temp.splice(index, 1);
    setTodos([...temp]);

    //soluction 2

    // setTodos((ctodos) => {
    //   ctodos = ctodos.filter((t, i) => {
    //     return i != index;
    //   });
    //   return [...ctodos];
    // });
  }
  return (
    <div className="mybox" style={{ textAlign: "center" }}>
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
      <ul style={{ padding: "0px" }}>
        {todos.map((todo, i) => {
          return <TodoItem i={i} t={todo} dTodo={deleteTodo}></TodoItem>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
// state
//action
//UI
