import { useState } from "react";

function Counter(props) {
  var [c, setC] = useState(props.i);
  function inc() {
    // c = c + 1;
    setC(c + props.s);
  }
  function dec() {
    setC(c - props.s);
  }
  return (
    <div className="mybox">
      <h2>
        {props.t} Counter:{c}
      </h2>
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
