import { useState, useCallback } from "react";
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
    var ntd = document.getElementById("d1").value;
    setTodos([...todos, ntd]);
  }

  var deleteTodo = useCallback((index) => {
    setTodos((ctodos) => {
      ctodos = ctodos.filter((t, i) => {
        return i != index;
      });
      return [...ctodos];
    });
  }, []);

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
          return (
            <TodoItem i={i} t={todo} dTodo={deleteTodo} key={todo}></TodoItem>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
// state
//action
//UI

//memo
//useCallback
//useMemo
