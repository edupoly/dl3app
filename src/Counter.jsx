import { useReducer } from "react";

//state
const initialState = {
  count: 0,
};

//action
function reducer(state, action) {
  console.log("reducer called", state, action);
  switch (action.type) {
    case "INCREMENT":
      state.count = state.count + 1;
      break;
    case "DECREMENT":
      state.count = state.count - 1;
      break;
    case "RESET":
      state.count = 0;
  }
  return { ...state };
}

//ui
function Counter() {
  var [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="mybox">
      <h3>Counter {state.count}</h3>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
// state, action, ui
