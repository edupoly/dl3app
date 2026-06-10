import { useState } from "react";

function Counter() {
  var [c, setC] = useState(0);
  function inc() {
    // c = c + 1;
    setC(c + 1);
  }
  function dec() {
    setC(c - 1);
  }
  return (
    <div className="mybox">
      <h2>Counter:{c}</h2>
      <button
        onClick={() => {
          inc();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
