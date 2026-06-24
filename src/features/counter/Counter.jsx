import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter() {
  var { count } = useSelector((state) => state.counterR);
  var dispatch = useDispatch();
  return (
    <div className="mybox">
      <h1>Counter : {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Dec
      </button>
    </div>
  );
}

export default Counter;
