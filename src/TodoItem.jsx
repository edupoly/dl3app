import { useEffect, memo } from "react";

function TodoItem(props) {
  useEffect(() => {
    console.log("TodoItem Mounted ", props.t);
  }, []);

  useEffect(() => {
    console.log("TodoItem Updated ", props.t);
  });

  return (
    <div
      className="mybox"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <b>{props.t}</b>
      <div>
        <button
          onClick={() => {
            props.dTodo(props.i);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default memo(TodoItem);
