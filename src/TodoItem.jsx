function TodoItem(props) {
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

export default TodoItem;
