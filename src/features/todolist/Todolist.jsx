import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";
function Todolist() {
  var { todos } = useSelector((state) => state.todoR);
  var [ntd, setNtd] = useState("");
  var dispatch = useDispatch();
  console.log(todos);
  return (
    <div className="mybox">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setNtd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(ntd));
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos?.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
